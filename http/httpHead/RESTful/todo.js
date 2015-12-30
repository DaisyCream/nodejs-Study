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
            var item = '';
            req.setEncoding('utf8');
            req.on('data', function(chunk){
                item += chunk;
            });
            req.on('end', function(){
                items.push(item);
                res.end('OK\n');
            });
            break;
        case 'GET':
            items.forEach(function(item, i){
                res.write(i + ')' + item + '\n');
            });
            res.end();
            break;
    }
});

server.listen(8888);
console.log('Server running at 127.0.0.1:8888/');