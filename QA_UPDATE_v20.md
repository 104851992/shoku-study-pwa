# 食のまなびノート v1.0.10 品質改善

## 基準
v1.0.9 完全ソースと過去のQA記録を継承。FE Mate AI は変更なし。

## 変更
- `src/lib/backup.ts`: JSONバックアップのエンベロープ（識別子・バージョン・日時・2種類の保存ペイロード）を検証。保存済みのJSONが壊れている場合はダウンロードを中止し、誤って正常なバックアップとして扱わない。復元・書き込み処理は追加しない。
- `src/AppRoot.tsx`: ブラウザ側でダウンロードがブロックされる可能性があるため、完了を断定せずファイルの保存確認を案内。
- `scripts/check_backup_v20.py`: バックアップの静的安全チェックを追加。

## 検証
- 題庫: 3級265、2級135、1級100、合計500。構造 ERROR 0 / WARN 0。
- 既存の `scripts/check_*.py` と新しいバックアップ静的チェック: PASS。
- TypeScript、Expo Webビルド、Web実動作、iOS/Android実機、PWAオフライン: 未検証。npm依存パッケージがこの環境にない。
- 500問は `draft_review` のまま。公式過去問とは呼ばない。

## 制限と次の確認
- この検証はエンベロープとJSON構文のみ。内容の完全な意味的妥当性や将来の復元可能性は保証しない。
- 復元機能は未実装。バックアップの保存成功はブラウザで確認する必要がある。
- 保存キーと既存データ形式は不変。Netlify本番は未更新。

## Windows / Netlify
```powershell
npm.cmd install
python scripts/validate_bank.py
python scripts/check_backup_v20.py
npx.cmd tsc --noEmit
npx.cmd expo export --platform web
```
Webブラウザで通常の学習履歴・中断状態を作り、バックアップJSONをダウンロードして実ファイルを確認。既存データの読み込みと再開を検証した後、生成した `dist` を既存Netlifyサイトに手動デプロイする。
