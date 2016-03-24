/**
 * Created by DaisyCream on 16/3/24.
 */
var io = require("socket.io");
var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req,res){
    res.writeHead(200,{
        "Content-Type" :"text/html"
    });
    fs.readFile("./index.html","utf-8",function(err,data){
        if(err){
            res.end("Can't find source");
        }
        res.end(data);
    })
}).listen(8000);

var socket = io.listen(server);

socket.on('connection',function(client){
    client.on("message",function(data){
        client.send(data + " server");
    });
});