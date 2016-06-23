var async = require('async');

//waterfall每次函数产生的值，都传递给下一个函数
//若中途有函数出错，直接跳到最终callback，结果被丢弃，后面的函数不再执行
async.waterfall([
    function(callback){
        callback(null, 'one', 'two')
    },
    function(arg1, arg2, callback){
        callback(null, 'three');
    },
    function(arg1, callback){
        callback(null, 'done');
    }
],function(err, results){
    console.log(results);
});

