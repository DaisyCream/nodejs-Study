/**
 * Created by DaisyCream on 16/6/20.
 */

var async = require('async');

var time = new Date();
async.parallel([
        function(callback){
            callback(null, 'one');
        },
        function(callback){
            callback(null, 'two');
        }
    ],
    function(err, results){
        console.log(new Date() - time);
        console.log(results);
    });