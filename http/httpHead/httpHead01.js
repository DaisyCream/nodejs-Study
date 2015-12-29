var http = require('http');

var s = http.createServer(function (req, res){
    var body = 'Hello World';
    res.setHeader('Content-Length', body.length);
    res.setHeader('Content-Type', 'text/plain');
    res.end(body);
});
s.listen(8888);
console.log("Server running at 127.0.0.1:8888");

