/**
 * Created by DaisyCream on 16/2/29.
 */
var queryString = require("querystring");
var fs = require('fs');
var formidable = require('formidable');

function start(res){
    console.log("Request handler 'start' was called.");

    var body = '<html>'+
        '<head>'+
        '<meta http-equiv="Content-Type" '+
        'content="text/html; charset=UTF-8" />'+
        '</head>'+
        '<body>'+
        '<form action="/upload" enctype="multipart/form-data" '+
        'method="post">'+
        '<input type="file" name="upload">'+
        '<input type="submit" value="Upload file" />'+
        '</form>'+
        '</body>'+
        '</html>';


    res.writeHead(200,{
        "Content-Type" : "text/html"
    });
    res.write(body);
    res.end();
}

function upload(res, req){
    console.log("Request handler 'upload' was called.");

    var form = new formidable.IncomingForm();
    form.parse(req, function(error, fields, files){
        console.log("parsing done");
        console.log(files);
        fs.renameSync(files.upload.path, '/tmp/test.png');
        res.writeHead(200, {
            'Content-Type' : "text/html"
        });
        res.write("received img:<br/>");
        res.write("<img src = '/show' />");
        res.end();
    })
}

function show(res){
    console.log("Request handler 'show' was called");
    fs.readFile("/tmp/test.png", "binary", function(error, file){
        if(error) {
            res.write(500,{
                'Content-Type' : 'text/plain'
            });
            res.write(error + '\n');
            res.end();
        }else{
            res.writeHead(200, {
                "Content-Type" : "text/plain"
            });
            res.write(file, "binary");
            res.end();
        }
    })
}

exports.start = start;
exports.upload = upload;
exports.show = show;