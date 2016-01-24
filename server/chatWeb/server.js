var http = require('http');
var fs = require('fs');
var mime = require('mime');
var path = require('path');
var cache = {};


function send404(res){
    res.statusCode = 404;
    res.end('Can\'t find the file!');
}

function sendFile(res, filePath,fileContent){
    res.writeHead(200,{
        'Content- Type': mime.lookup(path.basename(filePath))
    });
    res.end(fileContent);
}

function staticServer(res, cache,  absPath){
    if(cache[absPath]){
        sendFile(res, absPath, cache[absPath]);
    }
    else {
        fs.exists(absPath, function (exists) {
            if (exists) {
                fs.readFile(absPath, function (err, data) {
                    if (err) {
                        send404(res);
                    } else {
                        cache[absPath] = data;
                        sendFile(res, absPath, data);
                    }
                });
            } else {
                send404(res);
            }
        })
    }
}


var server = http.createServer(function(req, res){
    var filePath = false;
    if(req.url == '/'){
        filePath = "public/index.html";
    }else{
        filePath = "public" + req.url;
    }

    var absPath = './' + filePath;f
    staticServer(res, cache, absPath);
});

server.listen(3000);
console.log('Server running at 127.0.0.1:3000/');

var chatServer = require('./lib/chat_server');
chatServer.listen(server);

