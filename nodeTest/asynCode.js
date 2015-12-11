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

var EventEmitter = require('events').EventEmitter;
var event = new EventEmitter();

event.on('some_event', function(){
    console.log('some_event 事件触发');
});

setTimeout(function(){event.emit('some_event')},1000);




