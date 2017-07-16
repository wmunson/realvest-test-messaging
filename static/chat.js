window.onload = function() {

	var messages = [];
	var socket = io.connect('http://127.0.0.1:3700');
	var field = document.querySelector(".field");
	var sendButton = document.querySelector('.send');
	var saveButton = document.querySelector('.save');
	var content = document.getElementById("content");
	var controls = document.querySelector('.controls');
	var nameSpace = document.querySelector('.namespace');
	

	socket.on('message', function(data){
		if(data.message){
			messages.push(data);
			var html = '';
			for(var i=0; i<messages.length; i++){
				html += '<b>' + (messages[i].username ? messages[i].username : 'Server') + ': </b>';
                html += messages[i].message + '<br />';
			}
			content.innerHTML = html;
			content.scrolltop = content.scrollHeight;
		} else{
			console.log('There is a problem:', data);
		}
	});


	// sendButton.on('click', function(){
	// 	var text = field.value;
	// 	socket.emit('send', {message: text});
	// });
	saveButton.onclick = function() {
        var name = document.querySelector('#name');
        console.log(name.value)
        // var html='';
        if(name.value == "") {
            alert("Please type your name!");
        } else {
            var username = name.value
            var html = '<b class="nameTag" data-name='+username+'>'+username+'</b>'
            nameSpace.innerHTML = html;
            name.style.display = 'none';
            saveButton.style.display = 'none';
        }
    };
    sendButton.onclick = function() {
        if(name.value == "") {
            alert("Please type your name!");
        } else {
            var text = field.value;
            var username = document.querySelector('.nameTag')
            var data = { message: text, username: username.dataset.name, group: 1}
            socket.emit('send', data);
			field.value = "";
			var postRoute = 'http://127.0.0.1:3700/message/post'
			var xhttp = new XMLHttpRequest();
			xhttp.onreadystatechange = function(){
				if(this.readyState == 4 && this.status == 200){
					console.log('message posted')
					
				}
			};
			xhttp.open("POST", postRoute, true);
			xhttp.setRequestHeader('Content-type','application/json');
			xhttp.send({response:data});
        }
    };

    


}