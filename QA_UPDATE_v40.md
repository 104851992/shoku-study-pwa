# v1.0.30 — Guarded install-time precaching

Baseline: complete v1.0.29 archive, QA_UPDATE_v39.md and its 500-question bank. Only 食のまなびノート changed.

## Fix
Removed unvalidated `cache.addAll(SHELL)` and individual `cache.add()` fallback. Installation now fetches each shell entry and checks HTTP success, same-origin/basic response, expected MIME, Set-Cookie, sensitive Vary and Cache-Control (`private`, `no-store`, `no-cache`) before storing. Each item is isolated via Promise.allSettled; failure does not block installation. Cache namespace rotated v11 → v12 so previously cached shell is discarded on activation. Updated visible app version to v1.0.30. Existing AsyncStorage keys, data schema, question IDs and answer logic unchanged.

## Verification
- Question bank structural validator: 500 (3級265, 2級135, 1級100), 0 errors, 0 warnings; all `draft_review` (not official past questions).
- Python static checks: 25/25 passed (three legacy scripts updated to assert guarded precaching rather than obsolete addAll behavior).
- New Node VM install behavior: 8/8 passed (normal and 7 rejection cases).
- Existing activation behavior: 3/3 passed.
- `node --check public/sw.js`: passed.
- TypeScript and Expo web build: NOT run; npm dependencies not present in environment.
- Browser offline launch, Android/iOS devices, Netlify: NOT verified/deployed.

## Risks / next steps
Offline shell will not be stored if server responds with `no-cache` or other blocked directives. This favors privacy and correct revalidation over offline launch. Validate actual Netlify response headers and browser offline behavior before release. Browser storage quota and iOS PWA behavior remain unverified. JSON import/restore remains unimplemented. No new questions or official verification this release.

Windows: back up existing learning data; run `npm.cmd install`, `python scripts/validate_bank.py`, `node scripts/test_sw_precache_v40.cjs`, `npx.cmd tsc --noEmit`, `npx.cmd expo export --platform web`. Inspect `dist/sw.js`, test offline + persistence, then manually deploy `dist` to Netlify. No online update was performed.
