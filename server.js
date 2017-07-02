var express = require("express");
var app = express();
var port = process.env.PORT || 3000;
var mongo = require("mongoose");
var message = require("./api/models/messModel");
var pug = require('pug');
var path = require('path').join(__dirname);
// var bodyParser = require('body-parser');


//views setup//////////
app.set('views', path + '/templates');
app.set('view engine', 'pug')
app.engine('pug', pug.__express);

//Datebase setup //////////
mongo.Promise = global.Promise;
mongo.connect('mongodb://127.0.0.1/protodb');

// app.use(bodyParser.urlencoded({ extend: true}));
// app.use(bodyParser.json());

// Routes setup ////////
var messageRoutes = require('./api/routes/messRoutes.js');
app.use('/message', messageRoutes)


// Server start ////////////
app.listen(port, function(){
	console.log("We are running on port " + port);
});