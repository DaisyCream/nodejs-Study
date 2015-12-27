/*****************inherits the eventEmitter**********************/
var fs = require('fs');
var events = require('events');
var util = require('util');

function Watcher(watchDir, processDir){
    this.watchDir = watchDir;
    this.processDir = processDir;
}

util.inherits(Watcher, events.EventEmitter);
//Watcher.prototype = new events.EventEmitter();

Watcher.prototype.watch = function(){
    var watcher = this;
    fs.readdir(this.watchDir,function(err, files){
        if(err) throw err;
        for(var index in files){
            watcher.emit('process',files[index]);
        }
    });
};


Watcher.prototype.start = function(){
    this.watch();
};


/*********************************************/
var watchDir = './watch';
var processDir = './done';

var watchers = new Watcher(watchDir, processDir);

watchers.on('process' ,function(file){
    var watchFile = this.watchDir + '/' + file;
    var processFile = this.processDir + '/' + file.toLowerCase();

    fs.rename(watchFile, processFile, function(err){
        if(err) throw err;
    });

});

watchers.start();
