var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var expressSession = require('express-session');
var port = process.env.PORT || 9003;

var compression = require('compression');
var session = require('cookie-session');

var errors = require('./errors');
var logs = require('./logs');

var connectionString = process.env.HEROKU_POSTGRESQL_COBALT_URL;

module.exports = function Web(app) {
	var web = express();
  var errs = errors(bool(false);
	

	  // Express configuration
	web
	  .set('view engine', 'jade')
	  .set('view cache', true);

	  // Shared middleware
	web
	  .use(compression())
		.use(express.static(__dirname + '/public'));
		.use(bodyParser.json())
	  .use(bodyParser.urlencoded({ extended: true }))
	  .use(session({ secret: process.env.SESSION_SECRET, maxAge: ONE_WEEK }));


	  // Shared error handling
	  web
	    .use(errs.notFound)
	    .use(errs.log)
	    .use(errs.json)
	    .use(errs.html);

	  return web;
	};









// app.use(bodyParser.json());
// app.use(cors());
// app.use(express.static(__dirname + '/public'));
//
// var massive = require('massive');
// // var config = require('./config.js');
// var connectionString = process.env.HEROKU_POSTGRESQL_COBALT_URL;
//
// var stripe = require('stripe')("sk_test_UZkqBkIphlq8nrvz39Hnp4vG"); //secretkey
//
// app.get('/paysuccess', function(req, res){
// 	res.render('paysuccess', {
//
// 	});
// });
//
// app.post('/charge', function(req, res){
// 	var token = req.body.stripeToken;
// 	var chargeAmount = req.body.chargeAmount;
// 	var charge = stripe.charges.create({
// 		amount: chargeAmount,
// 		source: token
// 	}, function(err, charge){
// 		if(err & err.type === "StripeCardError"){
// 			console.log("Your card was declined");
// 		}
// 	});
// 	console.log("Your payment was successful");
// 	res.redirect('/paysuccess');
//
// });
//
// app.use(session({
// 	secret: process.env.SESSION_SECRET,
// 	saveUninitialized: true,
// 	resave: false,
// 	cookie: { secure: true }
// }));
//
//
// var  massiveInstance = massive.connectSync({connectionString : connectionString})
//
// app.set('db', massiveInstance);
// var controller = require('./controller');



// var corsOptions = {
//     origin: 'http://localhost:8989'
// };

// app.use(cors(corsOptions));


app.get('/api/bracelets', controller.getBracelets);
app.get('/api/necklaces', controller.getNecklaces);
app.get('/api/headbands', controller.getHeadbands);
app.post('/api/cart', controller.createCart);
app.put('/api/cart/update', controller.addOne);
app.get('/api/cart/display', controller.getCart);
app.post('/api/cart/delete', controller.takeOne);
app.post('/api/order', controller.createOrder);
app.get('/api/order/display', controller.getOrder);





web.listen(port, function(){
  console.log("Successfully listening on", port)
})
	console.log('server controller');
