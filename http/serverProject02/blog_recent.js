var http = require('http');
var fs = require('fs');

//http.createServer(function(req, res){
//    if(req.url == '/'){
//        fs.readFile('./titles.json',function(err, data){
//            if(err){
//                console.log(err);
//                res.end(err);
//            }else{
//                var titles = JSON.parse(data.toString());
//
//                fs.readFile('./template.html',function(err, data){
//                    if(err){
//                        console.log(err);
//                        res.end(err);
//                    }else{
//                        var tmpl = data.toString();
//
//                        var html = tmpl.replace('%', titles.join('</li><li>'));
//                        res.writeHead(200,{
//                            'Content-Type' : text/html
//                        });
//                        res.end(html);
//                    }
//                });
//            }
//        });
//    }
//
//}).listen(8000, "127.0.0.1");


http.createServer(function(req, res){
    getTitles(res);
}).listen(3000, '127.0.0.1');

function getTitles(res){
    fs.readFile('./titles.json', function(err, data){
       if(err)
           return handleErr(err,res);
        console.log(data);
        getTemplate(JSON.parse(data.toString()), res);
    });
}


function getTemplate(data, res){
    fs.readFile('./template.html',function(err, temp){
        if(err){
            handleErr(err);
        }else{
            formatHtml(data,temp,res);
        }
    })
}

function formatHtml(data, temp, res){
    console.log(typeof temp.replace);
    var html = temp.replace('%',data.join('</li><li>'));
    res.writeHead(200,{
        'Content-Type': 'text/html'
    });
    res.end(html);
}

function handleErr(err, res){
    console.log(err);
    res.end(err);
}

console.log("Server running at http://127.0.0.1:3000/");