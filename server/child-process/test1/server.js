/**
 * Created by DaisyCream on 16/2/28.
 */
var http = require('http');
var url = require('url');

function start(route, handler){
    function onRequest(req, res){
        var pathname = url.parse(req.url).pathname;
        console.log("Request for " + pathname + " received");

        var content = route(handler, pathname);
        res.write(content);
        res.end();
    }

    http.createServer(onRequest).listen(3000);
    console.log('server running at 127.0.0.1:3000');
}

exports.start = start;