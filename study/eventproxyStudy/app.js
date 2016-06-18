var EventProxy = require('eventproxy');


//
var ep = EventProxy.create('tpl', 'data', function(tpl, data){

});

var ep1 = EventProxy();

ep1.all('tpl', function(tpl){
    console.log();
});


ep1.emit('tpl', "hhah");


var ep2 = new EventProxy();

ep.after('got_file', files.length, function(list){


});

for(var i=0;i<files.length; i++){
    fs.readFile(files[i], 'utf-8', function(err, content){
        ep.emit('got_file', content);
    })

}