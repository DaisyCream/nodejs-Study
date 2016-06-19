/**
 * Created by DaisyCream on 16/6/19.
 */

//group是用来做数组数据的

//ep.after('',length, callback);

//在异步操作中，我们需要在所有异步调用结束后，执行某些操作

//group可以知道异步调用的顺序，满足返回数据按发起异步调用的排序，就提供了group方法

var EventProxy = require('eventproxy');

var ep = EventProxy();

ep.after('got_file', file.length, function(list){
    //在所有文件异步执行完成后被执行
    //所有文件都存在list当中，按顺序排列
});

for(var i=0; i< files.length ;i++){
    fs.readFile(files[i], 'utf-8', ep.group('got_file'));

}