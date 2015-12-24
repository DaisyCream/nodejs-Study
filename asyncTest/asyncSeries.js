//var async = require('async');
//
//
//async.serise([
//    function(callback){
//        fs.readFile('file1.txt','utf8',callback);
//    },
//    function(callback){
//        fs.readFile('file2.txt','utf8',callback);
//    }],
//    function(error,results){
//        console.log(error);
//    }
//);
//
//fs.readFile('file1.txt','utf8',function(err,content){
//    if(err){
//        return callback(err);
//    }
//    fs.readFile('file2.txt','utf8',function(){
//        if(err){
//            return callback(err);
//        }
//        callback(null,[content,data]);
//    });
//});

var currency = require('currency');
console.log(currency.canadianToUs(100));