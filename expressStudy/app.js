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

