# 食のまなびノート v1.0.9 品質改善

## ベースライン
v1.0.8 の完全ソース、500問、過去のQAレポートを継承。FE Mate AIには変更なし。

## 新機能
- `src/lib/backup.ts`: Web版で学習記録と中断中のセッションをJSONファイルへエクスポートする機能を追加。保存済みAsyncStorageの生データを保持し、将来の復元時に情報を欠落させない設計。既存の保存キーや形式は変更しない。
- 設定画面に「学習記録をJSONでバックアップ（Web版）」ボタンと個人情報・復元未対応の注意を追加。
- 進捗とセッションの保存キューを待機してから読み出す。読み込みエラー時はエクスポートしない。ダウンロードはWeb版のみ。

## 検証
- 問題集構造: 3級265、2級135、1級100、合計500、ERROR 0、WARN 0。
- 既存 `scripts/check_*.py`: 全件PASS（静的チェック）。
- TypeScript/Expo Webビルド/ブラウザ/iOS/Android: 未検証（プロジェクトのnpm依存がない）。
- 500問はすべて `draft_review`。公式過去問として認証済みではない。

## 残るリスク
- ダウンロードはブラウザの設定によりブロックされる場合がある。復元UIは未実装で、バックアップファイルから自動復元はできない。
- エクスポートは機密性のある学習履歴を含むため第三者に共有しないこと。
- PWAオフライン・実機互換性は未確認。Netlify本番は更新していない。

## Windows検証・公開
```powershell
npm.cmd install
python scripts/validate_bank.py
python scripts/check_release_safety.py
python scripts/check_record_guard_v15.py
python scripts/check_draft_guard_v16.py
python scripts/check_history_retention_v17.py
python scripts/check_history_answers_v18.py
npx.cmd tsc --noEmit
npx.cmd expo export --platform web
```
Web版で学習記録を作り、設定からバックアップを実行してJSON内の `format`, `version`, `progressRaw`, `draftRaw` を確認する。保存中の問題がある場合も試し、既存学習記録の復元・続きから再開を検証する。問題なければ `dist` を既存Netlifyサイトに手動デプロイする。
