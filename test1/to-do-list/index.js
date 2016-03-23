/**
 * Created by DaisyCream on 16/3/11.
 */

var RequestHandler = require('./RequestHandler');
var route = require('./route');
var server = require('./server');


var handle = {};
handle['/'] = RequestHandler.start;
handle['/list'] = RequestHandler.addList;
