var net = require('net');
var events = require('events');

var channel = new events.EventEmitter();
//var subScriptions = {};
var clients = {};


function joinChat (id, client){
    clients[id] = client;
}

channel.on('broadcast', function(client, data){
    console.log(client);
    for(var i=0;i<clients.length;i++){
        if(clients[i]!=client){
            clients[i].write(data);
        }
    }
});



net.createServer(function(client){
    var id = client.remoteAddress + ':' + client.remotePort;

    client.on('connect', function(){
        joinChat(id, client);
    });

    client.on('data', function(text){
        channel.emit('broadcast', client, text);
    });
}).listen(7777);