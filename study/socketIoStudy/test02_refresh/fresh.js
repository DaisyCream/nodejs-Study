/**
 * Created by DaisyCream on 16/1/22.
 */
var socket = io.connect();

var createLink = function(path){
    console.log('change',path);
    var head = document.getElementsByTagName('head')[0];
    var link = document.createElement('link');
    link.setAttribute('rel', 'stylesheet');
    link.setAttribute('type','text/css');

    link.setAttribute('href',path);
    head.appendChild(link);
};

socket.on('reload', function(){
    console.log('reload');
    window.location.reload();
});

socket.on('change', function(path){
    createLink(path);
});