/**
 * Created by DaisyCream on 16/6/19.
 */


//和all一样的tail都是注册事件，不同于的是，指定事件触发之后，如果事件
//依旧持续触发，则触发时会调用handler，像一条尾巴

var EventProxy = require('eventproxy');


var ep = EventProxy();

ep.tail('tpl', function(tpl){
    //do someThing
});

setInterval(function(){
    ep.emit('tpl', 'wahaa');
},2000);

//用tail来注册事件，则会2s就调用一次，但是如果用all来注册事件，则不论有事件调用
//都只会执行一次