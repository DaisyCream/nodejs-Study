/**
 * Created by DaisyCream on 16/3/11.
 */

var fs = require('fs');
var querystring = require('querystring');

function start(data, res){
    var stream = fs.createReadStream('./index.html');
    res.writeHead(200,{
        'Content-Type' : 'text/html'
    });

    stream.pipe(res);
}

function addList(data, res){


}

exports.start = start;
exports.addList = addList;
