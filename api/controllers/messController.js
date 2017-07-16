var mongo = require("mongoose");
var Message = mongo.model("Message");

exports.get_messages = function(req, res, id){
	console.log(id)
	Message.find({'group':{$eq: parseInt(id)}}, function(err, messageList){
		if(err)
			console.log(err);
			res.send(err);
		res.json(messageList);
	});
};

exports.post_message = function(req, res){
	console.log('post route')
	console.log(req.content)
	var new_message = new Message(req.body);
	new_message.save(function(err, message){
		if (err)
			console.log('shiiiit'+err)
			res.send(err);
		// res.json(message)
		console.log('post no error')
		return res;
	});
};
