/*
 * Moduleのスニペット
 */
var namespace = (function() {
	
	var privateVar, privateMethod;
	
	privateVar = 0;
	
	privateMethod = function privateMethod(){
	
	};
	
	//ここから公開I/F‌
	return {‌
	
		publicVar: 'public',
		
		publicMethod: function publicMethod() {
		
			privateVar++;
		
			privateMethod();
	
		}
	
	};

})();