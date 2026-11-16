# 食のまなびノート v0.6 — Windows / iPhone テスト版

**FE Mate AI とは別プロジェクトです。`FE-Mate-AI` フォルダに上書きしないでください。**

## v0.6 の主な改善

- 学習途中のセッションを別キーに保存し、アプリ再起動後にホーム画面の「続きから再開する」から復帰できます。現在の回答済み状態も復元します。
- 「学習を終了」時は途中セッションを破棄します（解答済みの統計は残ります）。
- **未検証：実機の強制終了直後の保存完了、アプリの完全な型検査、EAS iOS ビルド。**


- 模試終了後の「6/10問 正解」など、淡色背景の上で白文字になっていた結果表示を修正。判読しやすい濃い文字色へ変更。
- 終了直後に「間違えた問題を確認」を押すと、今回の誤答・本人が選んだ選択肢・正解・解説を表示。1級記述式も自己評価・自分の解答・解答例を表示。
- 解答ごとの記録を端末内に保存。学習記録から直近5回の完了セッションを再表示できます。旧版 `@shoku_study/progress_v1` データを引き継ぎます（新規フィールドは自動補完）。
- 問題500問（3級265問、2級135問、1級100問／うち記述13問）。すべてオリジナル、公開前レビュー対象。**公式過去問は収録していません**。
- 本試験の**問題数**に準じた長めの模試を各級で選択可能。3級45問、2級50問、1級は選択42問＋記述13問（自己採点）。**試作版の模試は時間制限なし**で、公式試験の再現ではありません。実際の時間制限は公式案内を参照してください。「60分」は開発チェックの周期であり、模試時間ではありません。
- ボタン文字などの色のコントラストを改善。

## Windows で既存の shoku-study プロジェクトを更新

1. `Shoku_Study_v06_Windows.zip` をダウンロードします。
2. PowerShell を開いて次のコマンドを1行ずつ実行します。

```powershell
$archive = "$HOME\Downloads\Shoku_Study_v06_Windows.zip"
$extract = "$HOME\Downloads\Shoku_Study_v06_extract"
Expand-Archive -Path $archive -DestinationPath $extract -Force
cd "$HOME\Documents\shoku-study"

# 別フォルダに旧コードのバックアップを作る
$backup = "$HOME\Documents\shoku-study_source_backup_v05"
New-Item -ItemType Directory -Force $backup | Out-Null
Copy-Item .\App.tsx "$backup\App.tsx" -Force
Copy-Item .\src "$backup\src" -Recurse -Force

# v0.6 を反映
Copy-Item "$extract\Shoku_Study_v06\App.tsx" .\App.tsx -Force
Copy-Item "$extract\Shoku_Study_v06\src\*" .\src\ -Recurse -Force

npx.cmd expo install @react-native-async-storage/async-storage
npx.cmd expo start --tunnel --clear
```

3. iPhone の Expo Go で QR コードを開きます。旧サーバーが起動中なら先に `Ctrl + C` で停止してください。

## 実機テスト（この順序を推奨）

1. 3級10問ミニ模試で、わざと2～3問不正解にして終了。結果表示が読めるか確認。
2. 「間違えた問題を確認」→ 自分の解答・正解・解説が一致するか確認。
3. 学習記録画面から直近の模試を開き、誤答を再表示できるか確認。
4. Expo Go を完全に終了・再起動。履歴が残るか確認。
5. 2級・1級を切り替え、五肢／六肢選択、1級記述の自己評価を確認。
6. 長い設問、アクセシビリティの拡大文字、小さい iPhone 画面を確認。

## 注意

これは**公開候補に向けたローカル試作版**で、App Store 公開可能と判定した版ではありません。TypeScript の構文検査と500問の構造検査を実施済みですが、Expo の本番 iOS バイナリ生成・実機動作・専門家による全問監修・法的／商標／個人情報の確認は未完了です。未確認事項は `QA_REPORT.md` と `TESTFLIGHT_CHECKLIST.md` を参照してください。

すべての学習データは端末内保存です。アカウント・クラウド同期・有料課金は未搭載です。
