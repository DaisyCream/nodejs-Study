/**
 * Created by DaisyCream on 16/2/28.
 */
var http = require('http');
var url = require('url');

var start = function(route){
    var server = http.createServer(function(req, res){
        var pathName = url.parse(req.url).pathname;
        console.log("Request for" + pathName + "received");
        route(pathName);//路由处理

        res.writeHead(200,{
            'Content-Type':'text/plain'
        });
        res.write('wahhha');
        res.end();
    });

    server.listen(8000);
    console.log("server start at 127.0.0.1:8000");
};

exports.start = start;