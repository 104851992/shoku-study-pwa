# QA update v94 — Restore failure and rollback fault injection

## Baseline
Continued from the complete v93 project ZIP and QA_UPDATE_v93.md. Scope is 食のまなびノート, not FE Mate AI. Existing bank has 506 questions (3級 267, 2級 137, 1級 102), all original `draft_review` exercises, not verified official past questions.

## Change
Added `scripts/test_restore_failure_rollback_v94.cjs`. It executes the actual `src/lib/backup.ts` via TypeScript transpilation with fault-injected AsyncStorage and verifies three cases: (1) second storage operation throws and both original records are restored; (2) first write silently fails and post-write verification detects the mismatch and restores original values; (3) rollback itself fails and the caller receives the explicit unrecoverable warning. No production source or storage schema was changed.

## Verification
- New fault injection: 3/3 passed.
- All Node `.cjs` regression suites: 36/36 passed.
- `python scripts/validate_bank.py`: 506 questions, 0 errors, 0 warnings.
- `python scripts/check_catalog_sync_v89.py`: 506/506, 0 errors.
- `python scripts/audit_japanese_text_v88.py`: 4 files, 506 entries, 0 issues.
- `python scripts/check_manifest_assets_v90.py`: 0 errors.
- `node --check public/sw.js`: passed.
- TypeScript full project: attempted, not passed because dependencies are absent (`react` types, JSX config etc.); no conclusion about production type correctness.
- Expo Web build: not performed (dependencies absent).
- Real browser/Netlify/iOS/Android, offline launch and recovery: not tested.

## Compatibility and risks
No changes to app behavior, question IDs, question text, AsyncStorage keys, backup envelope, Service Worker or manifest. Fault injection verifies the recovery code in a mock adapter, not atomicity under power loss or real browser storage eviction. If rollback fails, data may be partially modified; the service explicitly warns not to resume saving. No live Netlify deployment or online learning-data changes.

## Windows / Netlify handoff
Back up existing browser learning data first. Unzip and run in PowerShell: `npm.cmd install`, `node scripts/test_restore_failure_rollback_v94.cjs`, `python scripts/validate_bank.py`, `npx.cmd tsc --noEmit`, `npx.cmd expo export --platform web`. Use a separate browser profile to verify restore, refresh persistence, PWA installation, and offline launch; test mobile Safari and Chrome. Deploy `dist` manually to the original Netlify site only after successful checks. Do not overwrite the live site just because mock tests pass.
