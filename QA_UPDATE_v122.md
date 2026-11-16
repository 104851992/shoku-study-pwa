# QA update v122 — Progress storage round-trip regression

## Baseline
Continued from the complete v121 ZIP, `QA_UPDATE_v121.md`, actual `src/lib/progress.ts`, the 506-question bank, and existing regression scripts. Project is 食のまなびノート, not FE Mate AI.

## Change
Added `scripts/test_progress_storage_roundtrip_v122.cjs` exercising actual TypeScript `loadProgress`, `saveProgress`, and `clearProgress` with controlled AsyncStorage. Nine checks: initial empty load, JSON save, persisted read, write failure preserves existing raw data, read failure does not overwrite data, delete failure preserves data, invalid JSON is rejected without deletion, missing optional legacy fields are accepted, and successful clear. No production application code, data schema, keys, question IDs, or backup format changed.

## Executed checks
- New progress roundtrip: **9/9 passed**.
- All Node `scripts/test_*.cjs`: **60/60 suites passed**.
- `python scripts/validate_bank.py`: **506 questions; 3級267 / 2級137 / 1級102; 0 errors, 0 warnings**.
- `python scripts/test_catalog_sync_v115.py`: **506/506, 0 errors**.
- `node --check public/sw.js`: **passed**.
- `npx --no-install tsc --noEmit`: **failed** because project dependencies are absent (React/React Native type packages; JSX setup unavailable). Not a verified application typecheck.
- Expo Web export and real browser/iOS/Android/offline acceptance: **not executed**.

## Provenance and risk
All 506 questions are original `draft_review` exercises, not verified official examination questions. No new questions or independent subject-matter verification this cycle. Simulated AsyncStorage tests cannot prove real browser persistence. Full build, backup restore on a real device, install/offline behavior, and cross-platform acceptance remain open.

## Windows / Netlify
Extract ZIP, enter `Shoku_Study_v10_PWA`, run `npm.cmd install`, `node scripts/test_progress_storage_roundtrip_v122.cjs`, `python scripts/validate_bank.py`, `npx.cmd tsc --noEmit`, `npx.cmd expo export --platform web`. Back up existing learning records and test reload, backup restore, offline install before manually deploying `dist` to Netlify. Online Netlify was not updated, and user data was not touched.
