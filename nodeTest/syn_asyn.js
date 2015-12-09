/**
 * Created by DaisyCream on 15/12/7.
 */



/********************Object***********************/
//var b = function(){
//    var o = 1;
//    console.log("hhhha");
//};
//var x = Object(b);
//x();


/********************nextTick***********************/

//process.nextTick(function(){console.log("next1")});
//process.nextTick(function(){console.log('next2"')});
//function v(){
//    //console.log("setIm");
//    //process.nextTick(function(){console.log("next3")});
//    ss();
//}
//v();
//function ss(){console.log(process.nextTick(function(){console.log("sdcsdcs")}))}
//process.nextTick(function(){console.log("next4")});

/********************SetTimeOut***********************/
//setTimeout(function(){console.log("settimeout")},0);
//console.log("1");
//function x(){
//    console.log("fun");
//}
//x();



/********************nextTick***********************/
//function x(time){
//    var now = new Date();
//    while(1){
//        if((new Date()-now)==time){
//            console.log("i'm waiting");
//            return;
//        }
//    }
//}
//
//function y(){
//    x(1000);
//    console.log("2");
//}
//
//y();

/********************js 编写 nextTick01***********************/
//var process = {};
//
//var nextTickQueue = [];
//
//process._tickCallback = function(){
//    var l = nextTickQueue.length;
//
//    if(l === 0) return;
//
//    try{
//        for(var i=0;i<l;i++){
//            nextTickQueue[i]();
//            console.log("232");
//        }
//    }
//
//    catch(e){
//        nextTickQueue.splice(0,i+1);
//        if(i+1<l){
//            process._needTickCallback();
//        }
//        throw e;
//    }
//
//    nextTickQueue.splice(0,l);
//};
//
//process._needTickCallback = function(){
//    process._tickCallback();
//};
//
//process.nextTick = function(callback){
//    nextTickQueue.push(callback);
//    process._needTickCallback();
//};
//
//


/********************process.nextTick & setImmediate***********************/
process.nextTick(function(){
    console.log("next1");
});

process.nextTick(function(){
    console.log("next2")
});

setImmediate(function(){
    console.log("setImm1");
    process.nextTick(function(){console.log("next3")});
});


process.nextTick(function(){
    console.log("next4");
});



setImmediate(function(){
    console.log("setImm2");
});


setImmediate(function(){
    console.log("setImm3");
});

setTimeout(function(){console.log("settimeout")});






