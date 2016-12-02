angular.module('jewelry').service('mainService', function($https) {

	this.getBracelets = function() {
		return $https({
			method: 'GET',
			url: '/api/bracelets'
		}).then(function(response) {
			return response.data;
			
		})
	},

	this.getNecklaces = function() {
		return $https({
			method: 'GET',
			url: '/api/necklaces'
		}).then(function(response) {
			return response.data;

		})
	},
	this.getHeadbands = function() {
		return $https({
			method: 'GET',
			url: '/api/headbands'
		}).then(function(response) {
			return response.data;

		})
	},

	this.createCart = function(item) {
		item.quantity = 1;
		var serviceVariable = this;
		return $https({
			method: 'POST',
			url: '/api/cart',
			data: item   //req.body
		}).then(function(response) {

			serviceVariable.cart = response;
		})
	},

	this.getCart = function() {
		return $https({
			method: 'GET',
			url: '/api/cart/display'
		}).then(function(response) {
			return response.data
		})


	},

	this.addOne = function(item) {
		return $https({
			method: 'PUT',
			url: '/api/cart/update',
			data: item
		}).then(function(response) {
			return response.data;
		})
	},

	this.takeOne = function(item) {
		return $https({
			method: 'POST',
			url:'/api/cart/delete',
			data: item
		}).then(function(response) {
			return response.data;
		})
	},

	this.createOrder = function(order) {
		return $https({
			method: 'POST',
			url:'/api/order',
			data: order
		}).then(function(response) {
			return response.data;
		})
	},

	this.getOrder = function() {
		return $https({
			method: 'GET',
			url: '/api/order/display'
		}).then(function(response) {
			return response.data
		})


	}


})
