var net = require('net');

//console.log("server running at 127.0.0.1:8888/");
var server = net.createServer(function(socket){
    socket.on('data', function(data){
        socket.write(data);
    });
});

server.listen(8888);
console.log("server running at 127.0.0.1:8888/");