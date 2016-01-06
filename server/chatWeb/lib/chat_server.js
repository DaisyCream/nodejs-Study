var socketIo = require('socket.io');
var io;
var events = require('events');
var chat = new events.EventEmitter();

chat.guestNumber = 0;
chat.guestName = {};
chat.sendMesTo = {};

exports.listen = function(server){
    var io = socketIo.listen(server);
    io.set('log level ', 1);

    io.socket.on('connect', function(socket){
        chat.guestNumber++;
        chat.emit('join', socket);
    });
};

chat.on('join', function(socket){
    var initName = 'guest' + this.guestNumber;
    this.guestName[socket.id] = initName;

    this.sendMesTo[socket.id] = function(sender, nameAds, msgAds, msg){
        if(sender != socket.id){
            nameAds.innerHTML = this.guestName[socket.id];
            msgAds.innerHTML = msg;
        }
    };

    this.on('sendMsg', this.sendMesTo[socket.id]);
});


chat.on('rename', function(socket, newName){
    this.guestName[socket.id] = newName;
});





