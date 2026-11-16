# 食のまなびノート QA UPDATE v55 (display version v1.0.44 unchanged)

## Baseline
Continued from the complete v54 ZIP, including 500 original draft_review questions and prior QA notes. This is the Shoku Study PWA, not FE Mate AI.

## Change
The initial saved-session recovery guard now checks that *every* saved question ID belongs to the draft's recorded grade, not merely that it exists in the global question bank. A cross-grade or tampered draft is blocked from resuming, with the original AsyncStorage record retained for investigation. No storage keys, JSON formats, question IDs, answer scoring, or offline cache namespace changed. Display version remains v1.0.44 because this is a guard-only patch; archive release identifier v55.

Added scripts/check_draft_grade_v55.py. Updated one stale historical check (check_draft_correct_v51.py) to expect the already-existing v1.0.44 display label rather than v1.0.43.

## Verification
- Question bank validator: 500 questions, 3級 265 / 2級 135 / 1級 100; 0 structural errors, 0 warnings.
- Python checks: 32/32 pass after updating stale version assertion.
- Node regression scripts: 11/11 pass.
- Service Worker JavaScript syntax: pass (node --check).
- TypeScript/Expo web export: not run (node_modules not bundled; network install not performed).
- Real browsers, offline reopening, Web/iOS/Android persistence: not verified.
- All 500 items remain original draft_review, not verified official past papers. No subject-matter review performed.

## Remaining risks and manual Windows/Netlify steps
Extract the ZIP, run npm.cmd install, python scripts/validate_bank.py, python scripts/check_draft_grade_v55.py, npx.cmd tsc --noEmit, and npx.cmd expo export --platform web. Test a normal same-grade interrupted session and a malformed cross-grade session, saved history and backups, PWA installation, offline reload, and actual devices. Preserve a JSON backup before changing production data. Upload dist to Netlify manually only after acceptance. Netlify has NOT been deployed. JSON restore is still not implemented.
