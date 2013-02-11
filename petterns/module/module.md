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

例）

````
var myModule = (function(){

	var counter = 0;
	
	return {
		
		increment: function increment() {
			return counter++;	
		},
		
		reset: function reset() {
			console.log('reset counter');
			counter = 0;
		}
	};

})();

myModule.increment();

myModule.increment();

myModule.reset();
````

`counter`　変数はグローバルスコープから完全に隠蔽され、アクセスするためには公開された2つの関数を使用しなければならない。
また、これらの関数は効果的に名前付けされており、呼び出すためにはモジュール名（例えば、myModule）を先頭に付ける必要がある。

### 利点

* 真にprivateな関数を自由に持てる。
* 公開された関数に名前が付けられているため、エラーが発生した際のスタックが見やすい。
* （必要があれば）環境に応じて異なる関数を返すことが出来る。


## モジュールパターンのバリエーション

### インポートミックスイン

このバリエーションは、jQueryなどのグローバル変数をモジュール内にて別名でインポートしたい場合に利用する。

````
var myModule = (function(jQ, _){
    
    function privateMethod1(){
        jQuery('#hoge').html();
    }
    
    function privateMethod2(){
        console.log(_.min([100, 1, 1000]));
    }
    
    return {
        publicMethod: function(){
            privateMethod2();
        }
    };
    
})($, _);

//Usage
myModule.publicMethod();
````

### エクスポート

````
var myModule = (function(){
    
    var module = {},
        privateVal = 'private';
        
    function privateMethod(){
        
    }
    
    //公開I/F
    module.publicVal = 'public';
    module.publicMethod = function(){
        return privateVal;
    };
    
    //エクスポート
    return module;
    
})();

//Usage

myModule.publicVal;
myModule.publicMethod();
````


### jQuery

この例では、新規でモジュールが作成された場合に、 `coreModule` が新しく定義され、自動的に `init` 関数が `document.ready` にバインドされる。

モジュール間で共通のイベントを定義したい場合に使うと良い。

````
function coreModule(module) {
    
    $(function(module){
        if(module.init){
            module.init();
        }
    });
    
    return module;
}

//Usage
var myModule = coreModule(function(){
    
    return {
        init: function(){
            return 'myModule init';
        }  
    };
});

````
