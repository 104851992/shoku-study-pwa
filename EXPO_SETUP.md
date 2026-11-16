# 食のまなびノート v0.8 Expo プロジェクト準備

このZIPには既存のApp.tsx、src、500問カタログ、検査記録と Expo 設定を含みます。**ビルド済みアプリではありません。**

## Windows PowerShell
1. ZIPを解凍し、フォルダ内で PowerShell を開く。
2. `node --version` と `npm --version` を確認。
3. `npm install` を実行（ネットワークが必要）。
4. `npx expo-doctor` と `npx tsc --noEmit` を実行し、エラーがあれば修正。
5. `npx expo start --clear` で Expo Go による動作確認。
6. `app.json` の `ios.bundleIdentifier` を自分の一意の識別子に変更。
7. `npx eas-cli login`、`npx eas-cli build:configure` を実行。
8. Apple Developer Program 有効化後、`npx eas-cli build --platform ios --profile production`。
9. 成功後、`npx eas-cli submit --platform ios --latest`。
10. App Store Connect > TestFlight でビルド処理完了を待ち、内部テスターを追加。

## 未完了
- npm依存関係のインストール、TypeScript型検査、Expo Doctor、EAS Build はこの作成環境では未実行。
- iPhone実機動作、90分タイマー、全500問の内容監修、App Store審査要件は未完了。
- `com.example.shokumanabi` は仮の識別子。公開前に必ず変更する。
- 正式なアプリアイコン、スプラッシュ画像、プライバシーポリシー等は未整備。
