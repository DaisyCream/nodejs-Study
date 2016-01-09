var socketIo = require('socket.io');
var io;
var events = require('events');
var app = require('express')();
var chatMsg = new events.EventEmitter();

chatMsg.guestNumber = 0;
chatMsg.guestName = {};
chatMsg.sendMesTo = {};

exports.listen = function(server){
    io = socketIo.listen(server);
    io.set('log level', 1);

    io.sockets.on('connect', function(socket){
        console.log(socket.id);
        chatMsg.guestName[socket.id] = 'Guest' + chatMsg.guestNumber;
        chatMsg.guestNumber++;
    });


};



