# v0.4 QA update — 2026-11-11

## Changes
- Serialized AsyncStorage writes to prevent stale writes completing after newer progress updates. Subsequent writes continue even after a failure.
- Clarified full-length mock practice is **untimed**. This is not yet a 90-minute exam simulation.
- Clarified written responses use self-assessment and the sample answer is visible before self-rating; the score is not a certified examination score.

## Verified
- `python scripts/validate_bank.py`: 500 questions; zero structural errors (see console output).
- Source-level inspection confirms the existing result contrast fix and wrong-answer review are present; these are not device-verified.

## Risks / next actions
- No full Expo dependency installation, TypeScript typecheck, iOS device test, EAS build, or TestFlight deployment was performed in this run.
- Content validity, law updates, ambiguous choices, and official exam equivalence need human editorial review. 500 questions are marked `draft_review`.
- Mock timer, interruption recovery, and real exam scoring are not yet implemented.
- App Store release readiness: NOT ACHIEVED.
