var fs = require('fs');
var join = require('path').join;
var http = require('http');
var parse = require('url').parse;

var root = __dirname;

var server = http.createServer(function(req, res){
    var urlObj = parse(req.url);
    var path = join(root, urlObj.pathname);
    var stream = fs.createReadStream(path);

    //stream.on('data', function(chunk){
    //   res.write(chunk);
    //});
    //
    //stream.on('end', function(){
    //    res.end();
    //});
    stream.pipe(res);
    stream.on('error', function(err){
        res.statusCode = 500;
        res.end('Internal server error ' + err);
    });

});

server.listen(3000);
console.log('Server running at 127.0.0.1:3000');
/**
 * 运用管道流pipe(stream)
 * var readStream = fs.createReadStream('path1');
 * var writeStream = fs.createReadStream('path2');
 *
 * var readStream.pipe(writeStream);
 */

