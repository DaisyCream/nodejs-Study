var http = require('http');
var formidable = require('formidable');
var url = require('url');
var util = require('util');
var fs = require('fs');

var server = http.createServer(function(req, res){
    if(req.url == '/'){
        switch(req.method){
            case 'GET':
                //console.log(req.headers);
                show(req, res);
                break;
            case 'POST':
                //console.log(req.headers['content-type']);
                unload(req, res);
                break;
        }
    }
});


/***
 * enctype = multipart/form-data这适用于大的二进制文件，图片，视屏等
 * @param req
 * @param res
 */
function show(req, res){
    var html = '' +
        '<html><head><title>formidable</title></head>' +
        '<body><form action="/" method="POST" enctype="multipart/form-data">' +
        '<p><input type="text" name="name"></p>' +
        '<p><input type="file" name="file"></p>' +
        '<p><input type="submit" name="Upload"></p>' +
        '</form></body></html>';
    res.setHeader('Content-Type', 'text/html');
    res.setHeader('Content-Length', Buffer.byteLength(html));
    res.end(html);
}


function unload(req, res) {
    if (!isFormData(req)) {
        res.statusCode = 400;
        res.end("Bad Request: expection multipart/form-data");
        return;
    }
    var form = new formidable.IncomingForm();
    form.uploadDir = '/tmp';
    form.parse(req, function(error, fields, files){
        res.writeHead(200, {'Content-type': 'text/plain'});
        res.write('received upload:\n\n');
        console.log(files.file.path);
        //console.log(files.upload);
        fs.rename(files.file.path, './mi/'+fields.name + '.png');
        res.end(util.inspect({fields: fields, files: files}));
    });
}

function isFormData(req){
    var type = req.headers['content-type'] || '';
    return 0 == type.indexOf("multipart/form-data");
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

