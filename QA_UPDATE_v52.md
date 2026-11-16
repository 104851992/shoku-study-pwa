# 食のまなびノート v1.0.42 / QA UPDATE v52

## Baseline
Continued from v1.0.41 ZIP, inspected backup.ts, progress.ts, session completion flow and prior QA v51. No FE Mate AI files.

## Fix
A saved exam history entry could claim a `correct` total inconsistent with its persisted answer rows. Both `loadProgress()` and read-only backup inspection now reject such records, retaining original stored bytes rather than silently replacing history. Legitimate incomplete exam histories remain supported: `answers.length <= total`. Version label bumped to v1.0.42. No storage keys, schema, question IDs or question content changed.

## Tests
Run `python scripts/validate_bank.py`, `python scripts/check_history_correct_v52.py`, historical regression scripts, `node --check public/sw.js`, `npx tsc --noEmit`, `npx expo export --platform web` where dependencies are available. Results are reported separately in the run response.

## Outstanding
JSON restore, browser data roundtrip, real offline/PWA installation and iOS/Android device testing remain unverified. All 500 questions retain draft_review status, not official exam questions.

## Windows deployment
Extract ZIP, run `npm.cmd install`, `python scripts/validate_bank.py`, `npx.cmd tsc --noEmit`, `npx.cmd expo export --platform web`; verify progress and offline functionality before manually uploading `dist` to Netlify. No live deployment performed.
