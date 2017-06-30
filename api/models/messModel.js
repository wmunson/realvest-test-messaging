var mongo = require("mongoose");
var Schema = mongo.Schema;


var MessageSchema = new Schema({
	username: {
		type: String,
		Required: 'Please enter your name'
	},
	group:{
		type: Number 
	},
	date_time:{
		type: Date,
		default: Date.now
	},
	content:{
		type: String
	}

});

module.exports = mongo.model("Message", MessageSchema);