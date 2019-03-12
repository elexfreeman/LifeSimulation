
const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);

import {FishBrainClass} from './FishBrain';



app.get('/', function (req, res) {
    res.json({});
});

io.on('connection', function (socket) {
    let FishBrain = new FishBrainClass();
    socket.on('fish message', function (msg) {
        FishBrain.echo(msg);
    });
});

http.listen(3000, function () {
    console.log('listening on *:3000');
});