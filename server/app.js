const Express = require('express')();
const http = require('http').Server(Express);
const SocketIO = require('socket.io')(http);

SocketIO.on("connection", socket => {
    socket.emit("position", position);
});

http.listen(3000, () => {
    console.log('Listening on 3000!');
});

//Game vars 
const game = {
    p1: {
        deck: [],
    },
    p2: {
        deck: [],
    },
    context: {

    },
};