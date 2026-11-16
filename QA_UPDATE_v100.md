# QA update v100 — Legacy history backup compatibility

## Baseline
Continued from the full v99 archive, its complete source, 506-question bank, question catalog, and historical QA reports. This project is 食のまなびノート, not FE Mate AI.

## Change
Added `scripts/test_backup_legacy_history_v100.cjs` with six tests against the real TypeScript backup validator. It confirms that previously saved history containing retired question IDs remains acceptable, while malformed selections and duplicate IDs are rejected; existing question IDs still undergo answer-consistency checks. Invalid backups are rejected without reading or writing storage. Test-only change; runtime code, storage keys, question IDs, backup envelope and existing user data are unchanged.

## Verification (2026-11-15 JST)
- New compatibility cases: 6/6 passed.
- All Node .cjs regression suites: 42/42 passed.
- Bank structure: 506 questions (3級267 / 2級137 / 1級102), 0 errors, 0 warnings.
- Manifest and PNG asset audit: 0 errors; Service Worker syntax check passed.
- TypeScript project check attempted; blocked by missing Expo/React project dependencies and base tsconfig. Not a successful compile.
- Expo Web export and actual Web/iOS/Android tests not completed.
- Questions remain original `draft_review` practice material; none is claimed to be an official past question.

## Risks and deployment
Retired IDs are preserved in history but cannot be replayed as current questions. Browser storage eviction, autosave races, import/export in a real browser, and offline-first launch remain unverified. On Windows unpack separately, run `npm.cmd install`, `node scripts/test_backup_legacy_history_v100.cjs`, `python scripts/validate_bank.py`, `npx.cmd tsc --noEmit`, and `npx.cmd expo export --platform web`. Export and separately save existing learning data before testing in a disposable browser profile. Deploy the resulting `dist` to the existing Netlify site manually only after acceptance. No Netlify deployment or live data modification was performed.
