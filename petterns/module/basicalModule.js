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