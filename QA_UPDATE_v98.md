# QA update v98 — Web backup download failure cleanup

## Baseline
Continued from the complete v97 archive and QA_UPDATE_v97.md. Project: 食のまなびノート, not FE Mate AI. Retains 506 questions (3級267 / 2級137 / 1級102), all original `draft_review` exercises; no official past papers have been verified.

## Changes
Added `scripts/test_backup_download_failures_v98.cjs`. It transpiles and executes the actual TypeScript backup module with simulated browser APIs. Injects an anchor click failure and a DOM append failure; verifies object URL cleanup in both cases, anchor removal after click failure, and successful download cleanup. This is a test-only change. No runtime source, question IDs, storage keys, backup envelope or offline assets were modified.

## Verification (2026-11-15 JST)
- New fault tests: 3/3 passed.
- All Node `.cjs` suites: 40/40 passed.
- Bank structural validator: 506 questions, 0 errors, 0 warnings.
- Bank/catalog sync: 506/506, 0 errors.
- Japanese Unicode audit: 506 questions, 0 issues.
- Manifest and PNG asset audit: 0 errors.
- Service Worker syntax: passed.
- Full TypeScript check attempted but **not verified**: project dependencies absent (React, Expo, TS config inheritance).
- Expo Web build **not run**: dependencies absent.
- Browser persistence, offline install, iOS/Android, Netlify **not tested**.

## Remaining risks and deployment
Mocked DOM tests do not verify actual browser download permissions or completed file writes. Back up existing learning data independently. On Windows in project root run `npm.cmd install`, `node scripts/test_backup_download_failures_v98.cjs`, `python scripts/validate_bank.py`, `npx.cmd tsc --noEmit`, `npx.cmd expo export --platform web`. Then use a disposable browser profile to verify JSON export/import, refresh persistence, PWA offline launch and mobile layout. Only after acceptance tests, manually deploy the generated `dist` folder to the existing Netlify site. No online deployment or user data changes were performed.
