import { summarizeTopUpLots } from "./topups-policy";
import { hasActivePaidSubscription, isPaidSubscriptionInGrace } from "../nuggets/paid-history-access";

const at = Date.parse("2026-11-23T00:00:00Z");
const paid = { accountStatus: "active", membershipTier: "premium",
  subscriptionStatus: "active", subscriptionPlan: "premium-monthly",
  subscriptionExpiresAt: "2026-11-22T00:00:00Z" };

describe("Top-up credit rollover and grace", () => {
  it("keeps expired unused bundle credits spendable after renewal", () => {
    const wallet = summarizeTopUpLots([
      { totalCredits: 5, remainingCredits: 3, originalExpiresAt: "2026-10-01T00:00:00Z" },
      { totalCredits: 3, remainingCredits: 1, originalExpiresAt: "2026-12-01T00:00:00Z" },
    ], at);
    expect(wallet).toEqual({ balance: 4, lifetimePurchased: 8, lifetimeUsed: 4, rolledOver: 3 });
  });

  it("preserves credit balances through paid subscription expiry", () => {
    const lots = [{ totalCredits: 4, remainingCredits: 4, originalExpiresAt: "2026-10-01T00:00:00Z" }];
    expect(summarizeTopUpLots(lots, at).balance).toBe(4);
    expect(isPaidSubscriptionInGrace(paid, at)).toBe(true);
    expect(hasActivePaidSubscription(paid, at)).toBe(false);
    expect(hasActivePaidSubscription({ ...paid, subscriptionExpiresAt: "2026-12-22T00:00:00Z" }, at)).toBe(true);
  });
  it("does not generate new credits from repeated calculations", () => {
    const lots = [{ totalCredits: 3, remainingCredits: 0, originalExpiresAt: "2026-01-01T00:00:00Z" }];
    expect(summarizeTopUpLots(lots, at).balance).toBe(0);
  });
});
