# 食のまなびノート QA UPDATE v56

## Baseline
Continued from v55 complete source ZIP, reviewed v55 report, progress.ts, backup.ts, AppRoot.tsx, question bank and prior scripts. This is not FE Mate AI.

## Fix
Previously AppRoot blocked cross-grade saved drafts, but loadDraft() itself returned those drafts and validateBackupEnvelope() accepted them as valid backups. Both lower-level validators now check that every draft ID belongs to the draft's declared grade. This brings runtime loading and read-only backup inspection into agreement with the existing UI guard. Invalid records are rejected without overwriting their original AsyncStorage bytes. No storage keys, JSON layout, IDs, scoring or PWA cache changed. Display version remains v1.0.44; delivery identifier v56.

## Checks
- Question bank: 500; grade 3=265, grade 2=135, grade 1=100; 0 structural errors and warnings.
- Static guard presence: pass in both modules.
- `node --check public/sw.js`: pass.
- Full historical Python suite: attempted but execution timed out; do not count as passed.
- TypeScript, Expo web build: not executed (npm dependencies unavailable).
- Browser/iOS/Android and Netlify: not tested/deployed.

## Content and outstanding risks
All 500 questions remain `source: original`, `reviewStatus: draft_review`; none certified as official past questions. JSON restore is not implemented. End-to-end data recovery, offline cache behavior and device compatibility require manual acceptance. Existing saved drafts containing removed question IDs will now be rejected and left intact, not automatically migrated.

## Windows verification and deployment
Unzip, then `npm.cmd install`, `python scripts/validate_bank.py`, `npx.cmd tsc --noEmit`, `npx.cmd expo export --platform web`. Test valid interrupted sessions and cross-grade corrupted sessions, backup inspector, offline install/reload and saved data on target devices. Back up local data before deploying. Only then manually deploy `dist` to Netlify. No online deployment has occurred.
