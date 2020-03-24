const Express = require('express')();
const http = require('http').Server(Express);
const SocketIO = require('socket.io')(http);

var position = {
    x: 200,
    y: 200
};

SocketIO.on("connection", socket => {
    socket.emit("position", position);
});

http.listen(3000, () => {
    console.log('Listening on 3000!');
});



