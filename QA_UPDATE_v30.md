# v1.0.20 — Preserve PWA offline shell during cache eviction

## Source and change
Based on the complete v1.0.19 project, bank, and QA history. The Service Worker previously evicted the first cache key whenever it exceeded 120 entries; this could delete the root HTML shell or manifest/icons and prevent offline restart. Eviction now targets optional assets only, retaining the four shell entries. Cache namespace bumped to v4 so existing v3 cache is retired at activation. No AsyncStorage keys, learning records, question IDs, or answer logic changed.

## Verification
Run `python scripts/validate_bank.py`, all `scripts/check_*.py`, and `node --check public/sw.js`. Static tests cannot prove browser offline behavior. TypeScript and Expo web export require npm dependencies. All 500 learning questions remain draft_review, not verified official exam questions.

## Windows acceptance / Netlify
Run `npm.cmd install`, `npx.cmd tsc --noEmit`, `npx.cmd expo export --platform web`; check `dist/sw.js`, `dist/manifest.webmanifest`, icons; in Chrome/Edge open online, populate >120 cached assets if feasible, toggle offline and reload, answer questions and refresh. Confirm storage persistence and install on supported browsers. Deploy `dist` to Netlify manually only after passing. No online deployment performed.

## Remaining risks
No browser/iOS/Android runtime validation, no one-click JSON restoration, and no end-to-end backup restore verification. Static test cannot validate browser cache eviction behavior or old stored data compatibility.
