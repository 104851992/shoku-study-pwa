# QA UPDATE v61 — 2026-11-13

Baseline: v60 full source archive, 500-question bank and prior QA_UPDATE files. FE Mate AI untouched.

## Changes
Added `scripts/test_storage_runtime_v61.cjs`, which transpiles and executes the actual `loadProgress()` and `loadDraft()` TypeScript functions with an in-memory AsyncStorage mock. Ten regression cases cover fresh/legacy progress, retired history IDs, malformed history scoring/grade, malformed JSON, valid draft, invalid draft grade/choice/order. Rejected corrupt data is verified not to be rewritten or deleted.

No production logic, storage keys, schema, question IDs, or content changed. All 500 questions remain `original / draft_review`, not verified official past questions.

## Verified locally
- `node scripts/test_storage_runtime_v61.cjs`: 10/10 PASS
- `node scripts/test_backup_runtime_v60.cjs`: 18/18 PASS
- `python scripts/validate_bank.py`: 500 questions, 0 errors, 0 warnings
- ZIP integrity: verified during packaging

## Limitations
- Tests use a mocked AsyncStorage, not real browser/mobile storage or UI end-to-end flows.
- TypeScript project-wide typecheck and Expo Web export were not executed because npm dependencies are absent in this runtime.
- JSON restore remains unimplemented; backups can be exported and inspected only.
- PWA install/offline behavior, Web/iOS/Android real-device checks and subject-matter verification remain pending.
- No Netlify deployment was performed.

## Windows validation and manual release
1. Extract ZIP into a new directory. Back up existing local study data before testing.
2. Run `npm.cmd install`.
3. Run `python scripts/validate_bank.py`, `node scripts/test_storage_runtime_v61.cjs`, `node scripts/test_backup_runtime_v60.cjs`.
4. Run `npx.cmd tsc --noEmit` and `npx.cmd expo export --platform web`.
5. Verify study session, save/reload, JSON backup, install/offline and existing user data in a real browser; verify iOS/Android separately.
6. Only after acceptance, manually deploy generated `dist` to Netlify. Online site remains unchanged until that action.
