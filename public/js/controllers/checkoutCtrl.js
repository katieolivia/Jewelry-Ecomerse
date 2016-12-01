angular.module('jewelry').controller('checkoutCtrl', function($scope, mainService, $state, cart) {

	$scope.shipping = 4.99;
	
	$scope.cart = cart;
	calculatePriceInfo();

	// $scope.toggleSameAsShipping = function() {
	// 	if ($scope.user.billingAddress === $scope.user.shippingAddress) {
	// 		$scope.user.billingAddress = {};
	// 	} else {
	// 		$scope.user.billingAddress = $scope.user.shippingAddress
	// 	}
	// }



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

	};


	function addOrder(order) {
		mainService.createOrder(order).then(function(response){
			
		})
	}


	$scope.checkout = function(user) {
		var order = {};
		order.customer = user;
		order.prices = {
			tax: $scope.tax,
			subTotal: $scope.subTotal,
			total: $scope.total
		}
		order.cart = cart;
		addOrder(order);
		$state.go('payment');

		
	};




	
})

