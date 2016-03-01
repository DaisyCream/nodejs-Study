/**
 * Created by DaisyCream on 16/2/29.
 */
function route(handle, pathname, res, postData){
    if(typeof handle[pathname] === "function"){
        console.log("route already get " + pathname);
        handle[pathname](res, postData);
    }else{
        res.writeHead(404,{
            'Content-Type' : "text/plain"
        });
        res.write("pathname is error");
        res.end();
    }
}