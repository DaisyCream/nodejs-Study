/**
 * Created by DaisyCream on 16/2/29.
 */
function route(handle, pathname, req, res){
    console.log("route start");
    if(typeof handle[pathname] === "function"){
        handle[pathname](req, res);
    }else{
        res.statusCode = 404;
        res.write("Can't find the function");
        res.end();
    }
}

exports.route = route;