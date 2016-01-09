var http = require('http');
var io = require('socket.io');

var server = http.createServer(function(req, res){
    res.setHeader('Content-Type', 'text/plain');
    res.end('hi!');
});

var socket = io.listen(server);

socket.on('connect', function(){
    console.log('connect');
});


socket.emit('connect');

//var s =  io.connect();

server.listen(3000);