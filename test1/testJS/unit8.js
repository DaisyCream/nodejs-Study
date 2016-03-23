/**
 * Created by DaisyCream on 16/3/13.
 */

//var a = "s";
//b = "c";
//global.c = 's';
//
//delete a;
//delete c;
//console.log(a);
//console.log(c);
//


var func = function(){};

var addEvent = function(target, event, func){
    if(target.attach){
        target.attach('on' + event, func);
    }
    if(target.addEventListener){
        target.addEventListener(event, func, false);
    }
};

function eventHandler(e){
    e = e || window.event;

    var target = e.target || e.srcElement;
}

function perventDefaultHanlder(e){
    e = e || window.event;

    if(e.preventDefault){
        e.preventDefault();
    }
    else{
        e.returnValue = false;
    }
}

function stopPropagationHanlder(e){
    e = e || window.event;
    if(e.stopPropagation){
        e.stopPropagation();
    }
    else{
        e.cancelBubble = true;
    }
}