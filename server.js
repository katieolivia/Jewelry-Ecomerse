var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var session = require('express-session');
cookieParser = require('cookie-parser');
var port = process.env.PORT || 9003;


var app = module.exports = express();
app.use(bodyParser.json());
app.use(cors());
app.use(express.static(__dirname + '/public'));



var massive = require('massive');
// var config = require('./config.js');
var connectionString = process.env.HEROKU_POSTGRESQL_COBALT_URL;

var stripe = require('stripe')("sk_test_UZkqBkIphlq8nrvz39Hnp4vG"); //secretkey

app.get('/paysuccess', function(req, res){
	res.render('paysuccess', {

	});
});

app.post('/charge', function(req, res){
	var token = req.body.stripeToken;
	var chargeAmount = req.body.chargeAmount;
	var charge = stripe.charges.create({
		amount: chargeAmount,
		source: token
	}, function(err, charge){
		if(err & err.type === "StripeCardError"){
			console.log("Your card was declined");
		}
	});
	console.log("Your payment was successful");
	res.redirect('/paysuccess');

});

app.use(session({
	secret: process.env.SESSION_SECRET,
	saveUninitialized: true,
	resave: false,
	cookie: { secure: true }
}));


var  massiveInstance = massive.connectSync({connectionString : connectionString})

app.set('db', massiveInstance);
var controller = require('./controller');



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





app.listen(port, function(){
  console.log("Successfully listening on", port)
})
	console.log('server controller');
