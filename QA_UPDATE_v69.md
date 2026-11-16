# QA UPDATE v69 — 2026-11-14

Baseline: v68 full source archive, complete 500-question bank and QA history. Scope: 食のまなびノート only.

## Fix
Export previously checked `restoreLocked` only before awaiting pending writes. A restore could start while export awaited, causing a JSON export to capture inconsistent progress/draft keys. Introduced `exportLocked` to prevent overlapping exports and block restore during export; export also rechecks `restoreLocked` after pending writes. The export lock is released in `finally`, including errors. Restore rechecks its lock after confirmation. No storage keys, schema, question IDs, or visible application version changed.

## Verification
- Question bank structural validator: 500 (grade 3: 265; grade 2: 135; grade 1: 100), 0 errors, 0 warnings.
- New v69 static export/restore mutual-exclusion assertions: pass.
- v68 restore interlocks: 7/7; v67 UI static checks: 11/11.
- Runtime regressions: backup validation 18/18, storage read 10/10, export 7/7, backup boundary 10/10, storage write 9/9, restore service 3/3, rollback 2/2 = 59/59.
- Service worker JS syntax: pass.
- TypeScript whole-project and Expo web build: not run (dependencies absent, no node_modules/package-lock in baseline).
- Browser, offline and iOS/Android device testing: not performed. Static checks cannot prove absence of all races.

## Risks / deployment
- Restore and export are Web-only. Confirm races, JSON restore, browser refresh, persistence, PWA install and offline restart in a disposable browser profile.
- AsyncStorage two-key restore remains nontransactional; rollback is best-effort.
- All 500 questions remain `original/draft_review`, not verified official past questions; no subject-matter verification this run.
- Windows: `npm.cmd install`; `python scripts/validate_bank.py`; `python scripts/check_export_restore_race_v69.py`; `npx.cmd tsc --noEmit`; `npx.cmd expo export --platform web`.
- Back up existing learning data and test before manually deploying `dist` to the existing Netlify site. No online deployment performed.
