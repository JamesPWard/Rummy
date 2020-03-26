const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);

const fs = require('fs');

//Server variables
let port = 3000;

//Game variables
let gameList = [];
let deckDefault = [
    "2C", "2D", "2H", "2S",
    "3C", "3D", "3H", "3S",
    "4C", "4D", "4H", "4S",
    "5C", "5D", "5H", "5S",
    "6C", "6D", "6H", "6S",
    "7C", "7D", "7H", "7S",
    "8C", "8D", "8H", "8S",
    "9C", "9D", "9H", "9S",
    "AC", "AD", "AH", "AS",
    "JC", "JD", "JH", "JS",
    "KC", "KD", "KH", "KS",
    "QC", "QD", "QH", "QS",
    "TC", "TD", "TH", "TS"
];

function generateDeck(index){
    //Include all cards into game deck and shuffle
    gameList[index].deck.remaining = deckDefault;

    //Get player 1 and 2 cards
    gameList[index].deck.p1 = gameList[index].deck.remaining.splice(0, 7);
    gameList[index].deck.p2 = gameList[index].deck.remaining.splice(0, 7);

    console.log(gameList[index]);
}

function shuffle(array){
    array.sort(() => Math.random() - 0.5);
}

app.get('/', function(req, res){
    res.send('<h1>Hello world</h1>');
});

io.on('connection', (socket) => {

    //Matchmaking
    socket.on('requestGame', function(data){

        //Generate ID
        let gameId = Date.now();
        let session = {
            id: gameId,
            players: [],
            deck: {
                remaining: [],
                discarded: [],
                p1: [],
                p2: [],
            }
        };

        //Create game session
        gameList.push(session);

        //Start game session
        io.emit('waitForOponent', session.id);

        socket.join(session.id);
        socket.to(session.id).emit('message', "in room " + session.id);

        console.log(gameList);
    });

    socket.on('joinGame', (settings) => {

        //Find game with id and update p2 name
        let gameIndex = gameList.findIndex(x => x.id === parseInt(settings.gameId));

        console.log(settings.username);

        //Check room is full
        if(gameList[gameIndex].players.length >= 2){
            console.log('TOO MANY PLAYERS! Cannot join...');

        }else if(gameList[gameIndex].players.length < 1){
            //No players
            socket.join(settings.gameId);
            gameList[gameIndex].players.push(settings.username);
            console.log('Waiting for one more player...');

        }else if(gameList[gameIndex].players.length >= 1){
            //One player waiting
            socket.join(settings.gameId);
            gameList[gameIndex].players.push(settings.username);
            console.log('PLAYER 2 JOINED! Start game...');

            generateDeck(gameIndex);

            io.in(settings.gameId).emit('beginGame', gameList[gameIndex]);
        }

        console.log(gameList[gameIndex]);

        //Connect to room

    });

    // socket.on('startGame', )


    console.log('User connected');
});

http.listen(port, () => {
    console.log('Listening on 3000!');
});