# QA UPDATE v72 — 2026-11-14

Baseline: complete v71 archive, 500-question bank, QA reports v04–v71. Scope: 食のまなびノート only.

## Changes
- Added `resetLocked` checks to queued progress/draft writes. Previously, a queued autosave could run while the delete-all operation was in progress and repopulate a cleared key.
- Blocked `discardDraft` while export or reset is active, and blocked opening the restore picker while export/reset is active. Existing restore and export locks remain in place.
- Added `scripts/check_operation_guards_v72.py` (five static assertions). No changes to AsyncStorage keys, backup schema, question IDs, or question content.

## Checks
- v72 static assertions: 5/5 passed.
- Existing v67–v70 static suites: passed.
- Node runtime suites v60–v66 and v71: 63/63 passed (18+10+7+10+9+3+2+4).
- Question-bank structure: 500 (3級 265; 2級 135; 1級 100), zero errors and warnings. All entries are original/draft_review, NOT verified official past papers.
- `node --check public/sw.js`: passed.
- `tsc --noEmit`: attempted but fails due to missing project dependencies and TypeScript project config; not a verified application typecheck.
- Expo Web export and real browser/iOS/Android tests: not performed; dependencies unavailable.

## Remaining risks
- The v72 concurrency assertions are static; no browser-level race test yet. Reset failure can still leave partial deletion; do not treat delete-all as atomic.
- Export while an active session changes is still a behavior requiring real-browser acceptance testing.
- PWA install/offline, Japanese display, mobile compatibility, and all 500 questions' subject-matter accuracy remain unverified.

## Windows acceptance and deployment
1. Extract the archive to a fresh directory. In PowerShell run `npm.cmd install`, `python scripts/validate_bank.py`, `python scripts/check_operation_guards_v72.py`, `npx.cmd tsc --noEmit`, and `npx.cmd expo export --platform web`.
2. In a disposable browser profile, test answer-save/refresh, backup export, restore, delete confirmation, rapid concurrent actions, install, and offline restart. Back up any existing real learning data before testing.
3. Only after passing acceptance, manually deploy `dist` to the EXISTING Netlify site to retain its storage origin. No deployment or modification of online learning data was performed.
