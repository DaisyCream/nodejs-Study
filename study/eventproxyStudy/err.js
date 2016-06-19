/**
 * Created by DaisyCream on 16/6/19.
 */
var EventProxy = require('eventproxy');

var ep = new EventProxy();

ep.all('tpl','data',function(){
    //do someThing
});

fs.readFile('','utf-8', function(err, content){
    //error execute
    if(err){
        //do
        return;
    }
    ep.emit('tpl', content);
});

fs.readFile('', 'utf-8', function(err, data){
    //error execute
    if(err){
        //do
        return;
    }
    ep.emit('data', data);
});
