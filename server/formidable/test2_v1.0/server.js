/**
 * Created by DaisyCream on 16/2/29.
 */
var http = require('http');
var url = require('url');

function start(route, handle){
    function onRequest(req, res){
        var pathname = url.parse(req.url).pathname;
        console.log("the" + pathname + "");

        route(handle, pathname, res, req);
    }

    http.createServer(onRequest).listen(3000);
    console.log("server running at 127.0.0.1:3000");

}

exports.start = start;