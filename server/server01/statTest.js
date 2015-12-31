var http = require('http');
var fs= require('fs');
var join = require('path').join;
var parse = require('url').parse;

var root = __dirname;

var server = http.createServer(function(req, res){
    var path = join(root, parse(req.url).pathname);

    fs.stat(path, function(err, stat){
        if(err){
            if(err == 'ENOENT'){
                res.statusCode = 404;
                res.end('NOT FOUND FILE');
            }else{
                res.statusCode = 500;
                res.end('Internal server error');
            }
        }else{
            res.setHeader('Content-Length', stat.length);
            var stream = fs.createReadStream('path');
            stream.pipe(res);
            stream.on('error' ,function(err){
                res.statusCode = 500;
                res.end('Internal server error');
            });
        }
    });
});

/***
 * 系统调用处理文件的相关信息，修改时间，字节等等 : fs.stat(path, function(err,stst){});
 * 这能先发制人的处理文件，查看字节和查看文件是否存在
 * **/