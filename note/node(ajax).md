##NODE(NO.1)

jquery实现

```javascript
	$(document).ready(function(){
       $("#btn").click(function(){
            $("#text").load("/node.js(Study)/JQueryAjax/jsonTxt01.txt h1");
        });
   	});
```


js实现
```javascript

    window.onload = function() {
        var text = document.getElementById("text");
        document.getElementById('btn').onclick = function () {
            var xmlHttp;
            if (window.XMLHttpRequest)
                xmlHttp = new XMLHttpRequest();
            else
                xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");

            xmlHttp.onreadystatechange = function () {
                if (xmlHttp.status == 200 && xmlHttp.readyState == 4) {
                    var htmlStr = xmlHttp.responseText;//获取的是一string
                    var node = strToNode(htmlStr);//获取到想要的html元素

                    text.innerHTML = "";//清空text的文本节点，或许下面1，2
                    //1.var s = text.childNodes[0];
                    //2.text.removeChild(s);

                    text.appendChild(node);//将node节点加入

                }
            };
            xmlHttp.open("GET", "/node.js(Study)/JQueryAjax/jsonTxt01.txt", true);
            xmlHttp.send();
        }
    };

    function strToNode(str){
        var node1 = document.createElement("div");
        node1.innerHTML = str;//将string变成html
        var s1 = node1.getElementsByTagName("h2")[0];//获取想要的节点
        return s1;//返回节点
    }
```