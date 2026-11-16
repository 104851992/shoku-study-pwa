# v1.0.23 — Network fetch must not depend on Cache Storage availability

## Root cause and fix
In v1.0.22, the fetch event handler awaited `caches.open(CACHE)` before attempting `fetch(request)`. If Cache Storage was unavailable or rejected (privacy settings, storage denial, browser failure), a perfectly healthy online network response was never attempted. Move cache opening into the guarded best-effort write path after successful network fetch. On network failure, cache lookup now has a separate guarded block; if storage is unavailable, propagate the original network error. Rotate the cache namespace to v7. No AsyncStorage key, question ID, grading or backup schema changed. App display version is v1.0.23.

## Validation performed
- `python scripts/validate_bank.py`: 500 items, grade 3:265, grade 2:135, grade 1:100; 0 errors, 0 warnings. These remain `draft_review`, not official questions.
- All `scripts/check_*.py` passed, including new 8-assertion `check_offline_v33.py`; historical v32 check updated to account for cache opening inside guarded block.
- `node --check public/sw.js`: passed.
- `npm install --offline`: ENOTCACHED for `@expo/metro-runtime`; TypeScript and Expo Web build could not run. Browser storage-denial simulation, offline reload, mobile device tests and JSON restore remain unverified.

## Windows acceptance and deployment
In extracted project: `npm.cmd install`; `python scripts/validate_bank.py`; `python scripts/check_offline_v33.py`; `npx.cmd tsc --noEmit`; `npx.cmd expo export --platform web`. Confirm `dist/sw.js`, `dist/manifest.webmanifest` and icons. Test online reload with Cache Storage blocked, offline reload after an online visit, saved study progress across refresh, quiz flow and backup inspection. Only then manually upload `dist` to Netlify. This release has NOT been deployed.
