var net = require('net');
var events = require('events');

var channel = new events.EventEmitter();
var subScriptions = {};
var clients = {};


function joinChat (id, client){
    clients[id] = client;

    subScriptions[id] = function(sender, data){
        if(id != sender){
            clients[id].write(data);
        }
    };

    channel.on('broadcast', subScriptions[id]);
}

channel.on('connect', function(id, client){
    console.log(id);
    joinChat(id, client);

    channel.on('leave',function(id){
        channel.removeListener('broadcast', subScriptions[id]);
    });
});


channel.on('shutdown', function(id){
    channel.emit('broadcast', id, id + "is shutdown");
    this.removeAllListeners('broadcast');
});

net.createServer(function(client){
    var id = client.remoteAddress + ':' + client.remotePort;

    channel.emit('connect' , id, client);

    client.on('data', function(text){
        text = text.toString();
        console.log(text);
        if(text == 'shutdown\n'){
            console.log('done');
            channel.emit('shutdown', id);
        }
        channel.emit('broadcast', id, text);
    });

    client.on('close', function(id){
        channel.emit('leave', id);
    });

}).listen(7777);