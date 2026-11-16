# QA update v108 — Safe clear read failures

## Baseline and change
Continued from the complete v107 source ZIP with 506 questions and QA history. This is 食のまなびノート, not FE Mate AI.

Added `scripts/test_clear_read_failures_v108.cjs` to execute production `clearAllLearningDataSafely` against an in-memory AsyncStorage adapter. Cases: initial multiGet fails before deletion; first removeItem throws; post-delete verification multiGet fails and triggers rollback; normal clear does not require an unnecessary third read. All four passed. This is a regression test addition only; no application logic, keys, question IDs, or backup format changed.

## Verification (2026-11-15 JST)
- New cases: 4/4 pass.
- Node suites `scripts/test_*.cjs`: 50/50 pass.
- `python scripts/validate_bank.py`: 506 questions (3級 267; 2級 137; 1級 102), 0 structural errors, 0 warnings.
- `node --check public/sw.js`: pass.
- TypeScript project check and Expo Web export: not executed; project dependencies not installed in this runtime.
- Browser/iOS/Android, PWA offline installation, Netlify production: not tested.
- All questions remain `draft_review` original practice questions, not verified official exam questions. No new questions or official-content verification in this run.

## Remaining risks and Windows/Netlify steps
Fault injection does not establish crash-safe transactions or prevent concurrent autosave writes. Before deploying, export a copy of existing learning data. On Windows run `npm.cmd install`, `node scripts/test_clear_read_failures_v108.cjs`, `python scripts/validate_bank.py`, `npx.cmd tsc --noEmit`, `npx.cmd expo export --platform web`. Test backup and restore, reload persistence, clearing confirmation, and offline PWA launch in a disposable browser profile. Only after successful manual verification, deploy the generated `dist` directory to Netlify. No Netlify deployment or production user data was touched.
