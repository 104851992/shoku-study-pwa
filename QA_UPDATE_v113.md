# QA update v113 — PNG chunk integrity

## Baseline
Continued from the complete v112 ZIP, including source, 506 questions, tests and QA history. This is 食のまなびノート, not FE Mate AI.

## Change
Added `scripts/test_png_chunk_integrity_v113.py`, a dependency-free integrity regression for both PWA icon files. Unlike the existing v112 PNG header/dimension guard, it parses every PNG chunk, validates CRC-32, checks mandatory IHDR/IDAT/IEND order and termination, and rejects simulated bit flips. No application source, question content, storage key, backup schema or icon was changed.

## Actual checks
- New PNG test: 4/4 passed (two shipped icons and two corruption fixtures).
- All 54 `scripts/test_*.cjs` scripts: 54/54 passed.
- Question bank validator: 506 questions (3級267, 2級137, 1級102), 0 errors and 0 warnings. All remain original `draft_review`, not official verified questions.
- `node --check public/sw.js`: passed.
- `tsc --noEmit`: failed because dependencies and project TypeScript configuration are not installed/resolved in this runtime (missing React/React Native declarations and JSX settings). This is NOT a successful full-project type check.
- Expo Web export: not run; local Expo dependency absent.
- Real browser, mobile devices, install/offline behavior and Netlify: not tested or deployed.

## Remaining risks / manual Windows release
Back up the browser's learning data before any upgrade. Extract ZIP and run `npm.cmd install`, `python scripts/test_png_chunk_integrity_v113.py`, `python scripts/validate_bank.py`, `npx.cmd tsc --noEmit`, `npx.cmd expo export --platform web`. Verify learning record persistence, JSON backup and restore, PWA install/offline launch, and iOS/Android behavior before manually uploading `dist` to Netlify. This release has not modified the deployed site or user data.
