/**
 * Created by DaisyCream on 16/2/29.
 */
var server = require("./server");
var route = require("./route");
var requestHandler = require("./requestHandler");

var handle = {};
handle["/"] = requestHandler.start;
handle["/upload"] = requestHandler.upload;

server.start(route.route, handle);