# QA UPDATE v64 — 2026-11-13

Baseline: complete v63 archive, question bank and QA reports. Project: 食のまなびノート only.

## Changes
Added `scripts/test_storage_writes_v64.cjs` (9 runtime checks). It transpiles and executes the actual TypeScript saveProgress, saveDraft, clearProgress, clearDraft, loadProgress and loadDraft functions against a fault-injectable in-memory AsyncStorage mock. Checks save/load roundtrips, separation of progress/draft keys, simulated failed writes and failed removals, and targeted clearing. This is regression test coverage, not a business-logic change. Storage keys, question IDs, JSON shapes, and app display version remain unchanged.

## Executed
- New storage write runtime: 9/9 pass
- Backup boundaries v63: 10/10 pass
- Backup validation v60: 18/18 pass
- Storage read v61: 10/10 pass
- Backup export v62: 7/7 pass (zero writes)
- Question bank structure: 500 (3級 265, 2級 135, 1級 100), zero errors/warnings
- ZIP integrity checked after packaging

## Limitations
- Tests use mocked AsyncStorage, not a real browser or phone. Fault injection models rejection before mutation and cannot guarantee atomic writes in all real storage failure modes.
- Full TypeScript project check and Expo Web export not run; npm dependencies absent.
- No real browser IndexedDB, offline PWA, install, iOS/Android or Netlify deployment verified.
- JSON one-click restore not implemented; read-only backup inspection remains.
- All 500 questions remain original / draft_review, not official verified past questions. No content verification or new questions in this run.

## Windows manual steps
Unzip to a separate folder, keep existing browser data and back up existing learning records. Run `npm.cmd install`, `python scripts/validate_bank.py`, `node scripts/test_storage_writes_v64.cjs`, `node scripts/test_storage_runtime_v61.cjs`, `node scripts/test_backup_runtime_v60.cjs`, `npx.cmd tsc --noEmit`, `npx.cmd expo export --platform web`. In a real browser, verify save/resume, export, install and offline reload before manually deploying `dist` to the existing Netlify site. No online update has occurred.
