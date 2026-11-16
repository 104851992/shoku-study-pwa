# 食のまなびノート v1.0.15 — バックアップ読み取り専用確認

## 変更
v1.0.14 の完全ソース・500問・QA資料を引き継ぎ、Web設定画面に「バックアップJSONを確認（復元なし・Web版）」を追加。ユーザーが選んだJSONを最大5MBまで読み込み、既存 `validateBackupEnvelope` による構造・日時・学習記録検証を実施し、作成日時・回答記録数・試験履歴数・中断記録の有無を表示する。**AsyncStorageへの書き込みや復元は一切しない。** 既存キー・データ形式・問題IDは変更なし。画面の試作版表示を v1.0.15 に更新。

## 検証
- `python scripts/validate_bank.py`: 500問（3級265/2級135/1級100）、ERRORS 0、WARNINGS 0。
- 既存の `scripts/check_*.py` と追加 `check_backup_inspection_v25.py`: 全件PASS（追加7件）。これらは静的検査でありブラウザ実機動作を保証しない。
- TypeScript / Expo Web build: npm依存がこの環境に揃わず未実施。Web/iOS/Android実機、PWAオフライン未検証。
- 500問すべて `draft_review`、公式過去問と認定しない。

## リスクとWindowsでの確認
`npm.cmd install` → `python scripts/validate_bank.py` → `python scripts/check_backup_inspection_v25.py` → `npx.cmd tsc --noEmit` → `npx.cmd expo export --platform web`。
ブラウザで有効なバックアップ、破損JSON、5MB超ファイル、キャンセル、保存履歴の継続を確認する。読み取り専用検査は復元成功を保証しない。実際の復元機能は未実装。Netlifyは未更新。全検証後に `dist` を手動デプロイする。
