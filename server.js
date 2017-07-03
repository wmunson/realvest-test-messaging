var express = require("express");
var app = express();
var appPort = process.env.PORT || 3000;
var socketPort = 3700;
var mongo = require("mongoose");
var message = require("./api/models/messModel");
var pug = require('pug');
var path = require('path').join(__dirname);
var Message = mongo.model("Message");
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

// Static Path //////
app.use(express.static(path + '/static'));

// Routes setup ////////
app.get('/', function(req, res){
	res.render('page')
});


var messageRoutes = require('./api/routes/messRoutes.js');
app.use('/message', messageRoutes)


// Socket.IO setup /////
var io = require('socket.io').listen(app.listen(socketPort, function(){
	console.log('listening on *:' + socketPort);

	})
);

io.sockets.on('connection', function(socket){
	console.log('connected socket');
	socket.on('send', function(data){
		console.log(data);
		var new_message = new Message(data);
		console.log(new_message);
		new_message.save(function(err,message){
			if(err)
				return new Error('message not saved');
		})
		io.sockets.emit('message', data)
	})

})


// Server start ////////////
app.listen(appPort, function(){
	console.log("We are running on port " + appPort);
});