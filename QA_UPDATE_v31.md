# v1.0.21 — Respect sensitive Vary headers in offline caching

## Scope
Based on v1.0.20 full source and historical QA reports. A same-origin static-looking response with `Vary: Cookie`, `Vary: Authorization`, or `Vary: *` could previously be cached despite the absence of `Cache-Control: private` or `Set-Cookie`. Service Worker caching now refuses these responses. Cache namespace advanced to v5 to retire previously stored entries. This is a defense-in-depth change, not proof of isolation for every personalized endpoint.

No changes to AsyncStorage keys, question IDs, question bank, learning data, or answer logic. All 500 questions remain `draft_review`, not official verified past papers.

## Checks and limitations
Run all `scripts/check_*.py`, `scripts/validate_bank.py`, and `node --check public/sw.js`. Static checks cannot replace real browser testing. TypeScript and Expo export require installed npm dependencies. No native-device or Netlify deployment was performed.

## Windows and Netlify acceptance
Run `npm.cmd install`, `npx.cmd tsc --noEmit`, `npx.cmd expo export --platform web`. Verify `dist/sw.js`, manifest and icons; load online and confirm Service Worker activation, then test offline reload, answer persistence, refresh, and backup inspection. Check a server response with `Vary: Cookie` is not stored in Cache Storage. Upload `dist` manually to Netlify only after acceptance.

## Open risks
One-click JSON restore remains unimplemented. Browser offline behavior, iOS/Android compatibility, and old-record end-to-end migration have not been verified.
