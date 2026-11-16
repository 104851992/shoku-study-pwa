# 食のまなびノート v1.0.33 / QA UPDATE v43

## Source and scope
Continued from full v1.0.32 (v42) ZIP, including source, 500-question bank, test scripts, and QA history. FE Mate AI was not modified.

## Change
Service Worker installation now awaits `self.skipWaiting()` *inside* the `event.waitUntil` promise. Previously `self.skipWaiting()` was called outside the installation lifetime promise, allowing the install lifecycle to complete before the skipWaiting request settled. This is a lifecycle correctness fix, not a guarantee of offline operation. Cache namespace v14 -> v15; displayed app version v1.0.32 -> v1.0.33. Historical scripts with pinned current cache name were updated to v15 so their checks remain meaningful.

## Validation performed
- `python scripts/validate_bank.py`: 500 questions, 3級 265, 2級 135, 1級 100; 0 structural errors, 0 warnings.
- 25 existing Python check scripts: 25/25 passed.
- `node --check public/sw.js`: passed.
- `node scripts/test_sw_lifecycle_v43.cjs`: 3/3 passed (new lifecycle ordering checks).
- Existing SW behavior tests: precache 9/9, redirects 2/2, Clear-Site-Data 5/5, activation 3/3 passed.
- npm install: failed due to EAI_AGAIN resolving registry.npmjs.org/@expo/metro-runtime. TypeScript and Expo Web build could not be run.
- No browser/iOS/Android or Netlify live verification.

## Content provenance and compatibility
All 500 questions remain `draft_review` (original draft material, not verified official past examination questions). No question ID, answer, explanation, storage key, learning record schema, or backup format was modified. Existing local learning data should remain format-compatible; actual device migration has not been tested.

## Remaining risks and Windows deployment
JSON one-click import/restore is not implemented. Need end-to-end backup/restore, real browser offline launch, manifest/install and iOS/Android device tests. In a network-connected Windows PowerShell terminal, extract ZIP, enter `Shoku_Study_v10_PWA`, then run:

```powershell
npm.cmd install
python scripts/validate_bank.py
node scripts/test_sw_lifecycle_v43.cjs
npx.cmd tsc --noEmit
npx.cmd expo export --platform web
```

Inspect the `dist` output, confirm the SW is registered and offline shell works, test saved learning data, then manually deploy `dist` to Netlify. **No Netlify deployment was performed.**
