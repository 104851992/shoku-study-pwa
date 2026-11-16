# QA UPDATE v71 — 2026-11-14

Baseline: v70 complete source, 500-question bank, QA reports through v70. Scope: 食のまなびノート only.

## Changes
Added `scripts/test_restore_edge_v71.cjs` with four executable TypeScript-service regression cases: draft-only restore clears existing progress; empty backup is rejected before writes; initial storage-read failure performs no writes; repeated restore is idempotent. No application business logic, storage keys, question IDs, or backup schema changed.

## Checks performed
- New v71 restore edge regression: 4/4 passed.
- Existing Node runtime suites: 59/59 passed (18+10+7+10+9+3+2).
- v67–v70 UI/static checks: 11/11, 7/7, v69 pass, 7/7.
- Question bank structural validation: 500 total (grade 3:265; grade 2:135; grade 1:100), 0 errors, 0 warnings.
- Service worker JavaScript syntax: passed (`node --check public/sw.js`).
- Full TypeScript typecheck and Expo Web export: not run because node_modules is absent. Browser, PWA offline/install, iOS/Android not tested.

## Release limitations
- The new tests use mocked AsyncStorage; they do not demonstrate end-to-end browser persistence or atomic two-key restore.
- All 500 questions remain original/draft_review; none are verified official past questions. No new questions added.
- Windows: `npm.cmd install`, `python scripts/validate_bank.py`, `node scripts/test_restore_edge_v71.cjs`, `npx.cmd tsc --noEmit`, `npx.cmd expo export --platform web`.
- Before deploying, export and securely save the existing study data, then test backup/restore, refresh, offline restart and install in a disposable browser profile. Deploy `dist` manually to the existing Netlify site only after successful acceptance. No Netlify deployment performed.
