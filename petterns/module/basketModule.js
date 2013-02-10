var basketModule = (function(){
	
	//privates

	var basket = [];
	
	function somePrivateMethod(args) {
	
	}
	
	//ここから公開I/F
	return {
		
		addItem: function addItem(values) {
			basket.push(values);
		},
		
		getItemCount: function getItemCount() {
			return basket.length;
		},
		
		//private関数を呼び出してごにょごにょ‌
		doSomething: somePrivateMethod,
		
		getTotal: function getTotal() {
			var count = this.getItemCount(),
				total = 0;
				
			while (count--) {
				total += basket[count].price;
			}
		
			return total;
		}
	};
})();


//Usage

basketModule.addItem({
	item: 'book',
	price: 1000
});

basketModule.addItem({
	item: 'pen',
	price: 100
});

basketModule.getItemCount();

basketModule.getTotal();

