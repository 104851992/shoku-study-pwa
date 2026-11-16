# 食のまなびノート v1.0.11 — バックアップ検証強化

## 変更
- `src/lib/backup.ts`: エクスポート日時を厳格な UTC ISO 8601 形式に限定し、実在しない日時や曖昧な表記を拒否。
- 進捗と中断データが両方空の場合、復旧可能なバックアップと誤認させないようダウンロードを中止。
- 進捗の主要コレクション型と中断データの基本整合性をチェック。生データの書き換えや自動復元は行わない。
- `scripts/check_backup_v21.py`: 追加したガードの静的回帰チェック。

## 検証
- `scripts/validate_bank.py` と既存の `scripts/check_*.py`、新規 v21 チェック: PASS。
- TypeScript: プロジェクト依存未インストールのため完了せず。Expo Web、Web実機、iOS/Android、オフラインは未検証。
- 3級265問、2級135問、1級100問、合計500問は引き続き `draft_review`。公式過去問として扱わない。

## 残存リスク
- 進捗内部の全フィールドと中断データの全条件の意味検証は未実装。JSONが書き出されても復元成功は保証しない。
- 自動復元機能は未実装。既存の保存キー・データ形式は変更していない。
- Netlify本番は更新していない。

## Windows / Netlify
```powershell
npm.cmd install
python scripts/validate_bank.py
python scripts/check_backup_v21.py
npx.cmd tsc --noEmit
npx.cmd expo export --platform web
```
既存学習記録をバックアップし、JSONファイルの保存を確認。Webで答題・再読込・中断復帰を検証した後、`dist` を既存 Netlify サイトへ手動デプロイする。
