# 食のまなびノート v1.0.44 / QA UPDATE v54

## Baseline and change
Based on the complete v1.0.43 ZIP and its QA report. A session draft previously accepted response IDs in arbitrary order and a cursor unrelated to the answered count. The loader and read-only backup inspector now require responses to match the ordered prefix of session question IDs, and cursor to equal answered (awaiting answer) or answered minus one (answered current question). This mirrors the application’s record/next flow, rejects malformed draft data without overwriting original storage, and retains valid existing draft records. No storage keys or question IDs changed.

## Testing and limitations
See run results. All 500 questions remain draft_review, not official verified exam questions. JSON restore and browser/mobile tests remain pending. Netlify was not deployed.

## Windows verification
Run npm.cmd install; python scripts/validate_bank.py; npx.cmd tsc --noEmit; npx.cmd expo export --platform web. Test draft resume both before and after answering current question, backups, PWA installation and offline behavior before manually deploying dist.
