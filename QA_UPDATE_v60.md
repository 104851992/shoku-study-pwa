# QA UPDATE v60 — 2026-11-13

Based on v59 full archive, including the complete 500-question bank and QA history. No production source or storage schema changed.

## Changes
- Added `scripts/test_backup_runtime_v60.cjs`: 8 additional executable negative-path cases for backup validation (18 total).
- Tests exercise transpiled TypeScript validator directly; no claims of browser or mobile E2E coverage.
- All questions remain `original / draft_review`, not verified official past exam questions.

## Known gaps
- JSON restore remains unimplemented; backup inspection is read-only.
- Full TypeScript/Expo build requires installing npm dependencies.
- Web PWA offline/install and iOS/Android device tests remain outstanding.
- No Netlify deployment was performed.

## Windows validation
`npm.cmd install`
`python scripts/validate_bank.py`
`node scripts/test_backup_runtime_v60.cjs`
`npx.cmd tsc --noEmit`
`npx.cmd expo export --platform web`

Only after browser validation and a local learning-data backup should `dist` be manually deployed to Netlify.
