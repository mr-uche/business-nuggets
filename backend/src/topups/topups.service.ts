import { BadRequestException, ConflictException, ForbiddenException, Injectable, NotFoundException, ServiceUnavailableException } from "@nestjs/common";
import { db } from "../prisma/db";
import { hasActivePaidSubscription, isPaidSubscriptionInGrace, paidReadingExpiry } from "../nuggets/paid-history-access";

export const TOP_UP_PLAN_PREFIX = "topup:";

/** Credits persist after their original bundle period and roll over until consumed. */
@Injectable()
export class TopUpsService {
  private setup?: Promise<void>;
  private ensureTables() {
    if (!this.setup) this.setup = (async () => {
      await db.runtime().execute(db.raw.sql`
        CREATE TABLE IF NOT EXISTS "NuggetTopUpBundle" (
          "slug" text PRIMARY KEY, "name" text NOT NULL,
          "credits" integer NOT NULL CHECK ("credits" BETWEEN 1 AND 10000),
          "priceCents" integer NOT NULL CHECK ("priceCents" BETWEEN 1 AND 1000000000),
          "currency" text NOT NULL DEFAULT 'USD',
          "validityDays" integer NOT NULL DEFAULT 30 CHECK ("validityDays" BETWEEN 1 AND 3650),
          "active" boolean NOT NULL DEFAULT true,
          "createdAt" timestamptz NOT NULL DEFAULT NOW(),
          "updatedAt" timestamptz NOT NULL DEFAULT NOW()
        )
      `.affectedCount().build());
      await db.runtime().execute(db.raw.sql`
        CREATE TABLE IF NOT EXISTS "NuggetTopUpOrder" (
          "reference" text PRIMARY KEY, "userId" integer NOT NULL,
          "bundleSlug" text NOT NULL, "credits" integer NOT NULL CHECK ("credits" > 0),
          "amountCents" integer NOT NULL CHECK ("amountCents" > 0),
          "currency" text NOT NULL, "validityDays" integer NOT NULL CHECK ("validityDays" > 0),
          "createdAt" timestamptz NOT NULL DEFAULT NOW()
        )
      `.affectedCount().build());
      await db.runtime().execute(db.raw.sql`
        CREATE TABLE IF NOT EXISTS "NuggetTopUpCreditLot" (
          "id" bigserial PRIMARY KEY, "reference" text NOT NULL UNIQUE,
          "userId" integer NOT NULL, "bundleSlug" text NOT NULL,
          "totalCredits" integer NOT NULL CHECK ("totalCredits" > 0),
          "remainingCredits" integer NOT NULL CHECK ("remainingCredits" >= 0),
          "purchasedAt" timestamptz NOT NULL,
          "originalExpiresAt" timestamptz NOT NULL
        )
      `.affectedCount().build());
      await db.runtime().execute(db.raw.sql`
        CREATE INDEX IF NOT EXISTS "NuggetTopUpCreditLot_user_idx"
        ON "NuggetTopUpCreditLot" ("userId", "purchasedAt", "id")
      `.affectedCount().build());
      await db.runtime().execute(db.raw.sql`
        CREATE TABLE IF NOT EXISTS "NuggetTopUpRedemption" (
          "userId" integer NOT NULL, "nuggetId" text NOT NULL,
          "redeemedAt" timestamptz NOT NULL DEFAULT NOW(),
          PRIMARY KEY ("userId", "nuggetId")
        )
      `.affectedCount().build());
    })().catch(() => {
      this.setup = undefined;
      throw new ServiceUnavailableException("Top-up tables must be provisioned by a database administrator.");
    });
    return this.setup;
  }

  async listBundles(includeInactive = false) {
    await this.ensureTables();
    const rows = await db.runtime().query(db.raw.sql`
      SELECT "slug", "name", "credits", "priceCents", "currency", "validityDays", "active"
      FROM "NuggetTopUpBundle" ORDER BY "credits", "priceCents", "slug"
    `.returnsRow({
      slug: "pg/text@1", name: "pg/text@1", credits: "pg/int4@1",
      priceCents: "pg/int4@1", currency: "pg/text@1",
      validityDays: "pg/int4@1", active: "pg/bool@1",
    }).build());
    return includeInactive ? rows : rows.filter(row => row.active);
  }

  async createBundle(input: {slug: string; name: string; credits: number; priceCents: number; currency: string; validityDays: number}) {
    this.validate(input);
    await this.ensureTables();
    const affected = await db.runtime().execute(db.raw.sql`
      INSERT INTO "NuggetTopUpBundle" ("slug", "name", "credits", "priceCents", "currency", "validityDays")
      VALUES (${input.slug}, ${input.name.trim()}, ${input.credits}, ${input.priceCents}, ${input.currency}, ${input.validityDays})
      ON CONFLICT ("slug") DO NOTHING
    `.affectedCount().build());
    if (Number(affected) === 0) throw new ConflictException("A Top-up bundle with that slug already exists.");
    return (await this.listBundles(true)).find(row => row.slug === input.slug);
  }

  async updateBundle(slug: string, input: {name?: string; credits?: number; priceCents?: number; currency?: string; validityDays?: number; active?: boolean}) {
    this.validate(input);
    await this.ensureTables();
    const original = (await this.listBundles(true)).find(row => row.slug === slug);
    if (!original) throw new NotFoundException("Top-up bundle not found.");
    await db.runtime().execute(db.raw.sql`
      UPDATE "NuggetTopUpBundle"
      SET "name" = ${input.name?.trim() ?? original.name},
        "credits" = ${input.credits ?? original.credits},
        "priceCents" = ${input.priceCents ?? original.priceCents},
        "currency" = ${input.currency ?? original.currency},
        "validityDays" = ${input.validityDays ?? original.validityDays},
        "active" = ${input.active ?? original.active},
        "updatedAt" = NOW()
      WHERE "slug" = ${slug}
    `.affectedCount().build());
    return (await this.listBundles(true)).find(row => row.slug === slug);
  }

  private validate(input: {slug?: string; name?: string; credits?: number; priceCents?: number; currency?: string; validityDays?: number}) {
    if (input.slug !== undefined && (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(input.slug) || input.slug.length > 80))
      throw new BadRequestException("Use a slug of lowercase letters, numbers and single hyphens.");
    if (input.name !== undefined && (!input.name.trim() || input.name.trim().length > 100))
      throw new BadRequestException("Bundle name must have 1–100 characters.");
    if (input.credits !== undefined && (!Number.isInteger(input.credits) || input.credits < 1 || input.credits > 10000))
      throw new BadRequestException("Credits must be a whole number between 1 and 10,000.");
    if (input.priceCents !== undefined && (!Number.isInteger(input.priceCents) || input.priceCents < 1 || input.priceCents > 1000000000))
      throw new BadRequestException("Price must be a positive whole amount.");
    if (input.validityDays !== undefined && (!Number.isInteger(input.validityDays) || input.validityDays < 1 || input.validityDays > 3650))
      throw new BadRequestException("Original bundle period must be between 1 and 3650 days.");
    if (input.currency !== undefined && !/^[A-Z]{3}$/.test(input.currency))
      throw new BadRequestException("Currency must be three uppercase letters.");
  }

  async saveOrder(reference: string, userId: number, slug: string) {
    await this.ensureTables();
    const user = await db.orm.public.User.where({ id: userId }).first();
    if (!user) throw new NotFoundException("Member not found.");
    if (!hasActivePaidSubscription(user)) throw new ForbiddenException("Renew your paid subscription before buying a Top-up.");
    const bundle = (await this.listBundles()).find(item => item.slug === slug);
    if (!bundle) throw new NotFoundException("Active Top-up bundle not found.");
    await db.runtime().execute(db.raw.sql`
      INSERT INTO "NuggetTopUpOrder" ("reference", "userId", "bundleSlug", "credits", "amountCents", "currency", "validityDays")
      VALUES (${reference}, ${userId}, ${bundle.slug}, ${bundle.credits}, ${bundle.priceCents}, ${bundle.currency}, ${bundle.validityDays})
    `.affectedCount().build());
    return bundle;
  }

  async grantVerifiedCredits(reference: string, userId: number) {
    await this.ensureTables();
    const transaction = await db.orm.public.BillingTransaction.where({ providerReference: reference }).first();
    if (!transaction || transaction.userId !== userId || transaction.status !== "paid" ||
        !transaction.planSlug.startsWith(TOP_UP_PLAN_PREFIX))
      throw new ForbiddenException("A verified paid Top-up transaction is required.");
    const granted = await db.runtime().execute(db.raw.sql`
      INSERT INTO "NuggetTopUpCreditLot"
        ("reference", "userId", "bundleSlug", "totalCredits", "remainingCredits", "purchasedAt", "originalExpiresAt")
      SELECT "reference", "userId", "bundleSlug", "credits", "credits",
        NOW(), NOW() + ("validityDays" * INTERVAL '1 day')
      FROM "NuggetTopUpOrder"
      WHERE "reference" = ${reference} AND "userId" = ${userId}
        AND "bundleSlug" = ${transaction.planSlug.slice(TOP_UP_PLAN_PREFIX.length)}
        AND "amountCents" = ${transaction.amountCents} AND "currency" = ${transaction.currency}
      ON CONFLICT ("reference") DO NOTHING
    `.affectedCount().build());
    return { credited: Number(granted) > 0, wallet: await this.getWallet(userId) };
  }

  async getRedeemedIds(userId: number): Promise<Set<string>> {
    await this.ensureTables();
    const rows = await db.runtime().query(db.raw.sql`
      SELECT "nuggetId" FROM "NuggetTopUpRedemption" WHERE "userId" = ${userId}
    `.returnsRow({ nuggetId: "pg/text@1" }).build());
    return new Set(rows.map(row => row.nuggetId));
  }

  async getWallet(userId: number) {
    await this.ensureTables();
    const user = await db.orm.public.User.where({ id: userId }).first();
    if (!user) throw new NotFoundException("Member not found.");
    const lots = await db.runtime().query(db.raw.sql`
      SELECT "reference", "bundleSlug", "totalCredits", "remainingCredits", "purchasedAt", "originalExpiresAt"
      FROM "NuggetTopUpCreditLot" WHERE "userId" = ${userId} ORDER BY "purchasedAt" DESC
    `.returnsRow({
      reference:"pg/text@1", bundleSlug:"pg/text@1",
      totalCredits:"pg/int4@1", remainingCredits:"pg/int4@1",
      purchasedAt:"pg/timestamptz-string@1", originalExpiresAt:"pg/timestamptz-string@1",
    }).build());
    return {
      balance: lots.reduce((n, lot) => n + lot.remainingCredits, 0),
      lifetimePurchased: lots.reduce((n, lot) => n + lot.totalCredits, 0),
      lifetimeUsed: lots.reduce((n, lot) => n + lot.totalCredits - lot.remainingCredits, 0),
      canSpend: hasActivePaidSubscription(user),
      inGrace: isPaidSubscriptionInGrace(user),
      graceEndsAt: paidReadingExpiry(user),
      rollover: true, lots,
    };
  }

  /** Unique redemption + conditional debit in one transaction prevents double spending. */
  async redeem(userId: number, nuggetId: string, expiresAt: string) {
    await this.ensureTables();
    return db.transaction(async tx => {
      const reserved = await tx.execute(db.raw.sql`
        INSERT INTO "NuggetTopUpRedemption" ("userId", "nuggetId")
        VALUES (${userId}, ${nuggetId})
        ON CONFLICT ("userId", "nuggetId") DO NOTHING
      `.affectedCount().build());
      if (Number(reserved) === 0) return false;
      const debit = await tx.execute(db.raw.sql`
        UPDATE "NuggetTopUpCreditLot"
        SET "remainingCredits" = "remainingCredits" - 1
        WHERE "id" = (
          SELECT "id" FROM "NuggetTopUpCreditLot"
          WHERE "userId" = ${userId} AND "remainingCredits" > 0
          ORDER BY "purchasedAt", "id" LIMIT 1 FOR UPDATE SKIP LOCKED
        ) AND "remainingCredits" > 0
      `.affectedCount().build());
      if (Number(debit) !== 1) throw new ForbiddenException({
        code: "TOPUP_CREDITS_EXHAUSTED",
        message: "No unused Top-up Nuggets remain. Buy a bundle or wait for the next monthly allowance.",
      });
      await tx.execute(db.raw.sql`
        INSERT INTO "NuggetAccessGrant" ("userId", "nuggetId", "openedAt", "expiresAt")
        VALUES (${userId}, ${nuggetId}, ${new Date().toISOString()}, ${expiresAt})
        ON CONFLICT ("userId", "nuggetId") DO UPDATE SET "expiresAt" = EXCLUDED."expiresAt"
      `.affectedCount().build());
      return true;
    });
  }
}
