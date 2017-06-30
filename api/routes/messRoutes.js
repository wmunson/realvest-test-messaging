var express = require('express');
var router = express.Router();
var messanger = require('../controllers/messController');

router.route('/group/:groupId')
	.get(function(req,res){
		console.log("We are in router message");
		console.log(messanger.get_messages);
		
		res.json(messanger.get_messages);
	})

router.route("/post")
	.post(function(req,res){
		console.log("We are in router message POST SOME SHIT");
		console.log(req);
		let blah = messanger.post_message();
		console.log(blah);
		res.json(blah);
	})

module.exports = router;
