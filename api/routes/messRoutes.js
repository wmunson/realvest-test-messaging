module.exports = function(app){
	var messanger = require('../controllers/messController');
	console.log('routessssssss')

	app.route('/messages/:groupId')
		.get(messanger.get_messages);

	app.route('message/post')
		.post(messanger.post_message);
}