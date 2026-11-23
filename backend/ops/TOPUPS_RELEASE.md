# Subscription Top-ups: safe release checklist

This feature is **not live** until explicitly approved and deployed. The code does
not delete or rewrite existing member subscriptions, Nugget grants or payments.

## Business rules
- Paid Monthly and Annual subscriptions both receive the plan's monthly Nugget allowance.
- After consuming it, a member with an *active* paid subscription may spend Top-up credits.
- A Top-up gives extra selections; it does not change the subscription expiry.
- Original bundle periods are recorded, but unused credits roll over and never expire.
- Credits remain on account during cancellation/expiry but cannot be spent until renewal.
- During the 72 hours after paid expiry, members may reread Nuggets already granted;
  no new Nuggets or Top-up redemptions are allowed. After 72 hours paid reads lock.
- A member suspended, revoked or cancelled has no grace access.

## Pre-deployment actions
1. Take a verified, restorable production database backup.
2. Apply `backend/ops/sql/20261123_topups.sql` to **staging**, then run a
   least-privilege smoke test for CRUD, reads and lot sequence usage.
   The backend tries idempotent CREATE TABLE on first Top-up request, but this
   must not be relied on if the app DB role lacks CREATE privileges.
3. Ensure the runtime DB role has SELECT/INSERT/UPDATE on the new tables and
   USAGE/SELECT on `NuggetTopUpCreditLot_id_seq`.
4. Create test bundles in Admin → Subscriptions → Top-ups. No real pricing is seeded.
5. Test Paystack end-to-end in test mode: callback and webhook, replay the same
   reference repeatedly, check one credit lot only, verify matching amount and
   currency, reject unverified/pending orders, and check payment failures.
6. Test concurrent openings and double-clicks near quota exhaustion. Credits must
   never become negative; same Nugget cannot consume two credits.
7. Test paid expiry at T−1s, T, T+71h59m, and T+72h; verify that cancelled
   and suspended users cannot bypass the grace check.
8. Test new paid renewal and annual upgrades and verify that credits do not
   change the paid expiry or reset the monthly allowance.
9. Confirm CI, log/error monitoring, and explicit deployment approval.

## Rollback / recovery
- Disable active bundles through Admin first to stop new purchases.
- Restore the earlier application build if needed, but **retain** the new tables:
  they contain financial purchase and entitlement records; do not drop them.
- On an incident, reconcile every paid BillingTransaction planSlug starting
  `topup:` to its unique credit-lot reference.
- Do not reverse spent credits or alter paid transaction rows without an
  audited support/reconciliation procedure.

## Known deployment boundary
The CI suite verifies code/test/build integration but does not supply a live
PostgreSQL or real Paystack integration environment. Do not regard green CI
as proof of production billing readiness.
