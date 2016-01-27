var socketIo = require('socket.io');
var io;
var events = require('events');
var app = require('express')();
var chatMsg = new events.EventEmitter();

chatMsg.guestNumber = 0;
chatMsg.guestName = {};
chatMsg.guestNameAll = [];
chatMsg.guestRoom = {};
chatMsg.room = [];
chatMsg.roomValue = 0;
chatMsg.roomSum = 0;

exports.listen = function(server){
    io = socketIo.listen(server);

    io.sockets.on('connect', function(socket){



    });





};

function init(){
    chatMsg.room[chatMsg.roomValue] = 'room1';
    chatMsg.roomValue++;
}

function join(socket){
    chatMsg.guestName[socket.id] =  'Guest' + chatMsg.guestNumber;
    chatMsg.guestRoom[socket.id] = chatMsg.room[0];
    chatMsg.guestNameAll[chatMsg.guestNumber] = chatMsg.guestName[socket.id];
}


function roomOperate(socket){

    socket.on('changeRoomName',function(roomName){
        var reRoom = chatMsg.guestRoom[socket.id];
        chatMsg.room[chatMsg.room.indexOf(reRoom)] = roomName;
        chatMsg.guestRoom[socket.id] = roomName;
        socket.emit('changeRoomNameUI',{
            "roomName": roomName
        });
        socket.emit('message',
            chatMsg.guestName[socket.id] + 'changeRoom' + reRoom + 'to' + roomName
        );

    });

    socket.on('changeRoom',function(roomName){
        chatMsg.guestRoom[socket.id] = roomName;
        socket.emit('changeRoomUI',{
            "roomName": roomName
        });
        socket.emit('message',
            chatMsg.guestName[socket.id] + 'changeRoom : ' + roomName
        )
    });
}

function nameOperate(socket){

    socket.on('changeGuestName',function(name){

    });
}



















