# 食のまなびノート v1.0.12 — バックアップ内部データ検証の追加

## 変更内容
- `src/lib/backup.ts`：JSONの外形だけでなく、回答回数、正答数、日次集計、学習目標の範囲を検証。
- 中断データについて、問題ID重複、級・モード、開始時刻、回答数、正答数、回答ID重複と回答内容の整合性を確認。
- 不正な保存データはバックアップ作成を中止。既存のストレージキーや保存形式は変更しない。復元・上書きは実装しない。
- `scripts/check_backup_v22.py` を追加（ソースコードの静的検査）。

## 検証と制約
- 既存 `scripts/*.py` と新規チェックを実行：PASS。題庫構造：3級265、2級135、1級100、合計500、エラー0。
- TypeScriptコンパイルはプロジェクト依存パッケージがないため検証不可。Expo Webビルド、ブラウザ、iOS/Android、オフラインも未検証。
- バックアップ内の試験履歴全項目・日付キーなどの完全な意味検証は未実装。バックアップは復元可能性を保証しない。
- 500問は `draft_review` のまま。公式過去問と表記しない。
- Netlify本番は更新していない。

## Windows / Netlify
```powershell
npm.cmd install
python scripts/validate_bank.py
python scripts/check_backup_v22.py
npx.cmd tsc --noEmit
npx.cmd expo export --platform web
```
バックアップをダウンロードして内容を確認し、回答・再読込・中断再開・PWAインストール/オフライン動作を実機で確認した後に、`dist` を既存Netlifyサイトへ手動デプロイする。既存の学習記録は削除しない。
