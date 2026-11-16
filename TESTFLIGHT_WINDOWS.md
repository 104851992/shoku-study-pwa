# TestFlight 手順（Windows）

このZIPは**既存のExpoプロジェクトに上書きするソース差分一式**です。package.json、app.json、eas.json、ロックファイルを含む完全なビルド可能プロジェクトではありません。

1. 既存の `shoku-study` プロジェクトをバックアップ。ZIPの `App.tsx` と `src/` をプロジェクトにコピー。FE Mate AI にはコピーしない。
2. プロジェクトのルート（package.jsonがある場所）で `npm install`、`npx expo install @react-native-async-storage/async-storage`。
3. `npx expo-doctor`、`npx expo start --clear` で確認。
4. `app.json` の `expo.name` を「食のまなびノート」、`expo.slug` を一意の英数字、`expo.ios.bundleIdentifier` を自分が所有する一意の逆ドメインIDに設定。
5. Apple Developer Program（有料）とExpoアカウントを準備。`npx eas-cli login`、`npx eas-cli build:configure`。
6. `eas.json` の `build.production.distribution` が `store` であることを確認。`npx eas-cli build --platform ios --profile production`。
7. 成功後 `npx eas-cli submit --platform ios --latest`。Appleの署名とApp Store Connect連携の画面案内に従う。
8. https://appstoreconnect.apple.com/ の対象アプリ > TestFlight > 内部テストグループにビルドを追加し、招待メールをiPhoneで開く。外部テストはAppleのベータ審査が必要。

**未実施**: 完全なExpo型検査、EASビルド、Appleアップロード、iPhone実機検証。現在の長い模試は時間制限なし。正式な90分モードは未実装。
