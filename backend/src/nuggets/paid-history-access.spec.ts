import { hasActivePaidSubscription, restoredPaidHistoryExpiry, type PaidHistoryMember } from "./paid-history-access";

const now = Date.parse("2026-11-23T12:00:00Z");
const member: PaidHistoryMember = {
  accountStatus: "active", membershipTier: "premium",
  subscriptionPlan: "premium-monthly", subscriptionStatus: "active",
  subscriptionExpiresAt: "2026-12-20T00:00:00Z",
};
const priorGrant = { openedAt: "2026-11-10T10:00:00Z" };

describe("paid Nugget history restoration", () => {
  it("allows restored access after a later verified payment while subscription is active", () => {
    expect(restoredPaidHistoryExpiry(member, "2026-11-20T10:00:00Z", priorGrant, now)).toBe(member.subscriptionExpiresAt);
  });
  it("does not restore on the original purchase made before the Nugget was opened", () => {
    expect(restoredPaidHistoryExpiry(member, "2026-11-01T10:00:00Z", priorGrant, now)).toBeNull();
    expect(restoredPaidHistoryExpiry(member, priorGrant.openedAt, priorGrant, now)).toBeNull();
  });
  it("requires a stored grant and a paid transaction", () => {
    expect(restoredPaidHistoryExpiry(member, "2026-11-20T10:00:00Z", undefined, now)).toBeNull();
    expect(restoredPaidHistoryExpiry(member, null, priorGrant, now)).toBeNull();
  });
  it("revokes restored access for expired, suspended, inactive, or free memberships", () => {
    expect(restoredPaidHistoryExpiry({ ...member, subscriptionExpiresAt: "2026-11-01T00:00:00Z" }, "2026-11-20T10:00:00Z", priorGrant, now)).toBeNull();
    expect(restoredPaidHistoryExpiry({ ...member, accountStatus: "suspended" }, "2026-11-20T10:00:00Z", priorGrant, now)).toBeNull();
    expect(restoredPaidHistoryExpiry({ ...member, subscriptionStatus: "cancelled" }, "2026-11-20T10:00:00Z", priorGrant, now)).toBeNull();
    expect(restoredPaidHistoryExpiry({ ...member, membershipTier: "free" }, "2026-11-20T10:00:00Z", priorGrant, now)).toBeNull();
  });
  it("requires an unexpired paid subscription for Premium access", () => {
    expect(hasActivePaidSubscription(member, now)).toBe(true);
    expect(hasActivePaidSubscription({ ...member, subscriptionExpiresAt: "2026-11-01T00:00:00Z" }, now)).toBe(false);
  });
});
