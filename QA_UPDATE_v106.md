# QA update v106 — Restore atomicity fault injection

## Baseline
Continued from v105 full archive and QA_UPDATE_v105.md. Project is 食のまなびノート, not FE Mate AI. Existing application code, 506 questions, storage keys, and backup schema remain unchanged.

## Changes
Added `scripts/test_restore_atomicity_v106.cjs`, executing the real TypeScript `restoreBackupAfterConfirmation` through a mocked AsyncStorage adapter. Four cases: second write throws and original values are restored; second write silently fails and verification triggers rollback; rollback itself fails and a critical error is surfaced; normal restore succeeds. Test fixture uses distinct old/new draft bytes so silent failures are observable.

## Verification (2026-11-15 JST)
- New restore atomicity tests: 4/4 passed.
- All `scripts/test_*.cjs`: 48/48 suites passed.
- `python scripts/validate_bank.py`: 506 questions (3級 267, 2級 137, 1級 102), 0 errors, 0 warnings.
- `node --check public/sw.js`: passed.
- TypeScript full-project compile and Expo Web export: not completed; project dependencies not installed in this environment.
- Browser, iOS, Android, Netlify, and real offline tests: not performed.
- Question status: original / draft_review, NOT official exam questions, not independently subject-matter verified.

## Risks and manual deployment
Storage operations cannot guarantee atomicity across device crashes, browser quota errors, or concurrent writes; an unrecoverable rollback correctly warns but still requires manual recovery. Back up existing learning data before any update. On Windows run `npm.cmd install`, `node scripts/test_restore_atomicity_v106.cjs`, `python scripts/validate_bank.py`, `npx.cmd tsc --noEmit`, and `npx.cmd expo export --platform web`. Verify backup/restore and reload persistence in a disposable browser profile, install and offline restart, then manually publish `dist` to Netlify. No online deployment or modification of actual learning data was performed.
