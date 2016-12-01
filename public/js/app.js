angular.module('jewelry', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider){
	$stateProvider
		.state('home', {
			url: '/',
			templateUrl: '../views/home.html',
			controller: 'mainCtrl'
 
		})
		.state('bracelets', {
			url: '/bracelets',
			templateUrl: '../views/bracelets.html',
			controller: 'braceletCtrl'

		})
		.state('necklaces', {
			url: '/necklaces',
			templateUrl: '../views/necklaces.html',
			controller: 'necklacesCtrl'
		})
		.state('headbands', {
			url: '/headbands',
			templateUrl: '../views/headbands.html',
			controller: 'headbandCtrl'
		})
		.state('cart', {
			url: '/cart',
			templateUrl: '../views/cart.html',
			controller: 'cartCtrl',
			resolve: {
				cart: function (mainService) {
					return mainService.getCart();
				}
			}
		})
		.state('checkout', {
			url: '/checkout',
			templateUrl: '../views/checkout.html',
			controller: 'checkoutCtrl',
			resolve: {
				cart: function (mainService) {
					return mainService.getCart();
				}
			}
		})
		.state('orderConfirmation', {
			url: '/orderConfirmation',
			templateUrl: '../views/orderConfirmation.html',
			controller: 'orderConfirmCtrl'
		})
		.state('payment', {
			url: '/payment',
			templateUrl: '../views/payment.html',
			controller: 'paymentCtrl',
			resolve: {
				order: function(mainService) {
					return mainService.getOrder();
				}
			}
		})



		$urlRouterProvider.otherwise('/');
})
