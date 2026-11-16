# 食のまなびノート v1.0.6 — 壊れた途中保存の保護

## 対象
v1.0.5 全ソースを基準。FE Mate AI は対象外。

## 不具合と変更
以前は `loadDraft()` が不正な途中保存 JSON を `null` として返すため、起動時に「途中保存なし」と解釈され、`clearDraft()` が実行されて破損した原本を消去する可能性があった。
- `src/lib/progress.ts`: 途中保存が存在しない場合のみ `null` を返す。不正 JSON や不正構造は例外を投げ、原本を保持。
- `src/AppRoot.tsx`: `draftReadOk` を追加。途中保存の初期読み込み成功前は自動保存・自動削除を禁止。
- `scripts/check_draft_guard_v16.py`: 保護条件の静的検査を追加。
- `@shoku_study/progress_v1` と `@shoku_study/session_draft_v1` のキー・正常データ形式は変更しない。

## 検証
- `python scripts/validate_bank.py`: PASS (3級265 / 2級135 / 1級100、合計500、構造エラー・警告0)
- `python scripts/check_release_safety.py`: PASS
- `python scripts/check_record_guard_v15.py`: PASS
- `python scripts/check_draft_guard_v16.py`: PASS (静的検査)
- `npm install`: FAIL (`EAI_AGAIN`, npm registry DNS 名前解決不可)。そのため TypeScript と Expo Web ビルドは未実施。
- Web/iOS/Android 実機、PWA オフライン・インストール、実行時ストレージ復旧テストは未実施。

## 制約
- 不正な途中保存を自動修復する UI はまだない。読み込みエラー時に原本を保持するが、復旧には追加開発が必要。
- 500問は `draft_review` であり、公式過去問ではない。今回問題は追加していない。
- Netlify へ自動公開していない。既存ブラウザのサイトデータを消去しない。

## Windowsでの確認
```powershell
npm.cmd install
python scripts/validate_bank.py
python scripts/check_release_safety.py
python scripts/check_record_guard_v15.py
python scripts/check_draft_guard_v16.py
npx.cmd tsc --noEmit
npx.cmd expo export --platform web
```
全テスト後、ブラウザで正常な途中保存の再開と破損データ時の保存保護を確認し、既存Netlifyサイトに `dist` を手動デプロイする。
