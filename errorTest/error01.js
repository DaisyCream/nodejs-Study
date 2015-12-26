var fs = require('fs');
var events = require('events');
var emitter = new events.EventEmitter();

fs.readFile('./error01.txt',function(err, data){
    if(err){
        return emitter.emit('error', err);
    }
    console.log(data.toString());
});

emitter.on('error', function(err){
    console.log(err);
});



