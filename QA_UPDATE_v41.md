# v1.0.31 — Redirected-response cache guard

Baseline: v1.0.30 complete archive, QA_UPDATE_v40.md, existing question bank and tests. Only 食のまなびノート changed.

## Change
Service Worker install-time and runtime caching now refuse `Response.redirected` responses, even if the final response has an acceptable status and MIME type. This prevents caching a redirected login or alternate HTML response under the application shell URL. Cache namespace v12 → v13; visible version v1.0.31. Existing AsyncStorage keys, record formats, question IDs, bank and answer logic unchanged. Previous tests updated only to follow the rotated cache namespace; prior QA reports preserved.

## Validation
See run log / test commands: `python scripts/validate_bank.py`; `node scripts/test_sw_precache_v40.cjs`; `node scripts/test_sw_redirect_v41.cjs`; `node scripts/test_sw_activation_v35.cjs`; `node --check public/sw.js`; `npx tsc --noEmit`; `npx expo export --platform web` (last two may be unavailable without npm dependencies).

## Outstanding risks
Static tests do not prove offline install or browser persistence. JSON restore not implemented. iOS/Android device testing and Netlify deployment not performed. All draft questions remain non-official pending individual content verification.

## Windows release
Back up existing learning data. Run `npm.cmd install`, `python scripts/validate_bank.py`, `npx.cmd tsc --noEmit`, `npx.cmd expo export --platform web`. Inspect dist manifest, SW and icons; test install/offline/answer recovery on devices, then manually deploy `dist` to Netlify. No online update was performed.
