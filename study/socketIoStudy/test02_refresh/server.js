/**
 * Created by DaisyCream on 16/1/22.
 */
var http = require('http');
var path = require('path');
var url = require('url');
var express = require('express');
var app = express();
var server = http.createServer(app);
var io = require('socket.io').listen(server);
var fs = require('fs');

var parse = url.parse;
var join = path.join;

var root = __dirname;

var watchers = {};

app.use(function(req, res, next){
    var event = 'change';
    var filePath = parse(req.url).pathname;
    console.log(filePath);

    if(filePath[filePath.length - 1] == '/'){
        event = 'reload';
        filePath = 'index.html';
    }

    createEvent(event, filePath);

    next();
});


app.use(express.static(root));



function createEvent(event, path){
    var absPath = join(root, path);

    if(watchers[absPath]){
        return;
    }

    fs.watchFile(absPath, function(curr, prev){
        if(curr.mtime !== prev.mtime){
            console.log(path);
            io.sockets.emit(event, path);
        }
    });

    watchers[absPath] = true;
}

server.listen(8888);