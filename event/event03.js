/*for the event02 event*/

/**
 * promise()
 * .then(obj.api1)
 * .then(obj.api2)
 * .then(obj.api3)
 * .then(obj.api4)
 * .then(function(value4){
 *     callback(value4);
 * },function(error){
 *
 * })
 * .done();
 * **/



var Promise = function(){
    this.queue = [];
    this.isPromise = true;
};

Promise.prototype.then = function(fulfilledHandler,errorHandler,progressHandler){
    var handler = {};
    if(typeof fulfilledHandler === 'function'){
        handler.fulfilled = fulfilledHandler;
    }

    if(typeof errorHandler === 'function'){
        handler.error = errorHandler;
    }

    this.queue.push(handler);
    return this;
};


var Deferred = function(){
    this.Promise = new Promise();
};

Deferred.prototype.resolve = function(obj){
    var promise = this.Promise;
    var handler;
    while((handler = promise.queue.shift())){
        var ret = handler.fulfilled(obj);
        if(ret && ret.isPromise){
            ret.queue = promise.queue;
            this.promise = ret;
            return;
        }
    }

};


Deferred.prototype.reject = function(obj){
    var promise = this.Promise;
    var handler;
    while((handler = promise.queue.shift())){
        var ret = handler.error(obj);
        if(ret && ret.isPromise){
            ret.queue = promise.queue;
            this.promise = ret;
            return;
        }
    }
};

Deferred.prototype.callback = function(){
    var that = this;
    return function(err, file){
        if(err){
            return that.reject(err);
        }
        that.resolve(file);
    }
};

var readFile1 = function(file,encoding){
    var deferred = new Deferred();
    fs.readFile(file,encoding,deferred.callback());
    return deferred.promise;
};

var readFile2 = function(file,encoding){
    var deferred = new Deferred();
    fs.readFile(file,encoding,deferred.callback());
    return deferred.promise;
};

readFile1('file1.txt','utf8').then(function(file1){
    return readFile2(file1.trim(),'utf8');
}).then(function(file2){
    console.log(file2);
});

















