/**
 * Created by DaisyCream on 16/2/28.
 */
var server = require('./server');
var route = require('./route');
var requestHandler = require('./requestHandler');

var handler = {};
handler['/'] = requestHandler.start;
handler["/upload"] = requestHandler.upload;
server.start(route.route, handler);
