var http = require('http');
var qs = require('querystring');

var list = [];

var server = http.createServer(function(req, res){
    if(req.url == '/'){
        switch(req.method){
            case 'GET':
                sendData(res);
                break;
            case 'POST':
                getData(req, res);
                break;
            default :
                badRequset(res);
        }
    }else{
        reqError(res);
    }
});

function sendData(res){
    var html = '<html><head><meta charset="UTF-8">' +
        '<title>ToDoList</title>' +
        '</head>' +
        '<body>' +
        '<h1>ToDoList</h1>' +
        '<ul>' +
         list.forEach(function(item){
             return '<ul>' + item + '</ul>';
         })+
        '</ul>'+
        '<form action="/" method="post">' +
        '<input type="text" name="listThing">' +
        '<input type="submit" value="提交">' +
        '</from>' +
        '</body></html>';

    res.writeHead('Content-Type', 'text/html');
    res.writeHead('Content-Length', Buffer.byteLength(html));
    res.end(html);
}


function getData(req, res){
    var body = '';
    req.setEncoding('utf8');
    //console.log(req.method);
    req.on('data', function(chunk){
        body += chunk;
    });
    req.on('end', function(){
        var obj = qs.parse(body);
        console.log(obj);
        list.push(obj.listThing);
        sendData(res);
    });
}

function badRequset(res){
    res.statusCode = 400;
    res.end('bad request');
}

function reqError(res){
    res.statusCode = 404;
    res.end("Request method is error");
}


server.listen(3000);
console.log('Server running at 127.0.0.1:3000/');




