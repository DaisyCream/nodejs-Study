/****************客户端的请求信息*********************/

//var options = {
//    hostname: 'www.example.com',
//    port: 80,
//    path: '/upload',
//    method: 'POST',
//    headers: {
//        'Content-Type' : 'application/x-wwww-form-urlencoded'
//    }
//};
//
//var request = http.request(options, function(response){});
//
//request.write('Hello World');
//request.end();
//
//
//http.get('http://www.example.com',function(response){});//可由此行概括上面的句子


/****************将response当做只写入的数据流来写入*********************/
//http.get('http://www.example.com/', function(response){
//    var body = {};
//
//    console.log(response.statusCode);
//    console.log(response.headers);
//
//    response.on('data', function(chunk){
//        body.push(chunk);
//    });
//
//    response.on('end', function(){
//        body = Buffer.concat(body);
//        console.log(body.toString());
//    });
//});