/**
 * Created by DaisyCream on 16/2/29.
 */
function route(handle, pathname, res, req){
    console.log("route already get " + pathname);
    if(typeof handle[pathname] === "function"){
        handle[pathname](res, req);
    }else{
        res.writeHead(404,{
            'Content-Type' : "text/plain"
        });
        res.write("pathname is error");
        res.end();
    }
}

exports.route = route;