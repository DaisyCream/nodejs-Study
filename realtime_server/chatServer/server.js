var http = require('http');
var fs = require('fs');
var mime = require('mime');
var path = require('path');
var cache = {};

var server = http.createServer(function(req, res){
    var path = '';
    if(req.url == '/'){
        path = 'public/index.js';
    }else{
        path = 'public/' + req.url;
    }

    var absPath = './' + path;
    fs.exists(absPath,function(exsist){
        if(!exsist){
            send404(res);
            return;
        }
        res.writeHead(200, {
            'Content-Type' : mime.lookup(path.basename(absPath))
        });
        getData(absPath, cache, res);
    });

});

function send404(res){
    res.statusCode = 404;
    res.end("Can't find the file");
}

function getData(absPath, cache, res){
    var stream = fs.createReadStream(absPath);
    if(cache[absPath]){
        res.end(cache[absPath]);
    }else{
        stream.pipe(cache[absPath]);
        stream.pipe(res);
    }
}

server.listen(3000,function(){
    console.log('Server running at 127.0.0.1:3000/');
});


