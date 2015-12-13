/**
 * Created by DaisyCream on 15/12/13.
 * It's the main module
 */

var head = require('./head');
var body = require('./body');

exports.create = function(name){
    return {
        name : name,
        head : head.create(),
        body : body.create()
    };
};

