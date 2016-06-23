var async = require('async');
var time = new Date();
async.series({
    one : function(callback){
        callback(null,1);
    },
    two : function(callback){
        callback(null ,2);
    }
},function(err, results){
    console.log(new Date() - time);
    console.log(results);
});

async.series([
    function(callback){
        callback(null, 1);
    },
    function(callback){
        callback(null, 2);
    }
], function(err, results){
    console.log(results);
});


