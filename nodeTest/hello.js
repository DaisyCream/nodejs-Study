var EventEmitter = require('events').EventEmitter;

var Promise = function(){
    EventEmitter.call(this);
};
util.inherits(Promise,EventEmitter);


Promise.prototype.then = function(fulfilledHandler,errorHandler,progressHandler){
    if(typeof fulfilledHandler === 'function'){
        this.once('success', fulfilledHandler);
    }
    if(typeof errorHandler === 'function'){
        this.once('error', errorHandler);
    }
    if(typeof progressHandler === 'function'){
        this.on('progress',progressHandler);
    }
};

