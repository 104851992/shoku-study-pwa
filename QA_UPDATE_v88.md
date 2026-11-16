# QA UPDATE v88 — 2026-11-14

Baseline: v87 complete archive and its 506 questions, test suites and historical QA reports. Scope: 食のまなびノート only (not FE Mate AI).

## Changes
- Added `scripts/audit_japanese_text_v88.py`: strict UTF-8 decoding, replacement characters, BOM, zero-width/invisible characters, control characters, and empty question-field checks. Covers 506 question entries plus AppRoot, backup service, and PWA manifest.
- Added `scripts/test_japanese_text_audit_v88.py`: five unit cases demonstrating detection and Japanese-text acceptance.
- No changes to application runtime, storage keys, JSON backup schema, existing question IDs, question content, Service Worker or public assets.

## Verification (this run)
- UTF-8/Unicode audit: 4 files and 506 question entries; 0 findings.
- Audit unit tests: 5/5 PASS.
- Existing Node regression suites: 33/33 PASS.
- Question structure validator: 506 (grade 3: 267; grade 2: 137; grade 1: 102); 0 errors, 0 warnings.
- `node --check public/sw.js`: PASS.
- `python scripts/check_pwa_release_v74.py`: PASS (static checks only).
- TypeScript full check and Expo Web export: NOT RUN; npm dependencies are not installed in this environment.
- Browser offline, JSON restore persistence, iOS/Android, and Netlify: NOT TESTED.

## Content provenance and risk
All 506 entries remain `source: original`, `reviewStatus: draft_review`; none should be described as verified official past exam questions. Encoding checks do not verify nutrition facts, question ambiguity, or official alignment. The Web restore interface is wired in source but still needs real-browser testing with disposable data. No live deployment or modification of existing learning data.

## Windows / Netlify release procedure
1. Extract ZIP and preserve an independent backup of existing learning records.
2. Run `npm.cmd install`, `python scripts/validate_bank.py`, `python scripts/audit_japanese_text_v88.py`, `python scripts/test_japanese_text_audit_v88.py`, `npx.cmd tsc --noEmit`, and `npx.cmd expo export --platform web`.
3. In a separate browser profile, test answer persistence across refresh, JSON export/import and recovery, offline installation/startup, and mobile layouts. Do not overwrite production records during tests.
4. Only after passing checks, manually deploy the generated `dist` folder to the existing Netlify site. No online update was performed in this run.
