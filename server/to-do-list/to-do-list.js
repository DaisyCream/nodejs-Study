var http = require('http');

var list = [];

var html = '<html><head>' +
    '<title>ToDoList</title>' +
    '</head>' +
    '<body>' +
    '<h1>ToDoList</h1>' +
    '<div id="list"></div>' +
    '<form action="/" method="post">' +
    '<input type="text">' +
    '<input type="submit">' +
    '</from>' +
    '</body></html>';



var server = http.createServer(function(req, res){
    if(req.url == '/'){
        switch(req.method){
            case 'GET':
                res.end(html);
                break;
            case 'POST':

                break;
            default :
                console.log('Request method is error');
                res.statusCode = 400;
        }

    }
});


function getData(req){
    var body = '';
    req.on('data', function(data){
        body+=data;
    });
}


server.listen(3000);
console.log('Server running at 127.0.0.1:3000/');
