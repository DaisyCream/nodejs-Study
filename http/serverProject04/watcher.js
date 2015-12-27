/*****************inherits the eventEmitter**********************/
var fs = require('fs');
var events = require('events');
var util = require('util');

function watcher(watchDir, processDir){
    this.watchDir = watchDir;
    this.processDir = processDir;
}


util.inherits(watcher, events.EventEmitter);
//watcher.prototype = new events.EventEmitter();

watcher.prototype.watch = function(){
    var watcher = this;
    fs.readdir(this.watchDir,function(err, files){
        if(err) throw err;
        for(var index in files){
            watcher.emit('process',files[index]);
        }
    });
};

watcher.prototype.start = function(){
    var watcher = this;
    fs.watchFile(this.watchDir, function(){
        watcher.watch();
    });
};


/*********************************************/
var watchDir = './watch';
var processDir = './done';

var watchers = new watcher(watchDir, processDir);

watchers.on('process' ,function(file){
    var watchFile = this.watchDir + '/' + file;
    var processFile = this.processDir + '/' + file.toLowerCase();

    fs.rename(watchFile, processFile, function(err){
        if(err) throw err;
    });

});

