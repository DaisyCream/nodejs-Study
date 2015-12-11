var student = {
    student1:{no:1,age:20},
    student2:{no:2,age:23},
    student3:{no:3,age:54}
};

var toString = Object.prototype.toString();


var isType = function(type){
    return function(obj){
        return toString.call(obj) =='[object '+type+']';
    };
};

var isString = isType("String");
//
//var async = function(callback){
//    process.nextTick(function(){
//        result = something;
//        if(error){
//            return callback(error);
//        }
//        callback(null,result);
//    });
//};


//
//var async = function(callback){
//    process.nextTick(function(){
//        result = something;
//        if(error){
//            return callback(error);
//        }
//        callback(null,result);
//    });
//
//};
//
//emitter.on("event1",function(){
//
//});
//
//emitter.setMaxListeners(0);
//


/*********************解决雪崩问题（多访问，大量并发）************************/
//var select = function(callback){//正常查询数据库
//    db.select("SOL",function(results){
//        callback(results);
//    })
//};

//var select = function(callbakc){//上锁的访问数据库
//    if(status === "ready"){
//        status = "pending";
//        db.select("SOL",function(result){
//            callbakc(result);
//        })
//    }
//};

//var proxy = new events.EventEmitter();//用事件循环的方式。
//var status = "reayd";
//var select = function(callback){
//    proxy.once("selected",callback);
//    if(status === "ready"){
//        status = "pending";
//        db.select("SQL",function(result){
//            callback(result);
//        })
//    }
//
//};

/*********************EventEmitter************************/
////引入event模块
//var events = require("events");
////创建eventEmitter对象
//var eventEmitter = new events.EventEmitter();
/*********************EventEmitter01************************/
//var EventEmitter = require('events').EventEmitter;
//var event = new EventEmitter();
//
//event.on('some_event', function(){
//    console.log('some_event 事件触发');
//});
//
//setTimeout(function(){
//    event.emit('some_event');
//    console.log('some_event 发送事件')},1000);

/*********************EventEmitter02************************/
//var events = require('events');
//var EventEmitter = events.EventEmitter;
//var emitter = new EventEmitter();
//
//function callback1(arg1,arg2){
//    console.log('listener1',arg1,arg2);
//}
//
//function callback2(arg1){
//    console.log('listener2',arg1);
//}
//
//emitter.on('someEvent',callback1);
//
//emitter.on('someEvent', callback2);
//
//emitter.removeListener('someEvent',callback1);
//
//emitter.emit('someEvent','arg1','arg2');
//
//console.log(count);


/*********************EventEmitter03************************/

//var event = require('events');
//var eventEmitter = new event.EventEmitter();
//
////listener1
//var listener1 = function(){
//    console.log('listener1 exe');
//};
//
//var listener2 = function(){
//    console.log('listener2 exe');
//};
//
//eventEmitter.addListener('connection',listener1);
//
//eventEmitter.on('connection',listener2);
//
//var eventListeners = require('events').EventEmitter.listenerCount(eventEmitter,'connection');
//console.log(eventListeners + ' connection event');
//
////do connection event
//eventEmitter.emit('connection');
//
////removeListener
//eventEmitter.removeListener('connection', listener1);
//console.log('listener1 can not be listener');
//
//
//eventEmitter.emit('connection');
//
//eventListeners = require('events').EventEmitter.listenerCount(eventEmitter,'connection');
//console.log(eventListeners + ' connection event');
//
//console.log('done');

/*********************EventEmitter04************************/
//var events = require('events');
//var emitter = new events.EventEmitter();
//
//emitter.on('some_event',function(){console.log('1')});
//
//emitter.on('some_event',function(){console.log('1')});
//
//
//var count = require('events').EventEmitter.listenerCount(emitter,'some_event');
//
//console.log(count);







