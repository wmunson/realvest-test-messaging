var express = require('express');
var router = express.Router();
var messanger = require('../controllers/messController');



router.route('/group/:groupId')
	.get(function(req,res,groupId){
		console.log("We are in router message");
		console.log(groupId)
		messanger.get_messages(req,res,groupId);
	})

router.route("/post")
	.post(function(req,res){
		console.log("We are in router message POST SOME SHIT");
		// console.log(req);
		messanger.post_message(req,res);
	})

module.exports = router;

