var http = require('http');
var formidable = require('formidable');

var server = http.createServer(function(req, res){
    if(req.url == '/'){
        switch(req.method){
            case 'GET':
                show(req, res);
                break;
            case 'Post':
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
        '<form action="/" method="get" enctype="multipart/form-data">' +
        '<p><input type="text" name="name"></p>' +
        '<p><input type="file" name="file"></p>' +
        '<p><input type="submit" name="Upload"></p>' +
        '</form>';
    res.setHeader('Content-Type', 'text.html');
    res.setHeader('Content-Length', Buffer.byteLength(html));
    res.end(html);
}

function unload(req, res) {
    if (!isFormData(req)) {
        res.statusCode = 400;
        res.end("Bad Request: expection multipart/from-data");
        return;
    }


    var form = new formidable.IncomingForm();
    form.parse(req);
}

function isFormData(req){
    var type = req.headers['Content-Type'] || '';
    return 0 == type.indexOf("multipart/form-data");
}

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
 * form.parse(function(err, filed, file){
 * console.log(filed);
 * console.log(file);
 * res.end('Upload complete');
 * });
 */

