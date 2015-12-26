

/*****************inherits the eventEmitter**********************/

var events = require('events');
var util = require('util');

/**
 * create a class named watcher
 * @param watchDir
 * @param processDir
 */

function watcher(watchDir, processDir){
    this.watchDir = watchDir; //listen the dir
    this.processDir = processDir;   //put in dir
}

util.inherits(watcher, events.EventEmitter);


/*****************event emitter**********************/

var fs = require('fs');
var watchDir = './watch';
var processDir = './done';

watcher.prototype.watch = function(){
   var watcher = this;
   fs.readdir(this.watchDir, function(err, files){
       if(err) throw err;
       for(var index in files){
           watcher.emit('process', files[index]);
       }
   });
};


watcher.prototype.start = function(){
    var watcher = this;
    fs.readFile(watchDir, function(){
        watcher.watch();
    });
};

/***************************************************/
var watchers = new watcher(watchDir, processDir);

watchers.on('process', function(file){
    var watchFile = this.watchDir + '/' + file;
    var processFile = this.processDir + '/' + file.toLowerCase();

    fs.rename(watchFile,processFile,function(err){
        if(err) throw err;
    });
});

watchers.start();


