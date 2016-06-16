var cheerio = require('cheerio');
var express = require('express');
var app = express();

var $ = cheerio.load('<h2 class="title">Hello world</h2>');

$('h2.title').text('Hello there');
$('h2').addClass('welcome');


app.get('/',function(req, res){
    res.setHeader('content-type', 'text/html');
    res.send($.html());
});

app.listen(3000, function(){
    console.log('app running at port 3000');
});



