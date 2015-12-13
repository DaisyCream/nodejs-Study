var http = require('http');

http.createServer(function(request,response){
    response.writeHead(200, { 'Content-Type': 'text-plain'});
    response.end('Hello World\n');
}).listen(8124);

/*********************将request当做只读的数据流**************************/
http.createServer(function(request,response){
    var body = {};
    console.log(request.method);
    console.log(request.headers);

    request.on('data', function(chunk){
        body.push(chunk);
    });

    request.on('end', function(){
        body = Buffer.concat(body);
        console.log(body.toString());
    });
}).listen(80);


/*********************将response当做只写入的数据流来写入*********************/
http.createServer(function(request,response){
    response.writeHead(200, { 'Content-Type' : 'text/plain' });

    request.on('data', function(chunk){
        response.write(chunk);
    });

    request.on('end', function(){
        response.end();
    })
}).listen(80);