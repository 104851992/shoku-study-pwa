# 食のまなびノート QA UPDATE v58

## Baseline
Started from v57 full source archive, 500-question bank, and QA_UPDATE_v57.md. FE Mate AI untouched. Display version remains 1.0.44.

## Change
History validation in `loadProgress()` and `validateBackupEnvelope()` now checks answer semantics against currently available questions: matching grade, choice index within option bounds, keyed correctness, and null selection for written answers. Older history referring to retired/missing question IDs is still accepted for compatibility. Invalid history blocks loading/backup validation without deleting original storage. Existing storage keys, schema, question IDs, and normal scoring are unchanged.

## Verification
- `python scripts/validate_bank.py`: 500 questions (3級 265 / 2級 135 / 1級 100), 0 errors and 0 warnings.
- 11 Node regression scripts (`scripts/test_*.cjs`): all passed (exit status 0).
- `python scripts/check_history_semantics_v58.py`: 9/9 static assertions passed, **not runtime behavior tests**.
- `node --check public/sw.js`: passed.
- TypeScript / Expo web build: not run; npm dependencies absent.
- Browser, iOS, Android, Netlify: not tested or deployed.

## Risks
Historical answers whose question definition has since changed (but retained the same ID) may be rejected. The original stored bytes remain untouched. Runtime regression with real legacy backups and device/browser checks remain necessary. JSON restore remains unimplemented. All 500 questions remain `source: original`, `reviewStatus: draft_review`; no official past-question claim.

## Windows / Netlify
Unzip separately, back up current data, run `npm.cmd install`, `python scripts/validate_bank.py`, `python scripts/check_history_semantics_v58.py`, `npx.cmd tsc --noEmit`, `npx.cmd expo export --platform web`. Test historical progress and JSON inspection, PWA installation and offline reopening before manually deploying `dist` to Netlify. Live Netlify has **not** been updated.
