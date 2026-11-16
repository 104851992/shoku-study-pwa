# v1.0.26 — Session draft validation consistency

## Baseline
Continued from the complete v1.0.25 source and QA_UPDATE_v35.md. FE Mate AI was not modified.

## Change
`loadDraft()` now rejects empty question IDs, malformed response objects, non-string optional writing answers, unsafe integer answer indices, and unsafe integer counters. This aligns read-time validation with the existing backup envelope inspector and reduces the chance of malformed persisted drafts reaching review screens. No storage key, draft schema, question ID, or valid-record normalization changed. Invalid drafts still trigger the existing read error instead of being silently deleted.

## Verification
Run `python scripts/validate_bank.py`, `python scripts/check_draft_guard_v36.py`, and existing Python checks. TypeScript and Expo export require installed npm dependencies. Actual browser and mobile behavior must be validated on devices.

## Windows / Netlify
Back up learning data first. In PowerShell: `npm.cmd install`; `python scripts/validate_bank.py`; `python scripts/check_draft_guard_v36.py`; `npx.cmd tsc --noEmit`; `npx.cmd expo export --platform web`. Inspect the generated `dist` and verify old learning progress, drafts, backup inspection, offline reload, and PWA install before manually deploying `dist` to Netlify. No online deployment was performed.

## Outstanding
JSON restore not implemented; offline boot and iOS/Android device testing not verified. All 500 questions remain `draft_review` and are not verified official past exam questions.
