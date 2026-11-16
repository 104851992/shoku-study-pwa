# v1.0.17 — Web PWA オフライン再訪の基盤

## 変更
- `public/sw.js` を追加。初回オンライン訪問時にトップページ・manifest・アイコンを保存し、その後読み込んだ同一オリジンの GET リソースをネットワーク優先でキャッシュします。通信失敗時のみキャッシュにフォールバックします。
- `src/AppRoot.tsx` に Web 専用 Service Worker 登録を追加。iOS/Android ネイティブには影響しません。
- 古い Service Worker キャッシュの削除、120 エントリ上限、外部 URL・JSON・Netlify 内部エンドポイントの除外を実装しました。学習記録の AsyncStorage キー、題庫 ID、データ構造は変更していません。
- `scripts/check_offline_v27.py` を追加しました。

## テスト
- 500問（3級265、2級135、1級100）、構造エラー0・警告0。全既存 Python チェックと新規8項目の静的チェックが成功。
- `node --check public/sw.js` 成功。
- node_modules がないため TypeScript・Expo Web ビルド未実施。実ブラウザのオフライン動作、Netlify デプロイ、iOS/Android 実機は未検証。

## 注意と手動確認
- Service Worker は HTTPS または localhost でのみ利用可能。初回オンライン読み込みが必要です。**全ての画面・資産のオフライン動作は未保証**。更新後の旧キャッシュ、ブラウザの容量制限、プライベートモード等の条件を実機で確認してください。
- Windows: `npm.cmd install` → `python scripts/validate_bank.py` → `python scripts/check_offline_v27.py` → `npx.cmd tsc --noEmit` → `npx.cmd expo export --platform web`。
- `dist/sw.js` と `dist/manifest.webmanifest` が存在するか確認し、localhost でオンライン起動後、DevTools Application → Service Workers / Cache Storage を確認。オフラインに切り替えて再読込し、答題・記録保存・復帰を確認してください。
- Netlify への `dist` のアップロードは手動で行うこと。オンラインサイトは更新していません。
- 500問は全て `draft_review`、公式過去問ではありません。バックアップの復元機能は未実装です。
