# 食のまなびノート v1.0.5 — 個別レコード破損時の上書き防止

## 変更
- `src/lib/progress.ts`: `answers` / `days` 内の不正なレコードを無言で除外して保存し直す挙動を停止。破損を検出した場合は読み込み失敗とし、既存の `AppRoot.tsx` の保存ガードによって自動保存を抑止する。
- 不正な `favorites`、`history`、`firstDate`、`dailyGoal` も同様に検出する。旧形式でフィールド自体が存在しない場合は従来どおり許容。
- `history` は全件検証してから、従来どおり表示用に先頭20件に制限。
- `scripts/check_record_guard_v15.py`: ソース静的チェック追加。

## 検証
- `python scripts/validate_bank.py`: 500問、構造エラー0、警告0。
- `python scripts/check_release_safety.py`: PASS。
- `python scripts/check_record_guard_v15.py`: PASS（静的検査のみ）。
- TypeScript/Expo Webビルド: npm依存パッケージが環境にないため未実施。
- Web/iOS/Android実機、PWAインストール・オフライン: 未検証。

## 制約と互換性
- AsyncStorageキー `@shoku_study/progress_v1` は不変。正常な保存データのスキーマは不変。
- 保存済みデータに不正な値がある場合は、自動修復せず保存を停止する。バックアップ/復元UIは未実装。
- 500問は `draft_review`。公式過去問ではない。
- Netlifyには未反映。既存ブラウザのサイトデータを消去しないこと。

## Windowsでの確認
```powershell
npm.cmd install
python scripts/validate_bank.py
python scripts/check_release_safety.py
python scripts/check_record_guard_v15.py
npx.cmd tsc --noEmit
npx.cmd expo export --platform web
```
既存サイトの保存データを消去せず、正常な進捗保存・再読み込み・模擬試験を確認した後、既存Netlifyサイトへ `dist` を手動デプロイ。
