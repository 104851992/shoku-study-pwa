# QA update v109 — Backup export read safety

## Baseline
Continued from v108 full archive, including 506 questions and prior QA records. This project is 食のまなびノート, not FE Mate AI.

## Changes
Added `scripts/test_backup_export_read_failures_v109.cjs` exercising the actual TypeScript `createBackup` function with an in-memory AsyncStorage adapter. Cases: storage read failure, both keys absent, malformed progress JSON, malformed draft JSON, invalid progress counters, and valid progress-only export. All six pass. Assertions also verify zero storage mutations. No business logic, question IDs, AsyncStorage keys, backup schema, or question content changed.

## Verification (2026-11-15 JST)
- New export tests: 6/6 passed.
- Node regression suites: 51/51 passed.
- `python scripts/validate_bank.py`: 506 total (3級 267, 2級 137, 1級 102); 0 structural errors and warnings.
- `node --check public/sw.js`: passed.
- TypeScript whole-project check and Expo web export: not executed because local project dependencies are absent.
- Browser, iOS/Android and Netlify: not tested/deployed.
- All questions remain original `draft_review` practice content, not verified official past examination questions. No new subject-matter validation this run.

## Remaining risks / manual release
Storage simulations do not validate device failures, concurrent writes, PWA installation or offline startup. On Windows, back up existing progress, run `npm.cmd install`, `node scripts/test_backup_export_read_failures_v109.cjs`, `python scripts/validate_bank.py`, `npx.cmd tsc --noEmit`, and `npx.cmd expo export --platform web`. In a separate browser profile, test backup export, restore, reload persistence, offline launch, and iOS/Android behavior before manually deploying `dist` to Netlify. Production Netlify and learning data were not changed.
