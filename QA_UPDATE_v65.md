# QA UPDATE v65 — 2026-11-14

Baseline: v64 complete source and reports. Project: 食のまなびノート, not FE Mate AI.

## Change
Added an **unwired** restore service `restoreBackupAfterConfirmation` in `src/lib/backup.ts`. It validates the complete backup before writes, retains the exact v1 raw strings and storage keys, writes both keys, verifies both reads, and attempts rollback on failures. No import/restore button is enabled: the UI must first suspend autosave and obtain explicit user confirmation to prevent stale in-memory state overwriting restored data. This is infrastructure, **not a completed one-click restore**.

## Risks
Rollback itself can fail on storage faults; a failed rollback must be treated as a blocked state. This service does not guarantee atomicity or handle power loss between writes. Do not invoke it directly from the current UI. Existing user data and online Netlify site remain untouched.

## Manual validation
Install dependencies on Windows; run `python scripts/validate_bank.py`, `npx.cmd tsc --noEmit`, `npx.cmd expo export --platform web`. Test with a disposable browser profile before any production deployment. Never clear the existing origin's data; back up existing records before testing restoration.

## Content provenance
The 500 questions remain `original / draft_review`, not official verified past questions. No content additions this run.

## Executed regression
- `node scripts/test_restore_service_v65.cjs`: 3/3 pass (invalid preflight, successful restore, second-key write failure and rollback).
- `node scripts/test_storage_writes_v64.cjs`: 9/9 pass.
- `node scripts/test_storage_runtime_v61.cjs`: 10/10 pass.
- `node scripts/test_backup_runtime_v60.cjs`: 18/18 pass.
- `node scripts/test_backup_export_runtime_v62.cjs`: 7/7 pass.
- `node scripts/test_backup_boundaries_v63.cjs`: 10/10 pass.
- `python scripts/validate_bank.py`: 500 questions, 0 errors, 0 warnings.
- `npm ci --offline`: unavailable because this project has no package-lock.json; full TypeScript and Expo build not run.
