var fs = require('fs');
var url = require('url');
var http = require('http');
var path = require('path');
var express = require('express');
var app = express();
var server = http.createServer(app);
var io = require('socket.io').listen(server);

var root = __dirname;

var watchers = {};

app.use(function(req, res, next){
    var file = url.parse(req.url).pathname;
    //console.log(file);//测试代码
    //console.log('_____________');
    var mode = 'stylesheet';
    if(file[file.length - 1]=='/') {
        file += 'index.html';
        mode = 'reload';
    }
    createWatcher(file, mode);
    next();
});



app.use(express.static(root));

function createWatcher(file, event){
    var absolute = path.join(root, file);

    if(watchers[absolute]){
        return;
    }
    fs.watchFile(absolute, function(curr, prev){ //文件变动的时候触发
        //console.log(absolute + ':' + event);
        if(curr.mtime !== prev.mtime){  //文件的最后修改时间是否一致
            io.sockets.emit(event, file);
        }
    });
    watchers[absolute] = true;

}

server.listen(8888);


/***
 * 原理就是添加节点到html文件里面，让css文件重新被请求一次，重新过路由app.use
 * 然后其实css的路径没有变，在fs.watchFile函数里面就会发现文件被修改，然后会
 * 触发事件event
 *
 * 如果是html发生变化（手动修改）的话，则会触发reload事件，重新加载
 * */