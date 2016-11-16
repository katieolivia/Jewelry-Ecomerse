angular.module('jewelry').controller('necklacesCtrl', function($scope, mainService, $state) {

		$scope.addToCart = function(item) {

		mainService.createCart(item).then(function(response){
			$state.go('cart');

			return response;
		})
	}





})