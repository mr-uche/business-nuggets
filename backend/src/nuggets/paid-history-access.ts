/**
 * A successful later payment can restore a previously opened Nugget.
 * Reading history supplied by a client is never proof of access: only a
 * server-created NuggetAccessGrant can qualify.
 */
export type PaidHistoryMember = {
  accountStatus: string;
  membershipTier: string;
  subscriptionPlan: string | null;
  subscriptionStatus: string | null;
  subscriptionExpiresAt: string | null;
};

export function hasActivePaidSubscription(member: PaidHistoryMember, now = Date.now()): boolean {
  const expires = Date.parse(member.subscriptionExpiresAt ?? "");
  return member.accountStatus === "active" &&
    member.membershipTier === "premium" &&
    member.subscriptionStatus === "active" &&
    Boolean(member.subscriptionPlan && member.subscriptionPlan !== "free") &&
    Number.isFinite(expires) && expires > now;
}

export function restoredPaidHistoryExpiry(
  member: PaidHistoryMember,
  verifiedPaidAt: string | null,
  grant: { openedAt: string } | undefined,
  now = Date.now(),
): string | null {
  if (!hasActivePaidSubscription(member, now) || !grant || !verifiedPaidAt) return null;
  const openedAt = Date.parse(grant.openedAt);
  const paymentAt = Date.parse(verifiedPaidAt);
  // The original purchase does not extend a selection indefinitely.
  // Only a subsequent verified renewal/upgrade restores its access.
  if (!Number.isFinite(openedAt) || !Number.isFinite(paymentAt) || paymentAt <= openedAt) return null;
  return member.subscriptionExpiresAt;
}
