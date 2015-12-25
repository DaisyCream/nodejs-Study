var net = require('net');

var server = net.createServer(function(socket){
    socket.on('',function(data){
        socket.write(data);
    });
});

server.listen(8888);