/**
 * Created by DaisyCream on 16/3/23.
 */
var http = require('http');
var io = require("socket.io");
var fs = require('fs');
var server = http.createServer(function(req, res){
    res.writeHead(200,{"Content-Type":"text/html"});
    var data="";
    fs.readFile("index.html","utf-8",function(error,chunk){
        if(error){
            console.log("file not exsist");
        }
        else{
            data+=chunk;
            res.end(data);
        }
    });
}).listen(8000);

var socket = io.listen(server);

socket.on("connection",function(client){
    client.on("message",function(event){
        console.log("Received message from client!",event);
        client.emit("emitMessage",{
            hello: "message received, wish you happy" + new Date().toString()
        });
    });

    client.on('disconnect',function(){
        console.log("Server has disconnect");
    });

    client.send("hello, I am the server");


});

