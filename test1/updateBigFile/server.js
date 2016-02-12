/**
 * Created by DaisyCream on 16/2/12.
 */
var formidable = require('formidable');
var fs = require('fs');
var http = require('http');
var path = require('path');
var url = require('url');

var root = __dirname;

var server = http.createServer(function(req, res){
    var reqPath = url.parse(req.url).pathname;
    var filePath = false;
    switch(req.method){
         case 'GET':
             if(reqPath == '/'){
                 filePath = path.join(root, '/index.html');
                 sendHtml(filePath, res);
             }
             break;
         case 'POST':
             upLoad(res);
             break;
     }
});


function sendHtml(filePath, res){
    var stream = fs.createReadStream(filePath);
    res.writeHead('Content-Type', 'text/html');
    stream.pipe(res);
}

function upLoad(res){
    var form = formidable();
}

server.listen(3000, function(){
    console.log('running at 127.0.0.1:3000');
});

