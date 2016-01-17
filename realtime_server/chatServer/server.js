var http = require('http');
var fs = require('fs');
var mime = require('mime');
var path = require('path');
var cache = {};

function send404(res){
    res.statusCode = 404;
    res.end("Can't find the file");
}

var server = http.createServer(function(req,res){
    var filePath = '';
    if(req.url == '/'){
        filePath = 'public/index.html';
    }else{
        filePath = 'public' + req.url;
    }

    var absPath = './' + filePath;
    findCache(absPath,cache,res);

});

function findCache(absPath,cache,res){
    if(cache[absPath]){
        sendCacheFile(absPath,cache[absPath],res);
    }else{
        fs.exists(absPath,function(exists){
            if(!exists){
                send404(res);
            }else{
                sendFile(absPath,res);
            }
        });
    }
}

function sendCacheFile(absPath,content,res){
    res.writeHead(200,{
        'Content-type':mime.lookup(path.basename(absPath))
    });
    res.end(content);
}

function sendFile(absPath,res){
    stream = fs.createReadStream(absPath);
    res.writeHead(200,{
        'Content-type':mime.lookup(path.basename(absPath))
    });
    stream.pipe(res);
}


server.listen(3000,function(){
    console.log('Server running at 127.0.0.1:3000/');
});


