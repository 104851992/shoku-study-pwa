# QA UPDATE v78 — 2026-11-14

Baseline: v77 full source archive, 500-question bank, historical QA reports and regression scripts. Scope: 食のまなびノート only.

## Fix
- Service Worker now requires JavaScript MIME for `.js` and CSS MIME for `.css` before adding network responses to offline cache. Previously generic image/font MIME was accepted for these extensions, potentially persisting an invalid response and breaking offline startup.
- Installation asset precache shares the stricter MIME rules.
- Cache version v21 -> v22. Updated four cache-version test fixtures.
- Added `scripts/test_sw_asset_mime_v78.cjs` with five runtime cases.
- No changes to AsyncStorage keys, question IDs, bank content, backup JSON schema or UI behavior.

## Validation
- All 25 Node `.cjs` suites pass (24 historical plus new suite).
- New asset MIME tests: 5/5 pass.
- `node --check public/sw.js`: pass.
- `python scripts/validate_bank.py`: 500 items (grade 3 265, grade 2 135, grade 1 100), 0 errors, 0 warnings.
- `python scripts/check_pwa_release_v74.py`: pass.
- TypeScript and Expo Web build: not completed; dependency installation timed out in execution environment.
- Real browser, iOS and Android: not tested.

## Remaining risks
- Cache Storage may be denied/evicted; dynamically imported assets may be absent offline.
- Existing cache from older deployed SW may contain an incorrect asset response; a successful online refresh should replace it in the new cache.
- Question-bank validation is structural only. All 500 questions are original draft-review items, not verified official past questions.

## Windows and Netlify
1. Unzip to a fresh folder and back up learning records using JSON export before deploying.
2. Run `npm.cmd install`, `python scripts/validate_bank.py`, `node scripts/test_sw_asset_mime_v78.cjs`, `npx.cmd tsc --noEmit`, and `npx.cmd expo export --platform web`.
3. Test PWA install/offline/restart and JSON export/restore in a disposable browser profile, plus iOS/Android if applicable.
4. Only after acceptance, manually deploy `dist` to the existing Netlify site. No live deployment or online learning data changes were made.
