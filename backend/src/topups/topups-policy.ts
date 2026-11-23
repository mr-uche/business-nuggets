/** Credits are not filtered by the bundle's original expiry date. They roll over until spent. */
export function summarizeTopUpLots(
  lots: readonly { totalCredits: number; remainingCredits: number; originalExpiresAt: string }[],
  now = Date.now(),
) {
  const balance = lots.reduce((sum, lot) => sum + lot.remainingCredits, 0);
  const lifetimePurchased = lots.reduce((sum, lot) => sum + lot.totalCredits, 0);
  const lifetimeUsed = lifetimePurchased - balance;
  const rolledOver = lots.reduce(
    (sum, lot) => sum + (Date.parse(lot.originalExpiresAt) <= now ? lot.remainingCredits : 0), 0,
  );
  return { balance, lifetimePurchased, lifetimeUsed, rolledOver };
}
