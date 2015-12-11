#EventEmitter

###1.创建EventEmitter对象

```javaScript
	var events = require('events');//引入events模块
	var eventEmitter = events.EventEmitter;//创建了EventEmitter对象
	var emitter = new eventEmitter();//创建EventEmitter实例
	
	//可以由下面一句话概括
	var event = new require('events').EventEmitter();
```

###2.EventEmitter事件

```javaScript
	var events = require('events');
	var emitter = new events.EventEmitter();
	
	emitter.on('some_event',function(){
		console.log('build the listener event');
	});
	
	emitter.emit('some_event');//touch the event
	
	

```




```javaScript


```




```javaScript


```