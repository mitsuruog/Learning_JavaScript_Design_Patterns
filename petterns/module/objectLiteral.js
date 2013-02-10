var myObject = {
	
	someConfig: {
		value: 'default'
	},
	
	someProparty: 'hoge',
	
	someFunction: function () {
		return 'fuga';
	},
	
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