var concurrencyCount = 0;
var fetchUrl = function(url, callback){
    var delay = parseInt((Math.random() * 100000) % 200, 10);
    concurrencyCount++;
    console.log('并发数' + concurrencyCount + '耗时' + delay);
    setTimeout(function(){
        concurrencyCount--;
        callback(null,  url + 'html content');
    }, delay);
};


var urls = [];
for(var i=0;i<30; i++){
    urls.push('we' + i);
}

var async = require('async');

async.mapLimit(urls, 5, function(url, callback){
    fetchUrl(url, callback);
});

console.log(module.main === module);