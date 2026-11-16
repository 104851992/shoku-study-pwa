# 食のまなびノート v1.0.14 — 履歴日時の整合性

## 基準
v1.0.13 の完全 ZIP を展開し、既存ソース、500問、全 QA 記録、検査スクリプトを引き継いだ。FE Mate AI は対象外。

## 変更
- `src/lib/progress.ts` と `src/lib/backup.ts` に、UTC ミリ秒付き ISO 8601 日時の厳密検査を追加。
- 従来は `2026-11-11anything` のような履歴日時でも先頭10文字が有効日なら受け入れたが、今後は不正な日時を拒否して原データを上書きしない。
- 解答の `lastAt` も検査する。既存の空文字列は旧データ互換のため許容する。
- 既存 `check_backup_v23.py` を新しい強い日時条件に合わせ、`check_timestamp_v24.py` を追加。
- AsyncStorage キー、保存形式、問題ID、既存UIは変更なし。復元機能は未実装。

## 検証
- 既存・新規 Python スクリプト全件 PASS。新規日時検査8/8 PASS。
- 問題構造：3級265、2級135、1級100、合計500、ERRORS 0 / WARNINGS 0。
- npm install --offline：ENOTCACHED (@expo/metro-runtime)。TypeScript / Expo Web build / ブラウザ / iOS / Android / PWAオフラインは未検証。
- 日時検査はソース静的テストであり、実際のデータ移行・ランタイムテストではない。
- 旧版が非標準の履歴日時を保存していた場合、新版は読み込みを停止する。原データは保持されるが、修復UIは未実装。
- 全500問は original / draft_review。公式過去問として未検証。Netlify 本番は未更新。

## Windowsでの確認
```powershell
npm.cmd install
python scripts/validate_bank.py
python scripts/check_timestamp_v24.py
npx.cmd tsc --noEmit
npx.cmd expo export --platform web
```
ブラウザで旧学習データの読み込み、履歴表示、回答、途中再開、バックアップ保存を検証する。PWAインストール・オフライン確認後にのみ `dist` を手動で Netlify にデプロイする。デプロイ前に既存データのバックアップを取る。
