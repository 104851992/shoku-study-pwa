# v1.0.28 — Cache-Control private directive hardening

## Baseline
Continued from v1.0.27 complete archive and QA_UPDATE_v37.md. FE Mate AI unchanged. Preserved all question IDs, storage keys, question content, and existing study data formats.

## Fix
The Service Worker response cache filter previously recognized `private` and `no-store` only when immediately followed by a comma or end-of-value. HTTP Cache-Control also permits field-qualified directives such as `private="Set-Cookie"`; these must not be stored in the shared application cache. Added a named directive guard that rejects the field-qualified form and optional whitespace before `=`. Rotated offline cache to v10 and updated app label to v1.0.28. No learning-record or quiz logic changed.

## Validation
- 500 questions: 3級 265 / 2級 135 / 1級 100; 0 structure errors, 0 warnings; all `draft_review`, not official exam questions.
- Cache-Control regression: 10/10 representative cases passed.
- Legacy static checks: see run output; older version-string expectations updated to current namespace without weakening behavioral checks.
- `node --check public/sw.js` and activation simulation run.
- No installed npm dependencies; TypeScript / Expo Web build and real browsers / iOS / Android not validated.

## Windows / Netlify
Back up existing progress from the working site first. Extract, run `npm.cmd install`, `python scripts/validate_bank.py`, `python scripts/check_cache_control_v38.py`, `npx.cmd tsc --noEmit`, and `npx.cmd expo export --platform web`. Validate browser online/offline loading, backup inspection and persistence before manually deploying the `dist` directory to Netlify. No online deployment has occurred.

## Outstanding
No JSON restore, no live device testing, and no independent subject-matter verification of the draft questions.
