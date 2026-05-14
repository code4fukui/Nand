# Nand - 演算子が1つしかないプログラミング言語

Nandは、演算子として「nand」のみをサポートする構造化プログラミング言語です。[Nor](https://github.com/code4fukui/Nor)プロジェクトからフォークされました。

## デモ
- ブラウザで動作する実行環境: [Nand Playground](https://code4fukui.github.io/Nand/)
- HTMLへの組み込み例: [Nand on web](https://code4fukui.github.io/Nand/nandweb.html)

## 機能
- 単一の演算子「nand」
- 変数、配列、条件分岐、ループ、関数
- 計算用のコマンドラインインターフェース（CLI）
- デバッグツール: [nand2js](https://code4fukui.github.io/Nand/nand2js.html)

## 必要条件
追加の要件はありません。

## 使い方
Nandのソースファイル拡張子は「.nand」であり、MIMEタイプは「text/nand」となります。

CLIの使用例:
```sh
deno -A https://code4fukui.github.io/Nand/cli.js examples/add.nand
```

## ライセンス
MIT License — 詳細は [LICENSE](LICENSE) を参照してください。
