var option = {
    hostname: 'http://127.0.0.1',
    port: 8888,
    method: 'DELETE',
    href : 'http://127.0.0.1:8888/1',
    pathname: '/1',
    hearers:{
        'Content-Type':'text/plain'
    }
};

var http = require('http');

http.request(option, function(res){
    console.log('ok');
});