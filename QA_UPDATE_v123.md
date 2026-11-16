# QA update v123 — compact quiz interface and controlled release

## Scope
- Project: **食のまなびノート** (NOT FE Mate AI); based on complete `Shoku_Study_v122_progress_storage_roundtrip.zip` and `QA_UPDATE_v122.md`.
- UI-only: tightened the quiz header/question/options spacing while maintaining a **48pt minimum touch height** for answer choices. Answers stay vertically ordered to support long Japanese labels.
- The inline large 「正解です！」/long explanation no longer appears immediately after an answer in practice mode. A short ✓ 正解 / ✕ 不正解 banner and **解説を見る** toggle now occupy the fixed footer; detailed explanations are opt-in. Expanding an explanation scrolls it into view. New questions reset scroll to the top.
- Mock-mode feedback remains hidden until exam results. Written self-review and navigation logic remain in place.
- Settings preview label updated to v1.0.45.
- No changes to `progress.ts`, `backup.ts`, storage keys, backup formats, question IDs, grade distribution, manifest, service worker, or project dependencies.

## Tests run in the assistant environment
- `node scripts/test_compact_quiz_ui_v123.cjs`: **9/9** static TSX contract checks passed.
- All `scripts/test_*.cjs`: **61/61** suites passed, including pre-existing storage, backup, and service-worker regressions.
- `python scripts/validate_bank.py`: **506 questions** (3級 267, 2級 137, 1級 102); **0 errors / 0 warnings**. All original `draft_review` exercises, not official past examination questions.
- `python scripts/test_catalog_sync_v115.py`: **506/506**, 0 errors.
- PNG chunk and pixel regression scripts: **4/4** and **3/3** checks passed.
- `node --check public/sw.js`: passed.
- TSX parser check (part of the new contract suite): passed.

## Not verified here
- A **valid full-project TypeScript type check and Expo Web export** could not be completed: project dependencies are not installed and npm offline installation failed with ENOTCACHED for `@expo/metro-runtime`.
- iOS/Android devices, true browser rendering, PWA install/offline, and storage persistence were **not** tested on real devices.
- DNS access to `github.com` failed in this environment; **no GitHub push and no Netlify deployment was performed**.

## Controlled publication on the user's Windows machine
The ZIP contains `PUBLISH_v123.ps1` at its top level. Extract the full ZIP. PowerShell (from the directory containing the script):

```powershell
powershell.exe -NoProfile -ExecutionPolicy Bypass -File .\PUBLISH_v123.ps1
```

The script requires the original local GitHub checkout at `C:\Users\czj13\Documents\Shoku_Study_v122_test\Shoku_Study_v10_PWA` (or pass `-Repo`), a clean `main` working tree, the expected existing GitHub remote, a matching v122 production-code baseline, Git, Node/npm, Python and Internet access. It **installs dependencies and checks TypeScript, 506-question bank, catalog CSV, all 61 Node suites, Service Worker syntax, and full Expo Web export before changing any file in that Git repository**. Only on success does it copy the 3 v123 changes, commit and push to GitHub. Netlify will then rebuild from that push if connected.

If any pre-publication check fails, the script stops **without changing the Git repository or publishing**. Note: subsequent push errors may leave a successful local commit, which can be retried with `git push origin main` after resolving authentication/network problems.

**Verify that Netlify deployed to the existing `dancing-haupia-604f04` site and its new deployment is Published.** Online user learning records belong to each device/browser origin and are not accessed by this release.
