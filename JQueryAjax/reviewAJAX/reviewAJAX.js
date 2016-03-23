/**
 * Created by DaisyCream on 15/12/2.
 */
//var xmlhttp;
//
//function loadDoc(url,func){
//    if (window.XMLHttpRequest)
//    {// code for IE7+, Firefox, Chrome, Opera, Safari
//        xmlhttp = new XMLHttpRequest();
//    }
//    else
//    {// code for IE6, IE5
//        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
//    }
//
//    xmlhttp.onreadystatechange = func;
//    xmlhttp.open("GET",url,true);
//    xmlhttp.send();
//}
//
//document.getElementById('btn').onclick = function(){loadDoc("reviewAJAX/jsonTxt.txt",function(){
//    if(xmlhttp.readyState==4 && xmlhttp.status==200){
//        var getDoc = xmlhttp.responseText;
//        var obj = eval("("+getDoc+")");
//        document.getElementById('text').innerHTML = obj.employees[0].firstName;
//    }
//})};

//var xhr;
//var getDoc;
//
//function loadDoc(url){
//    if(window.XMLHttpRequest){
//        xhr = new XMLHttpRequest();
//    }else{
//        xhr = new ActiveXObject("Microsoft.XMLHTTP");
//    }
//
//    xhr.onreadystatechange = function(){
//        if(xhr.readyState==4 && xhr.status==200){
//            getDoc = xhr.responseText;
//            //console.log(typeof getDoc);
//            //var obj = JSON.parse(getDoc);
//            //console.log(typeof obj);
//            //console.log(obj.employees[1]);
//        }
//    };
//    xhr.open('GET',url,true);
//    xhr.send();
//}
//
//loadDoc("./jsonTxt.txt");
//console.log(getDoc);


//function s(){
//    var j=0;
//    for(var i=0;i<5;i++){
//        setTimeout(function(){
//            //j++;
//            console.log(i);
//        },1);
//        //console.log(i);
//    }
//}
//
//s();
//
//var a = 10;
//
//function s(){
//    console.log(a);
//    //var a = 0;
//}
//
//s();


























