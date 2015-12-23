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
`定义`：EventEmitter的每个事件由一个`事件名`和若干个`参数`组成,事件名是一个字符串，通常表达一定的含义。
`调用`：被依次调用，`事件参数`作为`回调函数`参数传递

###example1

```javaScript
	var events = require('events');
	var emitter = new events.EventEmitter();
	
	emitter.on('some_event',function(){
		console.log('build the listener event');
	});
	
	setTimeout(function(){//touch the event,after 1s
		emitter.emit('some_event');
	},1000);
```
result:build the listener event   -->after 1s than can console

###exampl2

```javaScript
	var emitter = new require('event').EventEmitter();
	emitter.on('someEvnet',function(arg1,arg2){
		console.log('listener1:' ,arg1,arg2);
	});
	emitter.on('someEvnet',function(arg1,arg2){
		console.log('listener2:' ,arg1,arg2);
	});
	
	emitter.emit('someEvent','arg1','arg2');//由一个事件名称和若干参数构成

```
result:listener1 arg1 arg2
listener2 arg1 arg2


###3.EventEmitter事件方法

###3.1

<table>
	<tr>
		<th>序号</th>
		<th>方法&描述</th>
	</tr>
	<tr>
		<td>1</td>
		<td>
			<p>addListenner(event,listener)</p>
			为指定事件`添加`一个监听器到监听器数组的`尾部`。
		</td>
	</tr>
	<tr>
		<td>2</td>
		<td>
			<p>on(event,listener)</p>
			<p>为指定的事件`注册`一个监听器，接受一个字符串event和一个回调函数</p>
		</td>
	</tr>
	<tr>
		<td>3</td>
		<td>
			<p>once(event,listener)</p>
			<p>
				为指定时间注册一个单次的监听器，即监听器对多只会触发一次，触发后立即解除该监听器			</p>		
		</td>
	</tr>
	<tr>
		<td>4</td>
		<td>
			<p>removeListener(event,listener)</p>
			<p>移除指定事件的某个`监听器`，监听器必须是该事件已经注册过的监听器</p>
		</td>
	</tr>
	<tr>
		<td>5</td>
		<td>
			<p>removeAllListener(event)</p>
			<p>移除所有事件的所有监听器，如果指定事件，则移除指定事件的所有监听器</p>
		</td>
	</tr>
	<tr>
		<td>6</td>
		<td>
			<p>setMaxListener</p>
			<p>
				默认情况下，EventEmitter如果你添加的监听器超过10个就会输出警告信息。				setMaxListener函数用于提交监听器的限制数量
			</p>
		</td>
	</tr>
	<tr>
		<td>7</td>
		<td>
			<p>listener(event)</p>
			<p>返回指定事件监听器的数组</p>
		</td>
	</tr>
	<tr>
		<td>8</td>
		<td>
			<p>emit(event,[arg1],[arg2],[...])</p>
			<p>按参数的顺序执行每个监听器，如果事件有注册监听返回true，否会返回false</p>
		</td>
	</tr>
</table>


####3.2listenerCount(emitter,event)

`定义`：返回指定事件的监听器的数量

```javaScript 
	var emitter = new require('events').EventEmitter();
	emitter.on('some_event',function(){});
	var count = 		require('events').EventEmitter.listenerCount(emitter,'some_event')

```
####3.3事件
<table>
	<tr>
		<th>序号</th>
		<th>事件&描述</th>
	</tr>
	<tr>
		<td>1</td>
		<td>
			<p>newListener</p>
			<p>该事件在添加新的监听器的时候被触发</p>
		</td>
	</tr>
	<tr>
		<td>2</td>
		<td>
			<p>removeListener</p>
			<p>从指定监听器数组中删除一个监听器，注意，此操作将会`改变`处于被删监听器之后的那些监听器的`索引`</p>
		</td>
	</tr>
</table>


####3.4实例

```javaScript
	var event = require('events');
	var eventEmitter = new event.EventEmitter();
	
	//listener1
	var listener1 = function(){
	    console.log('listener1 exe');
	};
	
	var listener2 = function(){
	    console.log('listener2 exe');
	};
	
	eventEmitter.addListener('connection',listener1);
	
	eventEmitter.on('connection',listener2);
	
	var eventListeners = 	require('events').EventEmitter.listenerCount(eventEmitter,'connection');
	console.log(eventListeners + ' connection event');
	
	//do connection event
	eventEmitter.emit('connection');
	
	//removeListener
	eventEmitter.removeListener('connection', listener1);
	console.log('listener1 can not be listener');
	
	
	eventEmitter.emit('connection');
	
	eventListeners = require('events').EventEmitter.listenerCount(eventEmitter,'connection');
	console.log(eventListeners + ' connection event');
	
	console.log('done');

```


###4.error事件

`定义`：EventEmitter 定义了一个特殊的事件 error，它包含了错误的语义，我们在遇到 异常的时候通常会触发 error 事件。当 error 被触发时，EventEmitter 规定如果没有响应的监听器，Node.js 会把它当作异常，退出程序并输出错误信息。我们一般要为会触发 error 事件的对象设置监听器，避免遇到错误后整个程序崩溃。例如：

```javaScript
	var events = require('events');
	var emitter = new events.EventEmitter();
	emitter.emit('error');

```






