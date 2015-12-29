var http = require('http');

var server = http.createServer(function(req, res){
    var url = 'http://www.baidu.com/';
    var body = '<p><a herf=' + url+ '>click</a></p>';

    res.writeHead('Location', url);
    res.writeHead('Content-Length', body.length);
    res.writeHead('Content-Type', 'test/html');
    res.statusCode = 200;
    res.end(body);
});

server.listen(7777);
console.log('server running at 127.0.0.1:7777');