# QA update v114 — PNG pixel decode and nonblank icon guard

## Baseline
Continued from the complete v113 source ZIP, including 506 questions, 54 Node test suites, and QA history. This is 食のまなびノート, not FE Mate AI.

## Change
Added `scripts/test_png_pixels_v114.py`, a Python-standard-library-only PNG RGB decoder test. It verifies actual zlib-decompressed scanlines and PNG filters (not merely the header/chunk CRC), dimensions, and that both shipped PWA icons contain at least two distinct colors. A truncated icon fixture must fail. No production code, question content, backup format, storage key, or icon asset changed.

## Actual checks
- New pixel tests: 3/3 passed.
- Prior PNG chunk tests: 4/4 passed.
- All 54 Node regression scripts: 54/54 passed.
- Question bank: 506 questions (3級267, 2級137, 1級102), 0 structural errors, 0 warnings. All remain original `draft_review` exercises, not official past questions.
- `node --check public/sw.js`: passed.
- `npm install --ignore-scripts --no-audit --no-fund --prefer-offline`: attempted but timed out; dependencies absent.
- TypeScript and Expo Web export: not completed because dependencies were unavailable.
- Actual Web/iOS/Android devices, offline launch and Netlify: not tested or deployed.

## Risks and Windows release procedure
The new check validates image bytes, not icon legibility or actual installability. Preserve local learning data: export a JSON backup before upgrade. In Windows PowerShell run `npm.cmd install`, `python scripts/test_png_pixels_v114.py`, `python scripts/test_png_chunk_integrity_v113.py`, `python scripts/validate_bank.py`, `npx.cmd tsc --noEmit`, `npx.cmd expo export --platform web`. Then manually test browser storage persistence, backup restore, PWA installation/offline launch, and mobile behavior. Deploy `dist` to Netlify only after successful validation. No online update has been made.
