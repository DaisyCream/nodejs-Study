/**
 * Created by DaisyCream on 16/2/29.
 */
var fs = require('fs');
var formidable = require('formidable');


function start(req, res){
    res.writeHead(200,{
        "Content-Type":"text/html"
    });
    var stream = fs.createReadStream("../public/index.html");
    stream.pipe(res);
}

function upload(req, res){
    var data = {};

    function upload(req, res){
        if(!isFormData(req)){
            res.statusCode = 400;
            res.end("Bad request: exception multipart/form-data");
            return;
        }

        var form = new formidable.IncomingForm();
        form.uploadDir = '/tmp';
        form.parse(req, function(error, fields, files){
            data.filename = fields.filename;
            data.file = files.file;
        });
    }

    function isFormData(req){
        var type = req.headers['content-type'] || '';
        console.log(req.headers);
        return 0 == type.indexOf("multipart/form-data");
    }

    upload(req,res);

    res.writeHeader(200,
        {'Content-Type':"text/html"});
    res.write("<html>" +
        "<head>" +
        "<meta scharset='UTF-8'>" +
        "</head>" +
        "<body>" +
        "<a href='"+ data.file +"'>"+ data.filename +"</a>" +
        "</body>" +
        "</html>");
    res.end();
}

exports.start = start;
exports.upload = upload;