var express = require('express');

var app = express();

// Set up the server
// process.env.PORT is related to deploying on heroku
var server = app.listen(process.env.PORT || 3000, listen);

// This call back just tells us that the server has started
function listen() {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Example app listening at http://' + host + ':' + port);
}

app.use(express.static('public')); 
var io = require('socket.io')(server);


io.sockets.on('connection', (socket) => {
	let connectedUsersCount = Object.keys(io.sockets.connected).length;
 
		socket.emit('connectedUsersCount',connectedUsersCount);
	 console.log(connectedUsersCount);
   // let oneUserLeft = connectedUsersCount - 1;
  // io.emit('connectedUsersCount', connectedUsersCount);
  // socket.on('disconnect', oneUserLeft);
}

);