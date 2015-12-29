var flow = require('nimble');
var exec = require('child_process').exec;

function downloadNodVersion(version, destination, callback){
    var url = 'http://node.js/dist/node_v' + version + '.tag.gz';
    var filegpath = destination + '/' + version + '.tgz';
    exec('curl' + url + ' >' + filegpath, callback);
}

flow.series = ([
    function(callback){
        flow.parallel([
            function(callback){
                console.log('Downloading node v0.4.6 ...');
                downloadNodVersion('0.4.6', '/tmp', callback);
            },
            function(callback){
                console.log('Downloading node v0.4.7...');
                downloadNodVersion('0.4.7', '/tmp', callback);
            }
        ],callback);
    },
    function (callback) {
        console.log('Creating archive of download files ...');
        exec('taz cvf node',function(){
            console.log('All down!');
            callback();
        });
    }

]);


