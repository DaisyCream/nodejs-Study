var fs = require('fs');
var events = require('events');
var util = require('util');

var AWatcher = function(watchDir, processDir){
    this.watchDir = watchDir;
    this.processDir = processDir;
};

util.inherits(AWatcher, events.EventEmitter);

AWatcher.prototype.aWatch = function(){
    var AWatcher = this;
    fs.readdir(this.processDir, function(err,files){
        if(err) throw err;
        for(var index in files){
            AWatcher.emit('aProcess',files[index]);
        }
    });
};

AWatcher.prototype.start = function(){
    this.aWatch();
};


var watchDir = './watch';
var processDir = './done';

var aWatcher = new AWatcher(watchDir, processDir);

aWatcher.on('aProcess', function(file){
    var watchFile = this.watchDir + '/' + file.toUpperCase();
    var processFile = this.processDir + '/' + file;

    fs.rename(processFile, watchFile, function(err){
        if(err) throw err;
    });
});

aWatcher.start();


