/**
 * Created by DaisyCream on 16/2/28.
 */
var server = require('./server');
var route = require('./route');

server.start(route.route);