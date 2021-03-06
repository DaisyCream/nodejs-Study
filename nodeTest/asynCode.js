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
//emitter.on("event",function(){
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
//
//var select = function(callbakc){//上锁的访问数据库
//    if(status === "ready"){
//        status = "pending";
//        db.select("SOL",function(result){
//            callbakc(result);
//        })
//    }
//};
//
//
//var proxy = new require('event').EventEmitter();//时间循环方式
//var status = "ready";
//var select = function(callback){
//    proxy.on('selected',callback);
//    if(status=='ready'){
//        status = 'pending';
//        db.select('SQL',function(result){
//            proxy.emit('selected',result);
//            status = 'ready';
//        });
//    }
//}

/*********************EventEmitter************************/
////引入event模块
//var events = require("events");
////创建eventEmitter对象
//var event = new events.EventEmitter();
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
//var event = new event.EventEmitter();
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
//event.addListener('connection',listener1);
//
//event.on('connection',listener2);
//
//var eventListeners = require('events').EventEmitter.listenerCount(event,'connection');
//console.log(eventListeners + ' connection event');
//
////do connection event
//event.emit('connection');
//
////removeListener
//event.removeListener('connection', listener1);
//console.log('listener1 can not be listener');
//
//
//event.emit('connection');
//
//eventListeners = require('events').EventEmitter.listenerCount(event,'connection');
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


/*********************偏函数************************/
//var after = function(times,callback){
//    var count = 0, result = {};
//    return function(key,value){
//        result[key] = value;
//        count++;
//        if(count === times){
//            callback(result);
//        }
//    }
//
//};
//
//
//var emitter = new events.EventEmitter();
//
//var done = after(3,render);
//
//emitter.on("done",done);
//
//fs.readFile(template_path, "utf-8",function(err,template){
//    emitter.emit('done',"template",template);
//});


/*********************EventProxy************************/

var events = new require('Events').EventEmitter();



