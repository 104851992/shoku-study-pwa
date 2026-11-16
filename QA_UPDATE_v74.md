# QA UPDATE v74 — 2026-11-14

Baseline: v73 complete project, all prior QA updates and the 500-question bank. Scope: 食のまなびノート only.

## Changes
- Added `scripts/check_pwa_release_v74.py` as a repeatable static PWA release gate. It checks manifest identity/scope/display, actual PNG file signatures and dimensions against manifest sizes, offline shell references, service worker registration/lifecycle, and Unicode replacement characters in critical Japanese-language sources.
- No application logic, question IDs, AsyncStorage keys, backup format, or existing question content changed. This is a release-validation improvement, not a deployed PWA fix.

## Executed checks
- New PWA static release gate: PASS.
- Question-bank structural validator: 500 total (grade 3: 265, grade 2: 135, grade 1: 100); 0 errors, 0 warnings.
- All 21 existing `scripts/test_*.cjs` suites: PASS (each process exit code 0).
- `node --check public/sw.js`: PASS.
- TypeScript project check and Expo Web export: NOT RUN (node_modules not installed). These must not be represented as passing.
- Real-browser offline/install, backup/restore and iOS/Android device tests: NOT RUN.

## Remaining risks
- Static checks cannot prove that the Expo Web output, service worker lifecycle or offline asset graph work in a real browser. Cache quota and private-mode behavior remain environment dependent.
- Data deletion/restore is not atomic across crashes; always export a separate JSON backup before deployment.
- All 500 questions remain `source=original`, `reviewStatus=draft_review`, not verified official past questions. No subject-matter verification performed this run.

## Windows / Netlify acceptance
1. Extract ZIP to a fresh folder; run `npm.cmd install`.
2. Run `python scripts/validate_bank.py` and `python scripts/check_pwa_release_v74.py`.
3. Run `npx.cmd tsc --noEmit` and `npx.cmd expo export --platform web`.
4. In a disposable browser profile, test backup -> restore -> refresh, reset, PWA install and airplane-mode relaunch. Check Japanese characters and existing data on Web/iOS/Android.
5. Only after successful acceptance, manually deploy generated `dist` to the existing Netlify site. This run did NOT deploy or modify live user data.
