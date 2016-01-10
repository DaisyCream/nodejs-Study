/**
 * Created by DaisyCream on 15/12/2.
 */
var xmlhttp;

function loadDoc(url,func){
    if (window.XMLHttpRequest)
    {// code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();
    }
    else
    {// code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }

    xmlhttp.onreadystatechange = func;
    xmlhttp.open("GET",url,true);
    xmlhttp.send();
}

document.getElementById('btn').onclick = function(){loadDoc("reviewAJAX/jsonTxt.txt",function(){
    if(xmlhttp.readyState==4 && xmlhttp.status==200){
        var getDoc = xmlhttp.responseText;
        var obj = eval("("+getDoc+")");
        document.getElementById('text').innerHTML = obj.employees[0].firstName;
    }
})};