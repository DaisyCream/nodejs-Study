var express = require("express");
var http = require('http');

var app = express();
var router = express.Route();


//use是一定有next 这个参数，其他的METHOD方法不一定有，但是因为use是中间件
router.use(function timeLog(req, res, next){
    console.log("Time" + Date.now());
    next();
});

router.get('/', function(req, res){
    res.send('Add a book');
});

router.get('/about',function(req, res){
    res.send('About birds');
});

module.exports = router;