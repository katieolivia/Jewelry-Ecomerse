angular.module('jewelry').controller('checkoutCtrl', function($scope, mainService, $state, cart) {

	$scope.shipping = 4.99;
	
	$scope.cart = cart;
	calculatePriceInfo();




function calcSubTotal() { 
		var total = 0;
		for(var i = 0; i < $scope.cart.length; i++) {
			total += $scope.cart[i].price * $scope.cart[i].quantity;
		}
		$scope.subTotal = Math.round(total* 100) / 100;
	};

	function calcTax() {
		var tax = $scope.subTotal * 0.0685;
		$scope.tax =  Math.round(tax* 100) / 100;
	};


	function calcTotal() {
		total = $scope.subTotal + $scope.tax + $scope.shipping;
		$scope.total = Math.round(total* 100) / 100;
	};

	function calculatePriceInfo() {
		calcSubTotal();
		calcTax();
		calcTotal();

	}



	function checkout() {
		console.log(222222222, cart);
	}

	
})

