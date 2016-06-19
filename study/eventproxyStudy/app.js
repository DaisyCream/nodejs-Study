var EventProxy = require('eventproxy');

/**
 * EventProxy fail
 * @param callback
 */
exports.getContent = function(callback){
    var ep = new EventProxy();
    ep.all('tpl','data',function(tpl, data){
        callback(null, {
            template: tpl,
            data : data
        });
    });

    /*
    * ep.fail(callback)语句实现类似于
    * ep.bind('error', function(err){
    *   ep.unbind;
    *   callback(err);
    * })
    *
    * 你可以抛出错误，ep.throw(err) ===  ep.emit('error', err);
    * */
    ep.fail(callback);

    fs.readFile('','utf-8', ep.done(callback));
};





