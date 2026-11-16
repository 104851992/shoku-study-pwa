# v1.0.18 — Service Worker キャッシュ対象の制限

## 変更
- v1.0.17 の Service Worker は同一オリジンの GET レスポンスを広く保存していたため、予期しないページや API 応答をキャッシュするおそれがありました。
- v1.0.18 では、ナビゲーションと静的アセットのみに対象を限定し、クエリ文字列、Authorization / Range ヘッダー、Set-Cookie、private Cache-Control を伴う応答を保存対象から除外しました。静的アセットは MIME タイプも確認します。
- キャッシュ名を v2 に変更し、旧キャッシュを有効化時に削除します。既存の AsyncStorage キー、学習記録、問題 ID、設問内容は変更していません。
- v27 静的チェックを新しい SHELL 定数に合わせて更新し、v28 の 12 項目を追加しました。

## 検証
- 500 問（3級265、2級135、1級100）、構造エラー0・警告0。
- 既存 `scripts/check_*.py` と新規 `scripts/check_offline_v28.py` の静的チェックは成功。`node --check public/sw.js` 成功。
- npm 依存モジュールがないため TypeScript / Expo Web build は未検証。ブラウザ実機でのオフライン再起動・iOS / Android・Netlify 配信も未検証。

## リスク・手動確認
- 静的ファイル MIME の配信設定が異なる場合、オンライン閲覧は可能でもキャッシュ対象にならないことがあります。ブラウザ DevTools の Cache Storage で確認してください。
- Service Worker の更新で旧キャッシュが削除されるため、更新直後はネットワーク接続下で全画面を再読み込みしてください。
- Windows: `npm.cmd install` → `python scripts/validate_bank.py` → `python scripts/check_offline_v28.py` → `npx.cmd tsc --noEmit` → `npx.cmd expo export --platform web`。`dist/sw.js` と manifest を確認し、ローカル HTTPS/localhost でオンライン訪問後にオフライン再起動、問題回答、保存・復帰を検証してから Netlify に手動デプロイしてください。
- 全500問は `draft_review`（オリジナルの未審査問題）。公式過去問ではありません。JSON のワンクリック復元は未実装。オンライン Netlify は更新していません。
