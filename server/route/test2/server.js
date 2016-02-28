/**
 * Created by DaisyCream on 16/2/28.
 */
var http = require('http');
var url = require('url');

function start(route, handle){
    function onRequest(req, res){
        var postDate = "";
        var pathname = url.parse(req.url).pathname;
        console.log("Request for " + pathname +" received");

        req.setEncoding('utf8');

        req.addListener("data",function(postDataChunk){
            postDate += postDataChunk;
            console.log("Received POST data chunk '" + postDataChunk + "'.");
        });

        req.addListener("end",function(){
            route(handle, pathname, res, postDate);
        });
    }

    http.createServer(onRequest).listen(3000);
    console.log("running at 127.0.0.1:3000");
}

exports.start = start;