/**************post请求体字符串缓存********************/

/*
* 使用curl命令("POST"): curl -d 'buy groceries' http://127.0.0.1:8888/
* 使用curl命令("GET"): curl http://127.0.0.1:8888/
* ***/

var http = require('http');

var url = require('url');

var items = [];

var server = http.createServer(function(req, res){
    switch(req.method){
        case 'POST':
            addData(req, res);
            break;
        case 'GET':
            getBody(res);
            break;
        case 'DELETE'://DELETE /1
            deleteBody(req, res);
            break;
        case 'PUT'://PUT /1
            putBody(req, res);
            break;

    }
});

/***
 * 为了提高速度，加入了头部
 * @param res
 */

function addData(req, res){
    var item = '';
    req.setEncoding('utf8');
    req.on('data', function(chunk){
        item += chunk;
    });
    req.on('end', function(){
        items.push(item);
        res.end('OK\n');
    });
}

function getBody(res){
    var body = items.map(function(item, i){
        return i + ') ' + item;
    }).join('\n');

    body+='\n';
    res.setHeader('Content-Length', Buffer.byteLength(body));
    res.setHeader('Content-Type', 'text/plain; charset = "utf-8"');
    res.end(body);
}

function deleteBody(req, res){
    var path = url.parse(req.url).pathname;
    var i = parseInt(path.slice(1), 10);

    if(isNaN(i)){
        res.statusCode = 400;
        res.end('Invalid item id');
    }else if(!items[i]){
        res.statusCode = 404;
        res.end('Item not found');
    }else {
        items.splice(i,1);
        res.end('OK\n');
    }
}

function putBody(req, res){
    var path = url.parse(req.url).pathname;
    var i = parseInt(path.slice(1), 10);

    if(isNaN(i)){
        res.statusCode = 400;
        res.end('Invalid item id');
    }else if(!items[i]){
        res.statusCode = 404;
        res.end('Item not found');
    }else{
        var item = '';
        req.setEncoding('utf8');
        req.on('data', function(chunk){
            item+=chunk;
        });
        items[i] = item;
    }
}

server.listen(8888);
console.log('Server running at 127.0.0.1:8888/');