# 食のまなびノート v1.0.41 / QA UPDATE v51

## Baseline
Unpacked v1.0.40 full ZIP and reviewed progress, backup, app, bank, previous QA report and regression scripts. No FE Mate AI changes.

## Fix
Session draft's `correct` counter was checked only for range, not for consistency with the persisted responses. A corrupt draft could display inaccurate results after resume. `loadDraft()` now rejects a draft if the number of `responses[].correct === true` differs from `correct`, preserving original AsyncStorage bytes and showing the existing load-error state. The backup inspector now applies the same consistency rule to imported read-only backup JSON. No storage keys, JSON schema, IDs, question content or normal answer flows changed. Version label updated to v1.0.41. Updated an older static test with a hard-coded display-version assertion.

## Verification
- `python scripts/validate_bank.py`: 500 (3級 265, 2級 135, 1級 100), 0 errors/warnings, all draft_review.
- `python scripts/check_draft_correct_v51.py`: 4/4 assertions passed.
- 28 Python checks and 11 Node scripts pass (including new check); `node --check public/sw.js` passes.
- TypeScript and Expo Web build not run (node_modules absent); no browser or mobile real-device verification.

## Remaining risks
Malformed historical drafts with incorrect counters will be rejected, not silently repaired; raw data is retained. JSON restore remains unimplemented; offline install and historical progress roundtrip need browser verification. Subject-matter review pending for all 500 draft questions.

## Windows / Netlify
Run `npm.cmd install`, `python scripts/validate_bank.py`, `python scripts/check_draft_correct_v51.py`, `npx.cmd tsc --noEmit`, `npx.cmd expo export --platform web`. Test existing local data, export and read-only inspection, install and offline start; only then manually deploy `dist` to Netlify. Live Netlify site was not updated.
