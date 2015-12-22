/**
 * Created by DaisyCream on 15/12/18.
 */
var socketio = require('socket.io');
//var socketioClient = require('socket.io-client');
var io;
var guestNumber = 1;
var nickNames = {};
var namesUsed = [];
var currentRoom = {};

exports.listen = function(server){
    io = socketio.listen(server);
    io.set('log level', 1);

    io.sockets.on('connection', function(socket){
        guestNumber = assignGuestName(socket, guestNumber, nickNames, namesUsed);

        joinRoom(socket, 'Lobby');

        handleMessageBroadcasting(socket, nickNames);
        handleNameChangeAttempts(socket, nickNames, namesUsed);
        handleRoomJoining(socket);

        socket.on('rooms',function(){
           socket.emit('rooms', io.sockets.manager.room);
        });

        handleClientDisconnection(socket, nickNames, namesUsed);
    });
};

function assignGuestName(socket, guestNumber, nickNames, nameUsed){
    var name = 'Guest' + guestNumber;
    nickNames[socket.id] = name;
    socket.emit('nameResult', {
        success: true,
        name: name
    });
    nameUsed.push(name);
    return guestNumber + 1;
}

function joinRoom(socket, room) {
    socket.join(room);
    currentRoom[socket.id] = room;
    socket.emit('joinResult', {room: room});
    socket.broadcast.to(room).emit('message', {
        text: nickNames[socket.id] + "has joined " + room + '.'
    });

    console.log(io.sockets);
    //var usersInRoom = io.sockets.client(room);

    if (usersInRoom.length > 1) {
        var usersInRoomSummary = 'User currently in ' + room + ': ';
        for (var index in usersInRoom) {
            var userSocketId = usersInRoom[index].id;
            if (userSocketId != socket.id) {
                if (index > 0) {
                    usersInRoomSummary += ', ';
                }
                usersInRoomSummary += nickNames[userSocketId];
            }
        }
    }
    usersInRoomSummary += '.';
    socket.emit('message', {text: usersInRoomSummary});

}

function handleNameChangeAttempts(socket, nickNames, namesUsed){
    socket.on('nameAttempts',  function(name){
        if(name.indexOf('Guest') == 0){
            socket.emit('nameResult', {
               success: false,
               message: 'Name cannot begin with "Guest".'
            });
        }else{
            if(namesUsed.indexOf(name) == -1){
                var previousName = nickNames[socket.id];
                var previousNameIndex = namesUsed.indexOf(previousName);
                namesUsed.push(name);
                nickNames[socket.id] = name;
                delete namesUsed[previousNameIndex];
                socket.emit('nameResult', {
                    success: true,
                    name: name
                });
                socket.broadcast.to(currentRoom[socket.id]).emit('message',{
                    text: previousName + 'is now know as ' + name + '.'
                });
            }else{
                socket.emit('nameResult',{
                    success: false,
                    massage: 'That name is already in use'
                });
            }
        }
    });
}


/***
 * user send the massage
 * @param socket
 */
function handleMessageBroadcasting(socket){
    socket.on('message', function(message){
        socket.broadcast.to(message).emit('message',{
            text: nickNames[socket.id] + ": " + message.text
        });
    });
}

function handleRoomJoining(socket){
    socket.on('join', function(room){
        socket.leave(currentRoom[socket.id]);
        joinRoom(socket, room.newRoom);
    });
}

function handleClientDisconnection(socket){
    socket.on('disconnect',function(){
        var nameIndex = namesUsed.indexOf(nickNames[socket.id]);
        delete namesUsed[nameIndex];
        delete nickNames[socket.id];
    });
}








