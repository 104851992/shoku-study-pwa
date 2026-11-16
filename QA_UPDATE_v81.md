# QA UPDATE v81 — 2026-11-14

Baseline: v80 full archive, question catalog and historical QA reports. Project: 食のまなびノート only.

## Production fix
Service Worker cache version v22 → v23. Require HTTP 200 (rather than generic `response.ok`) for caching the offline shell, initial JS/CSS precache and runtime static resources. This prevents HTTP 206 Partial Content and 204 No Content responses from being stored under a full resource URL, which could corrupt later offline loads. Online responses remain returned unchanged. Previous version cache remains available through existing fallback behavior.

## Regression
Added `scripts/test_sw_partial_response_v81.cjs`: five runtime cases for 206 script, 204 script, 200 script, 206 shell and 200 shell. Updated historical mock fixtures in v40/v41/v42/v44 to include realistic HTTP status and v76 cache name for v23. All 28 Node CJS test suites pass. `python scripts/validate_bank.py`: 500 entries (3級265, 2級135, 1級100), 0 structural errors/warnings. `python scripts/check_pwa_release_v74.py`: PASS. `node --check public/sw.js`: PASS.

## Unverified
Full TypeScript check could not run correctly: project dependencies are absent, and globally installed tsc reports missing React/Expo types and JSX settings. Expo Web export not run. Real browser, offline install, iOS/Android, AsyncStorage restoration and cross-version upgrade remain unverified. No claims about online deployment.

## Provenance and compatibility
All 500 items remain original `draft_review` exercises, not verified official past questions. No bank IDs, AsyncStorage keys, backup schema or application business logic were changed. Service Worker cache name changes by design; browser caches remain best-effort.

## Windows and Netlify
Unzip to a new directory. Run `npm.cmd install`, `python scripts/validate_bank.py`, `node scripts/test_sw_partial_response_v81.cjs`, `npx.cmd tsc --noEmit`, and `npx.cmd expo export --platform web`. Test with a disposable browser profile, including backup/restore, initial offline install, reload, cache upgrade and learning persistence. Export existing learning records to JSON before deploying. Only after successful acceptance, manually upload the resulting `dist` to the existing Netlify site. This run did not deploy or modify online data.
