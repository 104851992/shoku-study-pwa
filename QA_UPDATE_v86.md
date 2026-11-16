# QA UPDATE v86 — 2026-11-14

Baseline: v85 complete source archive and QA history. Scope: 食のまなびノート only.

## Change
Added `scripts/test_backup_roundtrip_v86.cjs`, exercising the actual TypeScript `src/lib/backup.ts` service through a mocked AsyncStorage adapter. Four cases: (1) export/JSON serialization/restore preserves both progress and draft bytes, (2) progress-only backup removes a newer draft, (3) draft-only backup removes newer progress, (4) tampering with an exported payload is rejected without overwriting storage. No production code, storage keys, schema, question IDs, or Service Worker changed. The test does not enable the disabled restore UI.

## Verification
- New roundtrip tests: 4/4 PASS.
- All Node `scripts/test_*.cjs` suites: 32/32 PASS.
- `python scripts/validate_bank.py`: 506 questions; grade 3 = 267, grade 2 = 137, grade 1 = 102; 0 errors, 0 warnings.
- `python scripts/check_pwa_release_v74.py`: PASS (static gate only).
- `node --check public/sw.js`: PASS.
- TypeScript whole-project check and Expo Web export: NOT RUN (project node_modules absent). Transpiling selected modules in Node tests is not equivalent to typechecking.
- Browser, iOS, Android, Netlify deployment: NOT TESTED.

## Risks
Mocked adapter cannot prove crash atomicity, browser persistence, platform behavior, or recovery under concurrent autosaves. Existing restore UI remains disabled. All 506 items are original `draft_review` questions; none should be labeled official past exam questions. Editorial verification is outstanding.

## Windows / Netlify
Extract ZIP to a new folder. Run `npm.cmd install`, `python scripts/validate_bank.py`, `node scripts/test_backup_roundtrip_v86.cjs`, `npx.cmd tsc --noEmit`, `npx.cmd expo export --platform web`. Export and separately preserve live learning data before any deployment. Test backup and restoration only in a disposable browser profile or development copy, because restore UI is not yet enabled and direct restoration overwrites local data. Verify offline startup, refresh persistence and mobile layouts. Only then manually deploy `dist` to the existing Netlify site. No online deployment occurred.
