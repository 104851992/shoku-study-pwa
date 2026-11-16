# TestFlight / App Store 提出のためのチェックリスト（未完了）

この文書は公開許可を意味しません。2026年11月時点の Expo / Apple 公開ドキュメントを参考にしています。

## 事前に必要なもの

- [ ] Apple Developer Program 有効な加入（有料）
- [ ] Expo プロジェクトが適切なアカウントに紐付け済み
- [ ] iOS の固有 bundleIdentifier をアプリ設定に指定（例示のIDをコピーしない）
- [ ] 企業・団体の商標や資格名をアプリ名称・アイコンに利用する場合の表記確認
- [ ] 独自のアプリアイコン、ローディング画像、スクリーンショット
- [ ] 審査用連絡先、プライバシーポリシー HTTPS URL、サポートURL、ストア説明文
- [ ] データ取り扱いと App Privacy の回答が実装と一致
- [ ] 全問（500問）の専門家レビュー。食品表示・法規制など更新される分野の再検証
- [ ] 公式問題と誤認させないための非公式表記
- [ ] 実機で日本語レイアウト、背景復帰、記録保存・削除・履歴、すべての受験級を試験
- [ ] Expo TypeScript 本番チェックと EAS の production ビルド成功
- [ ] App Store Connect で TestFlight グループを作成し、内部テストを完了

## Windows から TestFlight（準備が整った後に実行）

Apple Developer 資格とアプリ構成が整った場合のみ、`shoku-study` のプロジェクト直下で実行：

```powershell
cd "$HOME\Documents\shoku-study"
npx.cmd eas-cli@latest login
npx.cmd eas-cli@latest build:configure
npx.cmd eas-cli@latest build --platform ios --profile production
npx.cmd eas-cli@latest submit --platform ios
```

Expo EAS のクラウド環境で iOS ビルド・提出ができます（Windows に Mac は不要）。必要な Apple 認証や証明書設定は画面の案内に従ってください。**この ZIP は既存 Expo プロジェクトに適用する上書きソース**のため、この ZIP 単体では EAS build できません。

Apple App Store Connect の TestFlight にビルドが表示されたら、内部テストグループを作り、テスターに招待を送ります。TestFlight へのアップロードは一般公開ではありません。一般公開には別途 App Review 提出が必要です。

出典：
- https://docs.expo.dev/submit/testflight/
- https://docs.expo.dev/submit/ios/
- https://docs.expo.dev/tutorial/eas/ios-production-build/
