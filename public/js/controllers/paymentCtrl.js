angular.module('jewelry').controller('paymentCtrl', function($scope, mainService, $state, order){
	$scope.order = order;

	$scope.cart = order.cart;


	// $scope.chargeLocation = '/charge/' + $scope.order._id;



})
