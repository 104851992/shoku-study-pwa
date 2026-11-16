# v1.0.32 — Clear-Site-Data response protection

Baseline: v1.0.31 archive and QA_UPDATE_v41.md. Only 食のまなびノート changed.

## Fix
The Service Worker now refuses to persist any response containing `Clear-Site-Data`, in both installation pre-cache and runtime caching. Such responses can instruct the browser to clear cookies/storage/cache and should not be replayed from an offline cache. Cache namespace v13 -> v14; visible version v1.0.32. Learning storage keys, answer logic, bank contents, IDs and data format are unchanged. Updated legacy static checks to recognize the rotated namespace, preserving all other assertions.

## Validation
- Bank: 500 (3級 265, 2級 135, 1級 100), 0 structural errors/warnings; all remain `draft_review`.
- 25 Python static checks passed; Service Worker precache 9/9, redirect 2/2, activation 3/3, new Clear-Site-Data precache 5/5.
- JavaScript syntax and ZIP integrity checked.
- TypeScript / Expo Web export not verified: node_modules absent; no dependency install attempted in this environment.
- Browser offline behavior, iOS/Android, and Netlify not tested/deployed.

## Risks / manual release
JSON one-click restore is not implemented. Individual question factual verification is pending. Offline shell depends on actual hosting response headers; test against Netlify before release. On Windows, back up existing study data, run `npm.cmd install`, `python scripts/validate_bank.py`, `npx.cmd tsc --noEmit`, `npx.cmd expo export --platform web`, inspect dist and test install/offline/restore. Manually deploy `dist` only after passing. Netlify online site was not updated.
