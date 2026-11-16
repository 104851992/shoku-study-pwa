# QA UPDATE v73 — 2026-11-14

Baseline: v72 full project, 500-question bank, QA v04–v72. Scope: 食のまなびノート only.

## Code change
- Added `clearAllLearningDataSafely` to `src/lib/backup.ts`: snapshots both v1 raw storage values, removes both, verifies deletion, and attempts verified rollback on any error. Storage keys, schema, question IDs and contents are unchanged.
- Wired reset UI to the verified deletion service after draining queued writes. On any deletion failure, `resetLocked` stays set, preventing further autosaves and competing storage actions until page reload; the UI shows an explicit warning. This conservative fail-closed behavior applies even when rollback was verified.
- Added `scripts/test_safe_reset_v73.cjs` covering success, second-key failure, silent adapter failure and rollback failure.

## Executed checks
- New runtime regression: 4/4 passed.
- Existing runtime suites (backup/storage/restore): executed, no failures reported.
- `python scripts/validate_bank.py`: 500 questions; grade 3=265, grade 2=135, grade 1=100; zero errors/warnings. All questions remain original `draft_review`, not verified official examination questions.
- `node --check public/sw.js`: passed.
- `npx tsc --noEmit`: attempted, failed because project dependencies are absent and current tsconfig does not provide JSX settings. Not a successful typecheck.
- Expo Web build, real browser and mobile tests: not run; dependencies not installed.

## Risks / next steps
- Reset is still not atomic across browser crashes or power failures. Verified rollback may fail if storage itself is broken; keep an independent JSON backup.
- Fail-closed UI requires page reload to re-enable saving after a deletion error; verify stored data before doing so.
- Test browser backup/export/restore/reset flows and PWA offline/install behavior in a disposable browser profile. Check Japanese typography and iOS/Android separately.
- On Windows: `npm.cmd install`, `python scripts/validate_bank.py`, `node scripts/test_safe_reset_v73.cjs`, `npx.cmd tsc --noEmit`, `npx.cmd expo export --platform web`.
- Deploy `dist` manually to the original Netlify site only after acceptance. No online deployment or online learning data change was performed.
