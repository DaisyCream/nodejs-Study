var http = require('http');
var fs = require('fs');
var path = require('path'); //提供了文件路径相关的功能
var mime = require('mime'); //mime模块有根据文件扩展名得出MIME类型的能力
var cache = {}; //for the cache the file's content




/***
 * For the send the error
 * @param response
 */
function send404(response){
    response.writeHead(404,{'Content-Type':'text/plain'});
    response.write('Error 404: resource not found');
    response.end();
}


/***
 * Assistant function provide the server of File's data
 * @param response
 * @param filePath
 * @param fileContent
 */

function sendFile(response, filePath, fileContent){
    response.writeHead(200,
        {
            'Content-Type': mime.lookup(path.basename(filePath))
        }
    );
    response.end(fileContent);
}


/***
 * Provide static file serverProject01
 * if(in cache) find the content
 * else through absPath find the content and deposit in cache
 * if error send404
 * @param response
 * @param cache
 * @param absPath
 */

function serverStatic(response, cache, absPath){
    if(cache[absPath]){
        sendFile(response,absPath,cache[absPath]);
    }else{
        fs.exists(absPath, function(exists){
            if(exists){
                fs.readFile(absPath,function(err,data){
                    if(err){
                        send404(response);
                    }else{
                        cache[absPath] = data;
                        sendFile(response,absPath,data);
                    }
                });
            }else{
                send404(response);
            }
        });
    }
}


/***
 * serverProject01 for get the require and do something
 */

var server = http.createServer(function(require, response){
    var filePath = false;

    if(require.url == '/'){
        filePath = 'public/index.html';
    }else{
        filePath = 'public' + require.url;
    }

    var absPath = './' + filePath;
    serverStatic(response, cache, absPath);
});

server.listen(3000,function(){
    console.log('Server listening on port 3000');
});

var chatServer = require('./lib/chat_server');
chatServer.listen(server);