/**
 * Created by DaisyCream on 16/2/28.
 */
function route(handler, pathname){
    console.log("About to route a request for " + pathname);
    if(typeof handler[pathname] === 'function'){
        return handler[pathname]();
    }else{
        console.log("No request handler found for " + pathname);
        return "404 NOT FOUND";
    }
}

exports.route = route;