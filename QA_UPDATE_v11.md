# v1.0.1 — progress recovery hardening (2026-11-11)

Source: Library `Shoku_Study_v10_PWA_Windows.zip` (v1.0). This is a patch source package, not a deployed website.

## Change
`src/lib/progress.ts`: validate persisted `answers` and `days` counters, exclude malformed entries, deduplicate favorites, validate history summary and dates, preserve valid existing data and storage keys. Prevent corrupted persisted values from causing NaN or misleading totals on startup.

## Verification
- `python scripts/validate_bank.py`: PASS, 500 draft questions (grade 3: 265; grade 2: 135; grade 1: 100), 0 structural errors, 0 warnings.
- `npm install`: attempted, environment dependency retrieval timed out; `tsc --noEmit` and Expo web export therefore NOT run. Code change is not compiler-verified.
- Browser/iOS/Android device and PWA offline tests: NOT run.
- Content review: all 500 remain `draft_review`; not official past questions.

## Windows verification and deployment
Unzip into a **new** project folder (do not overwrite your live working folder). In PowerShell use `npm.cmd install`, `npx.cmd tsc --noEmit`, `python scripts/validate_bank.py`, and `npx.cmd expo export --platform web`. Test existing browser learning data in a backup profile before deploying the resulting `dist` folder to Netlify. Keep a copy of the previous deployment for rollback. Do not clear browser site data; AsyncStorage keys are unchanged.

## Outstanding
Confirm TypeScript compilation, Web export, PWA installability, offline caching, iPhone/Android behavior, and subject-matter review before production release. The public Netlify deployment has NOT been changed.
