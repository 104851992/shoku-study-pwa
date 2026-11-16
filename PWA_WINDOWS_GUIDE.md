# 食のまなびノート v1.0 Web/PWA 試作版

## Windows で起動
1. ZIPを展開し、package.json があるフォルダーで PowerShell を開く。
2. `npm install`
3. `npx.cmd expo-doctor`
4. `npx.cmd tsc --noEmit`
5. `npx.cmd expo start --web`（ブラウザで動作確認）
6. `npx.cmd expo export --platform web`（dist フォルダーを生成）
7. Netlify のサイト管理画面で dist をデプロイ。HTTPS の公開 URL で iPhone Safari から開く。
8. Safari の共有メニューから「ホーム画面に追加」。

## 注意
- 開発サーバーは友達向けの公開 URL ではありません。
- ブラウザのサイトデータを削除すると学習記録が失われる可能性があります。
- ログイン・クラウド同期・オフラインキャッシュ・バックアップは未実装です。
- Web版のネイティブ確認ダイアログを window.confirm に置換しました。
- 90分制限の本試験モードは未実装。既存の模試は時間制限なしの練習モードです。
- manifest の配信と iOS のホーム画面追加は実機未検証です。
