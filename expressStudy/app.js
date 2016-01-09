var express = require('express');
var app = express();

app.get('/', function(req, res){
    res.send('Hello World!');
});


app.post('/',function(req, res){
    res.send('Got a POST request');
});

app.put('/user', function(req, res){
    res.end('Got a PUT request at/user');
});

app.delete('/user', function(req, res){
    res.send('Got a DELETE request at/user');
});

app.all('/secret', function(req, res){
    console.log('Accessing the secret section...');
    next();
});





/*******************路由回调**************************/
app.get('example/b', function(req, res, next){//用多个回调函数处理路由（记得指定next对象）
    console.log('1');
    next();
},function(req, res){
    res.send('Hello from B!')
});


/*********************************************/

//使用回调函数数组处理路由

var cb0 = function(req, res, next){
    console.log('CB0');
    next();
};

var cb1 = function(req, res, next){
    console.log('CB1');
    next();
};

var cb2 = function(req, res){
    res.send('Hello form C!');
};

app.get('/example', [cb0,cb1,cb2]);


/*******************利用Express托管静态文件*******************/
//假设在 public 目录放置了图片、CSS 和 JavaScript 文件

app.use(express.static('public'));


//如果你希望所有通过 express.static 访问的文件都存放在
// 一个“虚拟（virtual）”目录（即目录根本不存在）下面，可
// 以通过为静态资源目录指定一个挂载路径的方式来实现，如下所示：

app.use('/static', express.static('public'));

