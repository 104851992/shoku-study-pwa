# 食のまなびノート v1.0.3 — 保存データ破損時の保護

## 修正
`src/lib/progress.ts` の `loadProgress()` で、保存済み JSON が壊れている場合やルート構造が不正な場合、従来は `freshProgress()` を返していました。その結果、`AppRoot.tsx` の自動保存により既存の破損データが空の進捗で上書きされる恐れがありました。今回は例外を通知し、既存の読み込み失敗ガードにより自動保存を抑止します。元の AsyncStorage キー `@shoku_study/progress_v1` と正常なデータ形式は変更していません。

## 検証
- `python scripts/validate_bank.py`：構造のみ検証。全500問、エラー0、警告0。
- `python scripts/check_release_safety.py`：設定、読み込み失敗ガード、破損JSONの上書き防止を静的検証。
- `npx tsc --noEmit` / `npx expo export --platform web`：この実行環境では依存パッケージが未導入のため未実施。Windowsで要確認。
- 実機 Web/iOS/Android、PWA manifest/オフライン動作：未検証。

## 制約・注意
- この変更は破損データを自動修復しません。安全のため自動上書きを止めます。復旧にはバックアップと個別調査が必要です。
- 既存の問題500問は `draft_review` であり、公式過去問と称していません。今回は内容追加なし。
- Netlify 本番環境は変更していません。

## Windows リリース前の確認
`npm.cmd install` → `python scripts/validate_bank.py` → `python scripts/check_release_safety.py` → `npx.cmd tsc --noEmit` → `npx.cmd expo export --platform web`。ブラウザで保存・再読み込み・復習を試してから、現行 Netlify サイトに `dist` を手動デプロイしてください。更新前にブラウザのサイトデータを削除しないでください。
