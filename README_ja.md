# Nand - 演算子が1つしかないプログラミング言語

![Nand logo](nand-logo.svg)

[English](README.md) / [日本語](README_ja.md)

Norは、演算子として「nand」のみサポートする構造化プログラミング言語です。 ([Nor](https://github.com/code4fukui/Nor)をベースに開発されました。)

Norのソースファイル拡張子は「.nand」であり、MIMEタイプは「text/nand」となります。

- ブラウザで動作する実行環境 [Nand Playground](https://code4fukui.github.io/Nand/)
- HTMLへの組み込み例 [Nand on web](https://code4fukui.github.io/Nand/norweb.html)
```html
<script type="module" src="https://code4fukui.github.io/Nand/web.js"></script>
<script type="text/nand">
print 1 nand 0
</script>
```

- CLI(Command Line Interface): 足し算 [examples/add.nand](examples/add.nand)
```sh
deno -A https://code4fukui.github.io/Nand/cli.js examples/add.nand
```

- デバッグ用アプリ [nand2js](https://code4fukui.github.io/Nand/nand2js.html)

## 1. 変数と値

変数名は、英字で始まる英数字と「_」や日本語の並びです。ただし、予約語（nand, print, input, if, else, elseif, endif, loop, break, function, end, return）は変数名として使用できません。

- 例: n, sum, points, 得点

すべて大文字の英字による変数は実行中に変化しない値を表します。

- 例: A, BMI

配列の要素は、0から始まる要素の番号を添字で指定します。

- 例: array[3]

数値は10進法で表します。文字列は、文字の並びを「"」でくくって表します。

- 例: 100
- 例: 99.999
- 例: "見つかりました"
- 例: "It was found."

文字列に0から始まる要素番号を添字で指定すると、先頭が0とした文字を文字列として返します。もし、添字が文字列の範囲外の場合、空文字列「""」を返します。

```
s = "ABC"
print s[0],s[2] # A C と表示される
```

## 2. 表示文

「print」を使って、表示文で数値や文字列や変数の値を表示します。複数の値を表示する場合は「,」で区切って並べます。何も指定しないと1行空きます。

- 例: print n （nが15のとき「15」と表示されます。）
- 例: print "整いました" （「整いました」と表示されます。）
- 例: print n, "個見つかった" （nが3のとき、「3 個見つかった」と表示されます。）
- 例: print "(", x, ",", y, ")" （xが5、yが−1のとき、「( 5 , -1 )」と表示されます。）
- 例: print （1行空きます。）

## 3 代入文

代入文は変数に値を設定します。「=」の左辺に変数または添字付きの配列を、右辺に代入する値を書きます。

- 例: n = 3
- 例: points[4] = 100

「[」「]」と「,」を使用し、要素のの値をまとめて指定することで、置き換えることができます。

- 例: points = [87, 45, 72, 100]

複数の代入文を、「,」で区切りながら、横に並べることができます。この場合は、代入文は左から順に実行されます。

- 例: sum = n, point = n * (n + 1)

外部から入力された値を代入するために、次のように記述することができます。

- 例: x = input()
- 例: x = input("0から100までの好きな数を入力してください")

## 4. 演算

演算子は「nor」のみ使用可能です。

- 例: val = 0 nand 0 (valには1が代入されます。)
- 例: val = 0 nand 1 (valには0が代入されます。)
- 例: val = 1 nand 0 (valには0が代入されます。)
- 例: val = 1 nand 1 (valには0が代入されます。)

## 5. 条件分岐文

条件分岐文は、<条件>が1かどうかによって、実行する処理を切り替えます。

〈条件〉の値が1のときにある処理を実行し、〈条件〉の値が1ではないときに実行する処理がない場合は、次のように指定します。

```
if <条件>
  <処理>
endif
```

例:
```
if a
  x = x nand 1
  y = y nand 1
endif
```

〈条件〉の値が1のときにある処理を実行し、〈条件〉の値が1ではないときに別の処理を実行する場合は、次のように「else」を組み合わせて指定します。

```
if <条件>
  <処理1>
else
  <処理2>
endif
```

例
```
if a
  x = x nand 1
else
  x = x nand 0
endif
```

条件分岐の中で複数の条件で実行する処理を切り替えたい場合は、次のように「elseif」を使って条件を追加します。

```
if <条件1>
  <処理1>
elseif <条件2>
  <処理2>
else
  <処理3>
endif
```

例:
```
if a
  x = x nand 1
elseif b
  y = y nand 1
else
  y = y nand 0
endif
```

### 6. 繰返し文

繰返し文は、〈処理〉を繰返し実行します。

```
loop
  <処理>
next
```

繰返し文中で、「break」を使用すると繰返しを中断します。

```
loop
  <処理1>
  if <条件>
    break
  endif
  <処理2>
next
```

## 7. 機能

機能（関数）には、値を返すものと値を返さないものがあります。

```
function <機能名>( <引数列> )
  <処理>
end
```

機能が呼び出される時に引数として与えられる値は、引数列に記述した変数名で利用します。複数の引数を指定する場合は、「,」で区切ります。

機能を呼び出すときは、機能名に続き、「(」と「)」の間に引数を書きます。複数の引数を指定する場合は、「,」で区切ります。


引数列の変数や、機能内で新たに代入された変数は、その機能内でのみ使用できます。

関数外の変数は参照することはできますが、代入することはできません。代入は関数内でのみ使用できる同名の変数に代入され、関数外の変数は変わりません。

例: 値nの否定を表示する"print_not(n)"の定義例
```
function print_not(n)
  print n nand n
end
```

「return」を使用して値を返す機能を定義することができます。値を指定せずに「return」を使用すると値を返さず機能内の処理を終えることができます。

例: orの演算をする機能"or(a, b)"の定義例
```
function or(a, b)
  return not(a nand b)
end
```


## 8. コメント

- 1行内において「#」以降の記述は処理の対象となりません。

```
n = rnd() # 0以上1未満のランダムな小数をnに代入する
```

- 「#=」から「=#」までの記述は処理の対象となりません。「=#」がない場合はファイル終端までがコメントとなります。

```
#=
複数行に渡る
コメントの記述方法
=#
```

## reference

- [Wirth](https://github.com/code4fukui/Wirth)
- [Nor](https://github.com/code4fukui/Nor)
