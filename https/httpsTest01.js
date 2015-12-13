//var options = {
//    key: fs.readFileSync('./ssl/default.key'),
//    cert: fs.readFileSync('./ssl/default.cer')
//};
//
//var server = https.createServer(options,function(request, response){
//     // ...
//});
//
////增加证书
//
//server.addContext('foo.com',{
//    key:fs.readFileSync('./ssl/foo.com.key'),
//    cert:fs.readFileSync('./ssl/foo.com.cer')
//});
//
//server.addContext('bar.com' , {
//    key:fs.readFileSync('./ssl/bar.com.key'),
//    cert:fs.readFileSync('./ssl/bar.com.cer')
//
//});


/*****************在客户端模式下发起https请求*****************/
var options = {
    hostname: 'www.example.com',
    post:443,
    path:'/',
    method:'GET'
};

var request = http.request(options,function(response){});

request.end();