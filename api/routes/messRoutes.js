module.exports = function(app){
	var messanger = require('../controllers/messController');
	console.log('routessssssss')

	app.route('/messages')
		.get(messanger.get_messages)
		.post(messanger.post_message);
	// app.route('message/post')
	// 	.post(messanger.post_message);
}