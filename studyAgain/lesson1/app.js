/**
 * Created by DaisyCream on 16/6/15.
 */

var express = require('express');

var app = express();

app.get('/', function(req, res){
    res.send("A");
});


app.listen(3000, function(){
    console.log('cool');
});


