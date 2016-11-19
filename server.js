var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var session = require('express-session');


var app = module.exports = express();
app.use(bodyParser.json());
app.use(cors());
app.use(express.static(__dirname + '/public'));

var massive = require('massive');
var config = require('./config.js');
var connectionString = "postgres://postgres:" + config.password +"@localhost/JewelryProject";


app.use(session({
	secret: config.sessionSecret,
	saveUninitialized: false,
	resave: false
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
app.post('/api/order', controller.addOrder);




var port = config.port;
app.listen(port, function(){
  console.log("Successfully listening on", port)
})
	console.log('server controller');