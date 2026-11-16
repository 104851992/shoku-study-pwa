# QA UPDATE v76 — 2026-11-14

Baseline: v75 complete source, question bank and QA updates. Scope: 食のまなびノート only.

## Work completed
- Added `scripts/test_sw_offline_routes_v76.cjs` to execute the actual Service Worker inside a mocked browser environment, covering four offline cases: deep-link navigation using current shell, deep-link navigation using retained prior shell, cached JS asset fallback, and missing JS asset rejecting rather than serving HTML.
- No production code or storage schema changes; existing question IDs, backup format, AsyncStorage keys, and user data compatibility preserved.
- Inspected latest v75 QA and Service Worker implementation before adding regression coverage.

## Verification
- 23/23 Node test suites passed, including 4/4 new scenarios.
- `python scripts/validate_bank.py`: 500 questions (3級265, 2級135, 1級100), 0 errors, 0 warnings; structural only.
- `python scripts/check_pwa_release_v74.py`: PASS.
- `node --check public/sw.js`: PASS.
- Global `tsc --noEmit`: attempted, failed due to missing project dependencies/types and JSX configuration inherited from Expo; not a successful project TypeScript check.
- Expo Web build not run: `node_modules/expo` absent.
- Real-browser PWA install/offline and iOS/Android tests not run.

## Known risks
- Simulated offline tests do not establish complete first-install offline availability; JavaScript assets must have been cached previously.
- The Service Worker intentionally rejects an offline uncached JS asset rather than serving HTML.
- 500 questions remain `source=original`, `reviewStatus=draft_review`, not verified official past examination questions. No new questions added.

## Windows verification and deployment
1. Extract the complete ZIP into a fresh directory. Keep existing deployed website unchanged and export a JSON learning-data backup before testing.
2. Run `npm.cmd install`, `python scripts/validate_bank.py`, `python scripts/check_pwa_release_v74.py`, `node scripts/test_sw_offline_routes_v76.cjs`, `npx.cmd tsc --noEmit`, `npx.cmd expo export --platform web`.
3. In a disposable browser profile, verify Japanese text, answer flow, backup/export/import/reset, refresh, PWA install and offline restart; test with network disabled after loading the required assets.
4. Only after acceptance, manually deploy the generated `dist` folder to the existing Netlify site. No Netlify deployment or online user-data modification performed.
