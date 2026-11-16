# QA update v105 — Backup/session draft validation parity

## Baseline and scope
Continued from the v104 complete source archive and its QA history. Project: 食のまなびノート (not FE Mate AI). The existing 506-question bank and application implementation are unchanged.

## Change
Added `scripts/test_backup_draft_consistency_v105.cjs`. It loads the production TypeScript backup validator and production draft loader with a mocked AsyncStorage adapter and verifies that both accept/reject the same eleven draft payloads: fresh session, answered session, invalid grade, unknown ID, duplicate IDs, negative index, invalid start timestamp, mismatched answer count, incorrect correctness flag, response order mismatch, and duplicate responses. No storage keys, backup format, question IDs, or application code changed.

## Verification (2026-11-15 JST)
- New draft consistency scenarios: **11/11 passed**.
- All `scripts/test_*.cjs` Node regression suites: **47/47 passed**.
- Question structure: **506 total** (3級 267, 2級 137, 1級 102); **0 errors, 0 warnings**.
- Service worker syntax: `node --check public/sw.js` passed.
- `tsc --noEmit`: **not successful**; missing installed dependencies / JSX compiler context. Do not interpret as code-level TypeScript pass/fail.
- Expo Web export: **not run** (dependencies not installed).
- Real browsers, PWA offline, iOS and Android: **not tested**.
- Question source status: all `original` / `draft_review`; no claim of official past-exam questions or subject-matter verification.

## Remaining risks and deployment
Mocked storage parity does not prove persistence on real devices. On Windows, extract, run `npm.cmd install`, `node scripts/test_backup_draft_consistency_v105.cjs`, `python scripts/validate_bank.py`, `npx.cmd tsc --noEmit`, and `npx.cmd expo export --platform web`. Back up existing study records first. In a disposable browser profile, verify session resume, JSON export/restore, reload persistence, installation and offline restart. Only after acceptance manually deploy `dist` to the existing Netlify site. This run did not deploy to Netlify or modify user learning data.
