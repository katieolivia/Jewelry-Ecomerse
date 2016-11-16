angular.module('jewelry').controller('mainCtrl', function($scope, mainService){

	$scope.getBracelets = function() {
		mainService.getBracelets().then(function(response){
			$scope.bracelets = response;
			return response;
		})
	};

	$scope.getNecklaces = function() {
		mainService.getNecklaces().then(function(response){
			$scope.necklaces = response;
			return response;
		})
	};


	$scope.getHeadbands = function() {
		mainService.getHeadbands().then(function(response){
			$scope.headbands = response;
			return response;
		})
	};

	
})