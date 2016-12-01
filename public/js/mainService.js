angular.module('jewelry').service('mainService', function($http) {

	this.getBracelets = function() {
		return $http({
			method: 'GET',
			url: '/api/bracelets'
		}).then(function(response) {
			return response.data;
			
		})
	},

	this.getNecklaces = function() {
		return $http({
			method: 'GET',
			url: '/api/necklaces'
		}).then(function(response) {
			return response.data;
			
		})
	},
	this.getHeadbands = function() {
		return $http({
			method: 'GET',
			url: '/api/headbands'
		}).then(function(response) {
			return response.data;
			
		})
	},

	this.createCart = function(item) {
		item.quantity = 1;
		var serviceVariable = this;
		return $http({
			method: 'POST',
			url: '/api/cart',
			data: item   //req.body
		}).then(function(response) {
			
			serviceVariable.cart = response;
		})
	},

	this.getCart = function() {
		return $http({
			method: 'GET',
			url: '/api/cart/display'
		}).then(function(response) {
			return response.data
		})


	},

	this.addOne = function(item) {
		return $http({
			method: 'PUT',
			url: '/api/cart/update',
			data: item
		}).then(function(response) {
			return response.data;
		})
	}, 

	this.takeOne = function(item) {
		return $http({
			method: 'POST',
			url:'/api/cart/delete',
			data: item
		}).then(function(response) {
			return response.data;
		})
	},

	this.createOrder = function(order) {
		return $http({
			method: 'POST',
			url:'/api/order',
			data: order
		}).then(function(response) {
			return response.data;
		})
	},

	this.getOrder = function() {
		return $http({
			method: 'GET',
			url: '/api/order/display'
		}).then(function(response) {
			return response.data
		})


	}


})
