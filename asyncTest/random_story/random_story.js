var fs = require('fs');
var request = require('request');//本地HTTP服务器
var htmlParser = require('htmlparser');
var configFilename = './rss_feeds.txt';

function checkForRSSFile(){ //确保包含RSS预定源URL列表的文件存在
    fs.exists(configFilename, function(exists){
        if(!exists){
            return next(new Error('Missing RSS file' + configFilename));
        }

        next(null, configFilename);
    });
}

function readRSSFile(configFilename){ //读取并解析包含预订源的URL文件
    fs.readFile(configFilename, function(err, feedList){
        if(err) return next(err);

        feedList = feedList
                    .toString()
                    .replace(/^\s+|\s+$/g,'')
                    .split('\n');
        var random = Math.floor(Math.random()*feedList.length);
        next(null, feedList(random));
    });
}

function downloadRssFeed(feedUrl){ //向选定的预订源发送HTTP请求以获取数据
    request({url: feedUrl}, function(err, res, body){
        if(err) next(err);
        if(res.statusCode != 200){
            return next(new Error("Abnormal response status code!"))
        }

        next(null, body);
    });
}

function parserRssFeed(res){ //将预订源数据解析到一个条目数组中
    var handler = new htmlParser.RssHandler();
    var parser = new htmlParser.Parser(handler);
    parser.parserCpmplete(res);

    if(!handler.dom.item.length){
        next(new Error('No RSS item found'));
    }

    var item = handler.dom.item.shift();
    console.log(item.title);
    console.log(item.link);

}

var tasks = [
    checkForRSSFile,
    readRSSFile,
    downloadRssFeed,
    parserRssFeed
];

function next(err, result){
    if(err) throw err;

    var currentTask =  tasks.shift();
    currentTask(result);
}