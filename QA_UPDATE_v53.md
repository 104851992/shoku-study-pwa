# 食のまなびノート v1.0.43 / QA UPDATE v53

## Baseline
Continued from v1.0.42 complete source ZIP. Inspected source, 500-question bank, v52 QA report and historical scripts. No FE Mate AI changes.

## Fix
A saved interrupted session's `began` timestamp was previously accepted if any finite positive number, including fractional values. This value is produced by `Date.now()` and should be a positive safe integer in milliseconds. The runtime loader and read-only JSON backup inspector now enforce the same safe-integer condition. This rejects malformed timestamps without rewriting or deleting the original storage. Existing valid Date.now()-generated drafts remain compatible. No storage keys, question IDs, or data formats changed.

Updated three historical regression assertions to track the current validation/version behavior, without disabling their checks. Display version now v1.0.43.

## Tests
Question bank: 500 (3級 265, 2級 135, 1級 100); 0 structural errors, 0 warnings. Python checks 30/30; Node tests 11/11; `node --check public/sw.js` passed. TypeScript and Expo Web build not run because npm dependencies are not installed. No browser or mobile device validation.

All questions remain `draft_review`; none are asserted to be verified official past exam questions. No new questions this run.

## Remaining risks
JSON restore not implemented. Browser/offline/PWA install, cross-version learning data roundtrip, iOS/Android and subject-matter review remain outstanding. New timestamp validation rejects fractional or unsafe legacy `began` values, if any exist; their original raw bytes remain preserved for recovery.

## Windows / Netlify
Extract ZIP. Run `npm.cmd install`, `python scripts/validate_bank.py`, `npx.cmd tsc --noEmit`, `npx.cmd expo export --platform web`. Test data persistence and offline/PWA behavior before manually deploying `dist` to Netlify. Live site was not updated.
