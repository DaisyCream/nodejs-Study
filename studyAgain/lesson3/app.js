
var express = require('express');
var app = express();
var superagent = require('superagent');
var cheerio = require('cheerio');

app.get('/', function(req, res){
    superagent.get('http://cnodejs.org/')
        .end(function(err, sers){
            if(err){
                return next(err);
            }

            var $ = cheerio.load(sers.text);
            var items = [];
            $('#topic_list .topic_title').each(function(index, element){
                var $element = $(element);
                items.push({
                    title : $element.attr('title'),
                    href : $element.attr('href')
                })

            });
            res.send(items);
        });

});


app.listen(3000, function(){
    console.log('app running at port 3000');
});