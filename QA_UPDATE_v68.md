# QA UPDATE v68 — 2026-11-14

Baseline: v67 complete project, question bank, QA history and existing regression tests. Scope: 食のまなびノート only.

## Changes
Guarded three additional storage-affecting UI paths while JSON restore is locked: export cannot capture a partial restore, draft deletion cannot remove the restored draft, and reset is checked both before and after the asynchronous confirmation dialog (which can be open while restore begins). This closes a race where an already-open reset confirmation could clear newly restored records. No storage keys, backup schema, question IDs or app-visible version changed.

## Verification
- Question structural validation: 500 total (3級 265, 2級 135, 1級 100), 0 errors, 0 warnings.
- New static interlock assertions: 7/7 pass. Static checks do not establish browser race-free behavior.
- Existing Node runtime suites: 18/18 backup validation, 10/10 storage reads, 7/7 export, 10/10 backup boundaries, 9/9 storage writes, 3/3 restore, 2/2 rollback = 59/59 pass.
- Service worker JavaScript syntax: pass.
- npm install attempted, timed out after 25 seconds; TypeScript full check and Expo Web export could not be completed without dependencies.
- Browser, offline, iOS and Android device tests: not performed.

## Risks and next steps
- Verify reset confirmation opened before a restore, backup export and draft deletion against a disposable browser profile. The remaining restore flow needs browser E2E verification; AsyncStorage cannot provide atomic multi-key transactions.
- All 500 questions remain original/draft_review, not verified official past questions. No new subject-matter verification this run.
- Windows PowerShell: `npm.cmd install`; `python scripts/validate_bank.py`; `python scripts/check_restore_interlocks_v68.py`; `npx.cmd tsc --noEmit`; `npx.cmd expo export --platform web`.
- Back up current data separately; test export/restore/refresh/offline in an isolated profile before manually deploying `dist` to the existing Netlify site. No Netlify deployment performed.
