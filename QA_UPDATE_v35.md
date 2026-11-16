# v1.0.25 — Service Worker activation resilience

## Source and scope
Continued from the complete v1.0.24 project, question catalog, and QA_UPDATE_v34.md. Only Shoku Study PWA changed; no FE Mate AI changes.

## Fix
Previously, an exception from `caches.keys()` or any `caches.delete()` rejected the `activate` event's `waitUntil`, potentially preventing the updated worker from controlling online pages. Activation now tolerates Cache Storage enumeration failure and individual cache deletion failure while still awaiting `clients.claim()`. Cache namespace rotated from v8 to v9. Old cache entries may remain after a storage failure; this is an accepted trade-off to preserve online availability. Existing AsyncStorage keys, backup schema, question IDs, and grading were untouched.

## Verification
- Question catalog structural validation: 500 total (3級 265, 2級 135, 1級 100), 0 errors / 0 warnings; all draft_review, not official verified exam questions.
- Existing Python `check_*.py` static checks and new `check_offline_v35.py`: passed.
- Node `--check public/sw.js`: passed.
- Node VM activation simulation: normal, cache-key enumeration denied, and individual deletion denied: all passed.
- TypeScript: FAILED / unverified due to absent React/React Native dependencies in this environment; errors include missing Promise and JSX configuration from missing Expo tsconfig base.
- Expo Web export: not completed (local invocation timed out, dependencies absent).
- Actual browser offline, Netlify, iOS/Android tests: not run.

## Windows acceptance and deployment
1. Back up current app data via its JSON export before deploying; do not clear browser site data.
2. In project folder: `npm.cmd install`, `python scripts/validate_bank.py`, `python scripts/check_offline_v35.py`, `node scripts/test_sw_activation_v35.cjs`, `npx.cmd tsc --noEmit`, `npx.cmd expo export --platform web`.
3. Check `dist/sw.js` and `dist/manifest.webmanifest`, then verify online load, offline reload, study progress persistence, and backup inspection in Chrome/Edge.
4. Only after acceptance manually deploy the `dist` folder to Netlify. No online deployment was performed.

## Remaining risks
JSON one-click restore is not implemented. Offline boot requires cached JS and assets, and is not proven by these tests. iOS/Android devices and data migration remain untested. No new question content was added because authoritative item-by-item verification was unavailable.
