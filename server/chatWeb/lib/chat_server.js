var socketIo = require('socket.io');
var io;
var events = require('events');
var chatMsg = new events.EventEmitter();

chatMsg.guestNumber = 0;
chatMsg.guestName = {};
chatMsg.sendMesTo = {};

exports.listen = function(server){
    io = socketIo.listen(server);


    //console.log(io.sockets);
    io.sockets.on('connect', function(socket){
        console.log(socket.id);
        chatMsg.guestName[socket.id] = 'Guest' + chatMsg.guestNumber;
        chatMsg.guestNumber++;
    });


    



};



