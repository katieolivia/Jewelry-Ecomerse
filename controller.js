var app = require('./server.js');
var db = app.get('db');

module.exports = {
	getBracelets: function(req, res) {
		var db = app.get('db');
		db.get_bracelets(function(err, bracelets){
			res.send(bracelets);
		})
	},
	getNecklaces: function(req, res) {
		var db = app.get('db');
		db.get_necklaces(function(err, necklaces){
			res.send(necklaces);
		})
	},
	getHeadbands: function(req, res) {
		var db = app.get('db');
		db.get_headbands(function(err, headbands){
			res.send(headbands);
		})
	},
	createCart: function(req, res) {
		if (!req.session.cart) {
			req.session.cart = [];
		}
		if (!req.session.cart.length) {
			req.session.cart.push(req.body);
		} 
		else {
			var index = inCart(req.body.id, req.session.cart);
			console.log(typeof index)
			if(typeof index === 'number') {
				console.log(req.session.cart[index]);
					req.session.cart[index].quantity++;
			}
			else {
				req.session.cart.push(req.body);
			}			
		}
		
		res.send(req.session.cart);
	},
	getCart: function(req, res) {

		res.send(req.session.cart);
	},
	addOne: function(req, res) {
		var cart = req.session.cart;
		for(var i = 0; i < cart.length; i++) {
			if( cart[i].id === req.body.id) {
				cart[i].quantity ++;
			}
		}
		res.send(cart);	
	},
	takeOne: function(req, res) {
		var cart = req.session.cart;
		for(var i = 0; i < cart.length; i++) {
			if(cart[i].id === req.body.id) {
				cart[i].quantity --;
				if(cart[i].quantity === 0) {
					cart.splice(i, i+1);
				};
			};
		};	
		res.send(cart);
	}
}

var inCart = function (id, arr) {
	console.log(arr)
		for(var i = 0; i < arr.length; i++) {
			console.log(id)
			if(arr[i].id == id) {
				console.log('here')
				return i;
			}
		}
		return false;
	}