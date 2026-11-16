# 食のまなびノート QA UPDATE v59

## Baseline
Continued from v58 complete source archive and QA_UPDATE_v58.md. This is a test-hardening release, **not an application behavior change**. Display version remains 1.0.44. FE Mate AI untouched.

## Added
- `scripts/test_backup_runtime_v59.cjs`: executes the actual TypeScript `validateBackupEnvelope` function through TypeScript transpilation with mocked native storage, rather than merely checking source text.
- 10 runtime cases: valid history, mismatched scoring, invalid choice index, retired question compatibility, grade mismatch, invalid ISO timestamp, valid draft, wrong draft grade, inconsistent draft correctness, and empty export rejection.
- The script loads project-local TypeScript when available, falling back to the globally installed TypeScript package (`npm root -g`).

## Verification
- `python scripts/validate_bank.py`: 500 questions (3級 265 / 2級 135 / 1級 100), 0 errors, 0 warnings.
- Runtime backup tests: 10/10 passed.
- All 12 `scripts/test_*.cjs` regression scripts: passed.
- `node --check public/sw.js`: passed.
- TypeScript check: attempted, **blocked** by missing project dependencies/configuration (react/react-native/Expo and tsconfig). No claim of compilation success.
- Expo Web export, real browser offline, iOS/Android: not run.

## Content and compatibility
No application logic, AsyncStorage keys, question IDs, question contents or JSON schema changed. All 500 items remain `original / draft_review`, not verified official past questions. No online deployment performed.

## Risks / Windows and Netlify
The new test needs TypeScript installed locally or globally to run. On Windows run `npm.cmd install`, `python scripts/validate_bank.py`, `npx.cmd tsc --noEmit`, `npx.cmd expo export --platform web`; then test existing learning data, backup JSON, PWA install and offline reload before manually deploying `dist` to Netlify. JSON restoration remains unimplemented; historical answer definitions changing under unchanged IDs may still cause rejection.
