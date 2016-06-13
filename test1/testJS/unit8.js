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

//
//var func = function(){};
//
//var addEvent = function(target, event, func){
//    if(target.attach){
//        target.attach('on' + event, func);
//    }
//    if(target.addEventListener){
//        target.addEventListener(event, func, false);
//    }
//};
//
//function eventHandler(e){
//    e = e || window.event;
//
//    var target = e.target || e.srcElement;
//}
//
//function perventDefaultHanlder(e){
//    e = e || window.event;
//
//    if(e.preventDefault){
//        e.preventDefault();
//    }
//    else{
//        e.returnValue = false;
//    }
//}
//
//function stopPropagationHanlder(e){
//    e = e || window.event;
//    if(e.stopPropagation){
//        e.stopPropagation();
//    }
//    else{
//        e.cancelBubble = true;
//    }
//}




//window.moveBy(-100,30);
//
//var leftPos = (typeof window.screenLeft == "number")?
//                window.screenLeft : window.screenX;
//var topPos = (typeof window.screenTop == "number")?
//                window.screenTop : window.screenY;
//
//console.log(leftPos);

//
//var client = function(){
//
//    var engine = {
//
//        ie: 0,
//        gecko: 0,
//        webkit: 0,
//        khtml: 0,
//        opera: 0,
//
//        ver : null
//    };
//
//    return {
//        engine: engine
//    }
//}();
//
//
//console.log(client.engine.ie);
//
//if(client.engine.ie){
//
//}else if(client.engine.gecko > 1.5){
//    if(client.engine.ver == '1.8.1'){
//
//    }
//}
//
//
//
//var ua = navigator.userAgent;
//
//var p = navigator.platform;
//
//if(window.opera){
//    engine.ver = window.opera.version();
//    engine.opera = parseFloat(engine.ver);
//}else if(/AppleWebkit\/(\s+)/.test(ua)){
//    engine.ver = RegExp['$1'];
//    engine.webkit = parseFloat(engine.ver);
//}

//var u = document.getElementsByTagName('ul')[0];
//
//if(l.nodeType == 1){
//    console.log(l.nodeName);//LI
//    console.log(l.nodeValue);//null
//}

//console.log(u.childNodes);
//
//var firstChild = u.childNodes[0];
//var s1 = u.childNodes[2];
//var secondChild = u.childNodes.item(1);
//var count = u.childNodes.length;

//sprint();
//
//var n = u.firstChild;
////console.log();
//
//for(var i=0;i<u.childNodes.length;i++){
//    var m = u.lastChild;
//
//    u.insertBefore(m,n);
//
//}
//
//sprint();
////console.log(s1);
////console.log(firstChild);
////console.log(secondChild);
////console.log(count);
//
//function sprint(){
//    for(var i=0;i < u.childNodes.length;i++){
//        console.log(u.childNodes.item(i));
//    }
//}

//function converToArray(nodes){
//    var array = null;
//    try{
//        array = Array.prototype.slice.call(nodes, 0);
//    }catch(ex) {
//        array = new Array();
//        for(var i= 0,len = nodes.length; i < len ; i++){
//            array.push(nodes[i]);
//        }
//    }
//    return array;
//}
//
//var s = converToArray(u.childNodes);
//console.log(u.ownerDocument);//document
//console.log(s);


//var deepList = u.cloneNode(true);
//console.log(deepList.childNodes.length);//13
//
//var shallowList = u.cloneNode(false);
//console.log(shallowList.childNodes.length);//0



//var html = document.documentElement;
//console.log(html);
//console.log(document.firstChild);
////console.log(html === document.ch);
//console.log(html === document.childNodes[1]);

//var ul = document.getElementsByTagName('ul')[0];

//console.log(ul.onclick);//function onclick(event){console.log(1)}
//
//console.log(ul.getAttribute('onclick'));//console.log(1)

//function outputAttributes(element){
//    var pairs = new Array(),
//        attrName,
//        attrValue,
//        i,
//        len;
//
//    for(i=0,len=element.length;i<len;i++){
//        attrName = element.attribute.nodeName;
//        attrValue = element.attribute.nodeValue;
//        if(element.attribute.specified){
//            pairs.push(attrName + "=\"" + attrValue +"\"");
//        }
//    }
//    return pairs.join(" ");
//}

var div = document.getElementById('ll');

//console.log(div.dataset.myname);wahah
//div.dataset.myname = "nishizhu";
//
//console.log(div.dataset.myname);//nishizhu
//console.log(div.myname);//undefined

div.innerHTML = "<span><b>wahaha</b></span>";

































