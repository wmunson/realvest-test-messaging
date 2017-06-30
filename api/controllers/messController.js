var mongo = require("mongoose");
var Message = mongo.model("Message");

exports.get_messages = function(req, res, id){
	Message.find({'group':{$eq: id}}, function(err, messageList){
		if(err)
			console.log(err);
			res.send(err);
		res.json(messageList);
	});
};

exports.post_message = function(req, res){
	console.log('post route')
	console.log(req)
	var new_message = new Message(req.body);
	new_message.save(function(err, message){
		if (err)
			console.log('shiiiit'+err)
			res.send(err);
		// res.json(message)
		return "12345";
	});
};