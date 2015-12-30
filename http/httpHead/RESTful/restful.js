//post:创建
//get:获取
//put:修改
//delete:删除

//通过检查req.method方法，可以看出HTTP方法(请求方法)

var http = require('http');
var server = http.createServer(function(req, res){
    req.setEncoding('utf8');
    req.on('data', function(chunk){//提供buffer对象,将流编码设定为ascii或utf8
        console.log('parsed', chunk);
    });
    req.on('end', function(){
        console.log('done parsing');
        res.end();
    });
});



