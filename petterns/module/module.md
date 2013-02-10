# モジュールパターン

モジュールはアプリケーションを構築するための最小の単位であり、それぞれは分離され整理されている必要がある。

## オブジェクトの記法

オブジェクトは `new` を使用してインスタンス化しない。`{}` で囲った中にkey/valueペアで記述していく。


外から新しいメンバを追加する場合、`myObject.newMenber = 'hoehoe'` とする。

この記法は、オブジェクトのカプセル化と分離を促すことが特徴だ。

例）

````
var myObject = {
	
	someConfig: {
		value: 'default'
	},
	
	someProparty: 'hoge',
	
	someFunction: function () {
		return 'fuga';
	},

	//デフォルトのConfigを上書き
	overrideConfig: function(newConfig){
		if(typeof newConfig === 'Object') {
			this.someConfig = newConfig;
		}
	}
};

‌myObject.someProprety;

myObject.someFunction();

myObject.overrideConfig({
	value: 'new default'
});

````

## モジュールパターン

モジュールパターンは伝統的なクラスをカプセル化する手法。

ひとつのオブジェクトの中にPrivateとPublicな関数と変数を含めることが出来き、グローバルスコープから一部分を隠蔽できることが特徴。
その結果、他のスクリプトとの名前衝突の可能性を低減させることができる。

### 隠蔽

隠蔽は俗に言うクロージャを使用して行われる。このパターンではPublicなAPIのみ `return` で返し、それ以外はクロージャの中でPrivateに保つ。

これにより、公開するインターフェースを保ちながら、ロジックを変更できる優れたソリューションだ。

なお、JavascriptにはPrivateという修飾子がないので、真の意味で `隠蔽` という概念は正しくない。だた、変数はPrivateだろうが、PublicだろうがFunctionスコープという概念の元に生成される。モジュールパターンでは、クロージャのおかげで、宣言された関数や変数は内部だけで利用可能となるが、`return` されたものはどこでも利用可能。
