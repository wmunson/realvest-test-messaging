var express = require("express");
var app = express();
var port = process.env.PORT || 3000;
var mongo = require("mongoose");
var message = require("./api/models/messModel");
// var bodyParser = require('body-parser');

mongo.Promise = global.Promise;
mongo.connect('mongodb://127.0.0.1/protodb');

// app.use(bodyParser.urlencoded({ extend: true}));
// app.use(bodyParser.json());

var messageRoutes = require('./api/routes/messRoutes');

app.use('/message', messageRoutes)

app.listen(port, function(){
	console.log("We are running on port " + port);
});