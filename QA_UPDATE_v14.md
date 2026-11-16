# 食のまなびノート v1.0.4 — 保存データ構造・日付検証

## 変更内容
- `src/lib/progress.ts`：保存済み `answers`、`days` がオブジェクト以外、または `favorites`、`history` が配列以外の場合、読み込みエラーとして処理。旧バージョンで省略されたフィールドは引き続き許容。異常なデータを空のコレクションに置き換えて保存するリスクを低減。
- `validDate()`：`Date.parse()` による日付の繰り上がりを避け、年月日の往復照合で 2026-02-30 等を拒否。
- `scripts/check_release_safety.py`：上記の静的回帰チェックを追加。

## 検証結果
- `python scripts/validate_bank.py`：500問、構造エラー0、警告0。
- `python scripts/check_release_safety.py`：PASS（静的ソース検査。実行時動作の証明ではない）。
- TypeScript / Expo Web build：依存パッケージ未導入のため未検証。
- Web / iOS / Android 実機、PWAインストール・オフライン：未検証。

## 互換性・制約
- AsyncStorageキー `@shoku_study/progress_v1`、データ形式、既存の500問を維持。
- 不正な保存データは自動修復せず、元データを保護するため自動保存を停止する。
- 一部の不正な個別レコードの除外処理は従来どおり。今後、バックアップ・復旧導線の追加を検討。
- 500問は全て `draft_review`。公式過去問として扱わない。
- Netlifyサイトには未反映。

## Windows確認・手動デプロイ
1. 新しいフォルダへ展開し、`package.json` のある場所で `npm.cmd install` を実行。
2. `python scripts/validate_bank.py` と `python scripts/check_release_safety.py` を実行。
3. `npx.cmd tsc --noEmit`、`npx.cmd expo export --platform web` を実行。
4. 既存のブラウザサイトデータを削除せず、学習記録の保存・再読み込み・お気に入り・模擬試験を確認。
5. 問題がなければ既存のNetlifyサイトへ生成した `dist` を手動デプロイ。
