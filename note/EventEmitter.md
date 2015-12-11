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
	<th>
		<td>序号</td>
		<td>方法&描述</td>
	</th>
	<th>
		<tr>1</tr>
		<tr>
			<p>addListenner(event,listener)</p>
			为指定事件`添加`一个监听器到监听器数组的`尾部`。
		</tr>
	</th>
	<th>
		<tr>2</tr>
		<tr>
			<p>on(event,listener)</p>
			<p>为指定的事件`注册`一个监听器，接受一个字符串event和一个回调函数</p>
		</tr>
	</th>
	<th>
		<tr>3</tr>
		<tr>
			<p>once(event,listener)</p>
			<p>
				为指定时间注册一个单次的监听器，即监听器对多只会触发一次，触发后立即解除该监听器			</p>		
		</tr>
	</th>
	<th>
		<tr>4</tr>
		<tr>
			<p>removeListener(event,listener)</p>
			<p>移除指定事件的某个`监听器`，监听器必须是该事件已经注册过的监听器</p>
		</tr>
	</th>
	<th>
		<tr>5</tr>
		<tr>
			<p>removeAllListener(event)</p>
			<p>移除所有事件的所有监听器，如果指定事件，则移除指定事件的所有监听器</p>
		</tr>
	</th>
	<th>
		<tr>6</tr>
		<tr>
			<p>setMaxListener</p>
			<p>
				默认情况下，EventEmitter如果你添加的监听器超过10个就会输出警告信息。				setMaxListener函数用于提交监听器的限制数量
			</p>
		</tr>
	</th>
	<th>
		<tr>7</tr>
		<tr>
			<p>listener(event)</p>
			<p>返回指定事件监听器的数组</p>
		</tr>
	</th>
	<th>
		<tr>8</tr>
		<tr>
			<p>emit(event,[arg1],[arg2],[...])</p>
			<p>按参数的顺序执行每个监听器，如果事件有注册监听返回true，否会返回false</p>
		</tr>
	</th>
</table>


####3.2listenerCount(emitter,event)

`定义`：返回指定事件的监听器的数量

```javaScript 
	var emitter = new require('events').EventEmitter();
	emitter.on('some_event',function(){});
	var count = 		require('events').EventEmitter.listenerCount(emitter,'some_event')

```
####3.3事件





```javaScript


```