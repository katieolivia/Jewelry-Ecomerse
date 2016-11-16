angular.module('jewelry').controller('headbandCtrl', function($scope, mainService, $state) {

	$scope.addToCart = function(item) {

		mainService.createCart(item).then(function(response){
			$state.go('cart');

			return response;
		})
	}







})