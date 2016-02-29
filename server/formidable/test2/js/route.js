/**
 * Created by DaisyCream on 16/2/29.
 */
var fs = require('fs');

function route(handle, pathname, req, res){
    console.log("route start");
    if(typeof handle[pathname] === "function") {
        handle[pathname](req, res);
    }else{
        imgData(pathname, res);
    }

}

function imgData(pathname, res){
    var path = '..' + pathname;

    var stream = fs.createReadStream(path);

    stream.pipe(res);

}

exports.route = route;