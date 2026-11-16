# v1.0.16 — バックアップ容量の整合性

## 修正
Web JSON エクスポートで、生成した UTF-8 Blob が 5 MiB を超える場合はダウンロードを開始せずエラーにします。従来、インポートを伴わない確認画面は 5 MiB を超えるファイルを拒否する一方、エクスポートは無制限でした。これによりアプリ自身が作成したバックアップを同アプリで確認できない事象を防ぎます。判定は文字数ではなく実際の Blob バイト数です。既存の AsyncStorage キー・保存形式・問題 ID・履歴は変更しません。

## 注意
5 MiB を超える学習データは現時点ではこの機能でバックアップできません。サイズ上限を撤廃するには、大容量ファイルのストリーミング検査・復元を別途設計する必要があります。復元機能は未実装。500問は draft_review であり公式過去問ではありません。

## 検証
`python scripts/validate_bank.py` と `python scripts/check_*.py` を実行。TypeScript・Expo Web ビルド・iOS/Android・オフライン動作は別途検証が必要です。

## Windows / Netlify
`npm.cmd install`、`npx.cmd tsc --noEmit`、`npx.cmd expo export --platform web` を実行し、Web 上でバックアップ生成・確認、学習進捗の保持、PWA のオフライン挙動を確認してください。検証後に dist を手動で Netlify にデプロイしてください。オンライン環境は更新していません。
