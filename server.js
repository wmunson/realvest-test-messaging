var express = require("express");
var app = express();
var port = process.env.PORT || 3000;
var mongo = require("mongoose");
var message = require("./api/models/messModel");
var bodyParser = require('body-parser');

mongo.Promise = global.Promise;
mongo.connect('mongodb://127.0.0.1/protodb');

app.use(bodyParser.urlencoded({ extend: true}));
app.use(bodyParser.json());

var routes = require('./api/routes/messRoutes');
routes(app);

app.listen(port);

console.log('running');