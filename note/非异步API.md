##非异步API
###1.定时器
- process.nextTick(function);

- setImmediate(function);

- setTimeOut(function, time)和setInterval(function, time)不详细说  

####1.1process.nextTick()

`定义`：将参数放入下一个tick(时间循环中的循环就叫做tick)中，
加入在要这句代码后面所有的同步代码之后执行

`调用方式`：是将所有的回调函数保存在一个数组中，在每轮循环中是会将数组中的回调函数一起执行

```javascript
	process.nextTick(function(){console.log("next1")});
	console.log(2);
	console.log(3);
	console.log(4);
	console.log(5);
```
result: 
2,
3,
4,
5,
next1


####1.2setImmediate()

`定义`：与process.nextTick()十分类似，但是process.nextTick调用方式的用数组，而setImmediate的调用方式是用链表来保存。

`调用方式`：用链表来保存，在每轮循环中执行链表中的一个回调函数。

```javaScript
	process.nextTick(function(){
    console.log("next1");
	});
	
	process.nextTick(function(){
	    console.log("next2")
	});
	
	setImmediate(function(){
	    console.log("setImm1");
	    process.nextTick(function(){console.log("next3")});
	});
	
	
	process.nextTick(function(){
	    console.log("next4");
	});
	
	
	
	setImmediate(function(){
	    console.log("setImm2");
	});
	
	
	setImmediate(function(){
	    console.log("setImm3");
	});
	
	setTimeout(function(){console.log("settimeout")});
```
result:next1,
next2,
next4,
settimeout,
setImm1,
setImm2,
setImm3,
next3;





```javascript
```