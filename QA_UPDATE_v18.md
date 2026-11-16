# 食のまなびノート v1.0.8 品質改善

## ベースライン
v1.0.7 完全ソース、既存QA_UPDATE_v04〜v17、500問の問題集を引き継いだ。FE Mate AIには変更なし。

## 変更点
- `src/lib/progress.ts`: 保存済み試験履歴の内側にある回答行を検証する。ID、選択肢インデックス、正誤フラグ、記述回答の型、回答ID重複、総問題数を超える回答行を検出する。
- 破損履歴があれば `loadProgress()` が例外を投げ、既存の読み込み失敗ガードにより自動保存を止める。破損データを勝手に削除しない。
- `scripts/check_history_answers_v18.py`: 上記の静的回帰検査を追加。

## 検証結果
- `scripts/validate_bank.py`: PASS（3級265、2級135、1級100、計500、構造ERROR 0、WARN 0）
- 既存の `scripts/check_*.py`: PASS
- `scripts/check_history_answers_v18.py`: PASS（静的チェック9項目）
- TypeScriptコンパイル、Expo Webビルド、ブラウザ／iOS／Android実機、オフライン動作: 未検証（依存モジュールがこの環境にない）
- 全問題は `draft_review`。公式過去問として検証済みではない。

## 制限とリスク
- 静的検査は実機の動作保証ではない。旧データの回答に不正な値が含まれる場合、削除せずエラー表示となる。復旧UIは未実装。
- 既存のAsyncStorageキー・保存スキーマ・問題IDを変更していない。
- Netlify本番サイトは変更していない。ブラウザのサイトデータを削除しないこと。

## Windows検証・手動公開
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
正常履歴と破損履歴を別々のテストデータで検証し、正常な学習記録が更新後も復元されることを確認した上で、生成された `dist` を既存Netlifyサイトへ手動デプロイする。
