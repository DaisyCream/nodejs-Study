var http = require('http');
var path = require('path');
var url = require('url');
var mime = require('mime');
var fs = require('fs');
var formidable = require('formidable');

var root = __dirname;

var server = http.createServer(function(req, res){
    var rePath = url.parse(req.url).pathname;
    var file = false;
    if(rePath == '/'){
        switch(req.method){
            case 'GET':
                file = path.join(root, 'index.html');
                getHome(file,res);
                break;
            case 'POST':
                upload(req, res);
                break;
        }
    }
});

function getHome(filePath, res){
    var stream = fs.createReadStream(filePath);
    res.writeHead(200,{
       'Content-type':  mime.lookup(path.basename(filePath))
    });
    stream.pipe(res);
}

function getSuccess(res){
    var filePath = path.join(root,'ok.html');
    var stream = fs.createReadStream(filePath);
    res.writeHead(200,{
        'Content-type': mime.lookup(path.basename(filePath))
    });
    stream.pipe(res);
}

function upload(req, res){
    if(!isFormidable(req)){
        res.statusCode = 400;
        res.end('Bad Request: expection multipart/form-data');
        return;
    }
    var form = new formidable.IncomingForm();
    form.uploadDir = '/tmp';
    form.parse(req, function(error, fields, files){
        console.log(files);
        fs.rename(files.file.path, './file/' + fields.name + '.png');
        getSuccess(res);
    })
}


function isFormidable(req){
    var type = req.headers['content-type'] || '';
    return 0 == type.indexOf('multipart/form-data');
}





server.listen(3000);
console.log('Server running at 127.0.0.1:3000/');


/***
 * formidable流式解析器让它成为上传文件的最佳人选，它能随着数据块的上传接受
 * 它们并且解析，并吐出特定的部分,不会因为大量缓冲造成内存膨胀
 * (1)创建一个IncomingForm实例 code: var form = new formidable.IncomingForm()
 * (2)调用form.parse()解析HTTP请求对象;
 * (3)监听事件filed，file，end
 * form.on('filed',function(filed, value){//收完输入域后会发出filed事件
 *  console.log(filed);
 *  console.log(value);
 * });
 * 文件上传完成后发出了file事件，file事件提供了文件大小，在form.uploadDir目录
 * (/tmp)中的路径，原始的主档名，以及MIME类型
 * form.on('file',function(name, file){//在收到文件并且处理好后会触发file事件
 *  console.log(name);
 *  console.log(file);
 * });
 *form.on('end',function(){
 *  res.end('Upload complete');
 * });
 *
 * form.parse(req, function(err, filed, file){
 * console.log(filed);
 * console.log(file);
 * res.end('Upload complete');
 * });
 */

