# v0.6 QA update (2026-11-11)

- Base: v0.5 ZIP. Modified AppRoot.tsx and progress.ts, kept question catalog and identifiers unchanged.
- Added separate AsyncStorage session draft key and startup restoration; restored answered state for current question, self-review text and selection.
- Serialized draft writes; invalidated stale writes on discard; cleared draft after completed exam and progress reset.
- Validation: 500-question structural validator passed with 0 errors/0 warnings; TypeScript transpileModule syntax diagnostics: 0 for AppRoot.tsx and progress.ts. ZIP CRC tested.
- Not run: full TypeScript typecheck with Expo dependencies, React Native runtime test, device force-close persistence, EAS build, all-question subject-matter review.
- Known limitations: answer selections save asynchronously and a forced kill immediately after a tap may lose the last action. Existing sessions from pre-v0.6 releases cannot be restored. Timed 90-minute exam mode is not yet implemented.
