var myModule = (function(){

	var counter = 0;
	
	return {
		
		increment: function() {
			return counter++;	
		},
		
		reset: function() {
			console.log('reset counter');
			counter = 0;
		}
	};

})();

//Usage
myModule.increment();
myModule.increment();
myModule.reset();