/**
 * Created by DaisyCream on 16/3/11.
 */
var url = require('url');


function start(handle, route){
    function onRequest(req, res){
        var path = url.parse(req.url).pathname;

        var data = '';
        req.addListener('data',function(chunk){
            data+=chunk;
        });
        req.addListener('end',function(){
            route(handle, path, data, res);
        });
    }

    http.createServer(onRequest).listen(3000);

    console.log("Running at 127.0.0.1:3000");
}

exports.start = start;