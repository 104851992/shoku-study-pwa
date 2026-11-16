# 食のまなびノート v1.0.7 品質改善

## 変更点
1. `src/lib/progress.ts`: 既存の試験履歴を読み込む際の `.slice(0,20)` を廃止。保存済みの21件目以降を再保存時に消してしまうリスクを解消。
2. `src/AppRoot.tsx`: 新しい試験を完了する際の履歴20件切り捨てを廃止。画面の直近5件表示は維持。
3. `src/AppRoot.tsx`: 保存された途中試験に現在の問題集に存在しない問題IDが含まれる場合、読み込み成功扱いで自動削除しないように変更。エラー表示し、元データを保持。
4. `scripts/check_record_guard_v15.py`: 旧「20件上限」前提の静的検査を履歴保持の検査に更新。
5. `scripts/check_history_retention_v17.py`: 履歴保持・不正な途中試験の自動削除防止の静的検査を追加。

## 検証結果
- 全Python静的検査: PASS（題庫500問、構造エラー・警告0）
- npm install: FAIL（registry.npmjs.org の DNS EAI_AGAIN）
- TypeScript、Expo Webビルド、Web/iOS/Android実機、PWAオフライン: 未検証

## 既知の制約
- 旧バージョンで既に削除された21件目以降の履歴は復元できない。
- 保存済み履歴が増えるとAsyncStorage使用量が増える。将来は明示的なバックアップ/アーカイブ機能を検討。
- 途中試験の問題IDが存在しない場合、自動削除は防ぐが復旧UIは未実装。
- 全500問は `draft_review`、公式過去問として未検証。
- Netlifyサイトは更新していない。元のブラウザサイトデータを削除しない。

## Windowsでの確認と公開
```powershell
npm.cmd install
python scripts/validate_bank.py
python scripts/check_release_safety.py
python scripts/check_record_guard_v15.py
python scripts/check_draft_guard_v16.py
python scripts/check_history_retention_v17.py
npx.cmd tsc --noEmit
npx.cmd expo export --platform web
```
正常な履歴（21件以上）と途中保存の復帰をブラウザで確認後、`dist` を既存Netlifyサイトに手動デプロイ。
