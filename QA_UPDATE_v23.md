# 食のまなびノート v1.0.13 — バックアップ履歴・日付整合性チェック

## 基準・変更
- 前版 v1.0.12 の ZIP を展開し、全ソース、問題データ、QA_UPDATE、既存検査スクリプトを引き継いだ。
- `src/lib/backup.ts` のバックアップ検証に、暦上有効な日次キー・初回学習日と、試験履歴の構造、日付、級、モード、件数、各回答の型・重複検査を追加。
- `scripts/check_backup_v23.py` を追加。異常があればエクスポートを中止し、保存済みデータは変更しない。
- 既存の AsyncStorage キー、JSON フォーマット、画面、問題 ID を維持。復元機能はまだ実装していない。

## 実行結果
- `python scripts/*.py`：全スクリプト PASS（v23 は 9/9）。題庫：3級265、2級135、1級100、計500、ERRORS 0 WARNINGS 0。
- `npm install --offline`：ENOTCACHED（@expo/metro-runtime の npm キャッシュなし）。依存関係がないため TypeScript、Expo Web build は未実施。
- ブラウザ操作、実機 iOS/Android、オフライン、復元テストは未実施。静的ソース検査は動作保証ではない。
- 500 問はすべて original / draft_review のまま。公式過去問の検証済み問題ではない。
- Netlify 本番環境には変更を加えていない。

## Windows 手順
```powershell
npm.cmd install
python scripts/validate_bank.py
python scripts/check_backup_v23.py
npx.cmd tsc --noEmit
npx.cmd expo export --platform web
```
`dist` を手動デプロイする前に、バックアップのダウンロード、既存データの維持、途中再開、PWA インストール、ネット切断時の動作を確認する。JSON バックアップを安全に保管すること。復元機能は未実装のため、バックアップだけで復旧できると断言しない。
