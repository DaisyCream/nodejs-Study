/**
 * Created by DaisyCream on 16/2/27.
 */
var http = require('http');

function start(){
    var server = http.createServer(function(req, res){
        res.writeHead(200,{
            'Content-Type':'text/plain'
        });
        res.end("wahhah");
    });
    server.listen(8000);
}

exports.start = start;