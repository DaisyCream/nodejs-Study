var fs = require('fs');
var join = require('path').join;
var http = require('http');
var parse = require('url').parse;

var root = __dirname;

var server = http.createServer(function(req, res){
    var path = join(root, req.url);
    var stream = fs.createReadStream(path);

    //stream.on('data', function(chunk){
    //   res.write(chunk);
    //});
    //
    //stream.on('end', function(){
    //    res.end();
    //});
    res.pipe(stream);
    res.end();

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

