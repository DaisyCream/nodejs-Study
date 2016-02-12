var http = require('http');
var fs = require('fs');
var path = require('path');
var mime = require('mime');
var save = {};

var server = http.createServer(function(req, res){
    var reqPath = req.url;
    var filePath = null;
    if(reqPath == '/'){
        filePath = 'public/index.html';
    }
    else{
        filePath = 'public/' + reqPath;
    }
    var absPath = './' + filePath;
    findFile(absPath, res, save);
});


function notFindFile(res){
    res.statusCode = 404;
    res.end("can't find file");
}

function findFile(absPath, res, save){
    if(!save[absPath]){
        fs.exists(absPath,function(exists){
            if(!exists){
                notFindFile(res);
            }
            else{
                fs.readFile(absPath, 'utf-8', function(error, data){
                    if(error){
                        notFindFile(res);
                    }else{
                        save[absPath] = data;
                        sendFile(absPath, res);
                    }
                })
            }
        })
    }
    else{

    }
}

function sendFile(absPath, res){
    var stream = fs.createReadStream(absPath);
    res.writeHead('Content-Type', mime.lookup(path.basename(absPath)));
    stream.pipe(res);
}


server.listen(3000);
console.log('running at 127.0.0.1:3000');

