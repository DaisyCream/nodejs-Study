var EventEmitter = require('events').EventEmitter;
//
//var util = require('util');
//
//
//var Promise = function(){
//    EventEmitter.call(this);
//};
//
//util.inherits(Promise,EventEmitter);
//
//Promise.prototype.then = function(fulfilledHandler,errorHandler,progressHandler){
//    if(typeof fulfilledHandler === 'function'){
//        this.once('success', fulfilledHandler);
//    }
//    if(typeof errorHandler === 'function'){
//        this.once('error', errorHandler);
//    }
//    if(typeof progressHandler === 'function'){
//        this.on('progress',progressHandler);
//    }
//};
//
//
//var Deferred = function(){
//    this.state = 'unfulfilled';
//    this.promise = new Promise();
//};
//
//Deferred.prototype.resolve = function(obj){
//    this.state = 'fulfilled';
//    this.promise.emit("success",obj);
//};
//
//Deferred.prototype.reject = function(err){
//    this.state = 'failed';
//    this.promise.emit('error', err);
//};
//
//Deferred.prototype.progress = function(data){
//    this.promise.emit('progress', data);
//};



