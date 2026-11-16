# QA update v118 — nested exam history integrity

## Baseline
Continued from the complete v117 source ZIP, question bank, QA history, and regression scripts. This is 食のまなびノート, not FE Mate AI.

## Changes
Added `scripts/test_progress_history_integrity_v118.cjs`, a 10-case regression suite exercising the actual TypeScript `loadProgress()` module with mocked AsyncStorage. It checks invalid nested history (duplicate answer IDs, mismatched correct totals, out-of-range choices, wrong correctness flags, invalid timestamps, grade mismatch, negative duration, null answers, missing fields) and one valid exam history. Corrupted history must reject without modifying persisted records. No application production logic, question IDs, AsyncStorage keys, or backup format changed.

## Executed checks
- New history integrity regression: 10/10 passed.
- Node `scripts/test_*.cjs`: 56/56 suites passed.
- Question structure: 506 (3級 267, 2級 137, 1級 102); 0 errors, 0 warnings.
- CSV catalog sync: 506/506 passed.
- PNG decode 3/3; PNG chunk checks 4/4; `node --check public/sw.js` passed.
- Full TypeScript typecheck attempted but **failed** because project dependencies are absent (React, React Native and TS JSX configuration resolution). This is not a clean typecheck.
- Expo Web export not executed; dependencies not installed.
- Real browser, PWA offline, iOS/Android, Netlify deployment not tested.

## Question provenance and risks
All 506 questions remain original draft-review exercises, not authenticated official past questions. Structural correctness is not subject-matter verification. Storage mocks cannot prove persistence on physical devices. Need dependency installation, full TypeScript and Expo Web export, and hands-on browser/mobile data preservation and offline tests.

## Windows / Netlify manual steps
Unzip, open the project directory in PowerShell, run `npm.cmd install`, `node scripts/test_progress_history_integrity_v118.cjs`, `python scripts/validate_bank.py`, `npx.cmd tsc --noEmit`, `npx.cmd expo export --platform web`. Back up existing study data before testing. Validate save/restart, JSON backup/restore, PWA install/offline and mobile devices. Deploy the generated `dist` manually to Netlify only after acceptance. The live site was not modified.
