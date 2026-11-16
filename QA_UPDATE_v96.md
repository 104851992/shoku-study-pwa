# QA update v96 — Read-only backup export safety

## Baseline
Continued from complete v95 archive and QA_UPDATE_v95.md. Scope: 食のまなびノート only, not FE Mate AI. All 506 entries (3級267, 2級137, 1級102) remain original `draft_review` practice questions, NOT verified official past papers.

## Change
Added `scripts/test_backup_export_safety_v96.cjs`, a regression suite exercising actual TypeScript `createBackup` through an in-memory AsyncStorage adapter. Five cases: valid progress-only export; valid draft-only export; empty export rejection; malformed stored JSON rejection; and storage read failure propagation. Assertions confirm export does not mutate records. Production code, question IDs/text, storage keys, backup format, manifest, and service worker unchanged.

## Verification (this run)
- New suite: 5/5 passed.
- All Node `.cjs` regression suites: 38/38 passed.
- Question bank structure: 506 entries, 0 errors, 0 warnings.
- Catalog sync: 506/506, 0 errors.
- Japanese Unicode audit: 0 issues (4 files, 506 questions).
- Manifest/PNG audit: 0 errors.
- Service Worker syntax: passed.
- TypeScript: attempted but failed due to missing project dependencies (no node_modules); result NOT verified.
- Expo Web build: not run because dependencies are absent.
- Browser/iOS/Android, actual persistent storage, Netlify: not tested.

## Limitations
The tests use a mocked storage adapter and do not prove real browser durability or mobile behavior. No professional question-content review or new questions in this version. An empty backup is intentionally rejected by existing validation. Preserve a separate user-data backup before testing restore/deletion. No online deployment was performed.

## Windows handoff
Unzip, run `npm.cmd install`, `node scripts/test_backup_export_safety_v96.cjs`, `python scripts/validate_bank.py`, `npx.cmd tsc --noEmit`, `npx.cmd expo export --platform web`. In a disposable browser profile, test export, restore, refresh persistence, offline reload, and installation. After independent backup and successful acceptance testing, manually deploy the generated `dist` directory to the existing Netlify site. Never upload the source ZIP as the published site.
