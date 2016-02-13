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
    if(reqPath == '/'){
        switch(req.method){
            case 'GET':
                filePath = path.join(root, '/index.html');
                sendHtml(filePath, res);
                break;
            case 'POST':
                upLoad(req, res);
                break;
        }
    }
});


function sendHtml(filePath, res){
    var stream = fs.createReadStream(filePath);
    res.writeHead(200,{'Content-Type': 'text/html'});
    stream.pipe(res);
}

function upLoad(req, res){
    if(!isFormidable(req)){
        res.statusCode = 400;
        res.end('Bad request : exception multipart/form-data');
        return;
    }

    var form = new formidable.IncomingForm();
    form.uploadDir = '/tmp';
    form.parse(req, function(err, fileds, files){
        fs.rename(files.file.path,'./img/'+fileds.filed + '.png');
    });

}

function isFormidable(req){
    var type = req.headers['content-type'] || '';
    return 0 == type.indexOf('multipart/form-data');
}

server.listen(3000, function(){
    console.log('running at 127.0.0.1:3000');
});

