//var s = "Hello World";
//
//if(s){
//    console.log("Value is true");
//}

//var a = "0.1";
//
//console.log(Number(a));

//var s = '1';
//
//console.log(s.charCodeAt(0));

//var n = true;
//console.log(Number(n));

//var obj = function(){};
//obj.prototype = {
//    x:1,
//    y:2
//
//};
//
//var s = new obj();
//var n = s;
//n.m = 1;
//
//console.log(s.x);
//console.log(s.m);


//var scope = "global";
//
//function f(){
//    console.log(scope);
//    scope = "local";
//    console.log(scope);
//}
//
//f();
//
//var str = ["join","haha","wah"];
//
//console.log(str.join("##"));

//function compare(value1, value2){
//    if(value1 < value2){
//        return 1;
//    }else if(value1 > value2){
//        return -1;
//    }else{
//        return 0;
//    }
//}
//
//var values = [0,1,5,10,15];
////values.sort(compare);
//values.reverse();
//console.log(values);
//
//var colors1 = ["red", "green", "blue"];
//var colors2 = colors1.concat("yellow", ["black", "brown"]);
//console.log(colors1);
//console.log(colors2);


//
//var colors = ["red","green","blue","yellow","purple"];
//colors.splice(1,0,"black");
//console.log(colors);

//var number = [1,2,3,4,5,4,3,2,1];
//
//console.log(number.indexOf(4));
//console.log(number.lastIndexOf(4));

//var person = {name : "nick"};
//var people = [{ name : "nick"}];
//var people1 = [person];
//
//console.log(people === people1);//false

//
//var number = [1,2,3,4,5,4,3,2,1];
//
//var everyResult = number.every(function(item, index, array){
//    return (item > 2);
//});
//
//console.log(everyResult);//false
//
//var someResult = number.some(function(item, index, array){
//    return (item > 2);
//});
//
//console.log(someResult);//true
//
//
//
//var filterResult = number.filter(function(item, index, array){
//    return (item > 2);
//});
//
//console.log(filterResult);
//
//var mapResult = number.map(function(item, index, array){
//    return (item * 2);
//}).join("**");
//
//console.log(mapResult);
//
//var foreachResult = number.forEach(function(item, index,array){
//    //执行某些操作
//});

//function createComparisonFunction(propertyName){
//    return function(object1, object2){
//        var value1 = object1[propertyName];
//        var value2 = object2[propertyName];
//
//        if(value1 < value2){
//            return -1;
//        }else if(value1 > value2){
//            return 1;
//        }else{
//            return 0;
//        }
//    }
//}
//
//var data = [{name:"lili",age:"10"},{name:"ahha",age:"20"}];
//
//data.sort(createComparisonFunction("age"));
//
//console.log(data);//[ { name: 'ahha', age: '20' }, { name: 'lili', age: '10' } ]
//


//
//function factorial(num){
//    if(num <= 1){
//        return 1;
//    }else{
//        return num * arguments.callee(num-1);
//    }
//}


//var s = function(){
//    console.log("This is s");
//};
//
//var m = s;
//
//s = function(){
//    console.log("new s");
//};
//
//m();
//s();

//
//function outer(){
//    inner();
//}
//
//function inner(){
//    console.log(inner.caller);
//}
//
//outer();

////Object构造函数也会像工厂方法一样，根据传入值的类型返回相应基本包装类型，
//// 如下，把字符串传给Object构造函数，就会创建Boolean实例。
//var obj = new Object("some text");
//console.log(obj instanceof String);//true

//var value = "25";
//var number = Number(value);
//console.log(typeof number);//number
//
//var obj = new Number(value);
//console.log(typeof obj);//object
//
//var num = 10;
//var str = String(num);
//console.log(typeof str);//string

//
//var falseObject = new Boolean(true);
//var s = true;
//console.log(typeof s);
//console.log(typeof falseObject);//object
//console.log(falseObject instanceof Boolean);//true
//console.log(falseObject.valueOf());//true

//var stringObject = new String("hello world");
//
//var stringValue = "hello world";
//
//console.log(stringValue.slice(3));//"lo world"
//console.log(stringValue.substring(3));//"lo world"
//console.log(stringValue.substr(3));//"lo world"
//console.log(stringValue.slice(3,7));//"lo w"
//console.log(stringValue.substring(3,7));//"lo w"
//console.log(stringValue.substr(3,7));//"lo worl"
//
//
//console.log(stringValue.slice(-3));//"rld"
//console.log(stringValue.substr(-3));//"rld"
//console.log(stringValue.substring(-3));//"hello world"
//console.log(stringValue.slice(3, -4));//"lo w"
//console.log(stringValue.substring(3, -4));//"lo world"
//console.log(stringValue.substr(3,-4));//""


//var stringValue = "     hello world      "
//var trimStringValue = stringValue.trim();
//console.log(trimStringValue);
//console.log(stringValue);


//
//var stringValue = "hello world";
//console.log(stringValue.toLowerCase());
//console.log(stringValue.toUpperCase());

//var stringValue = "yellow";
//console.log(stringValue.localeCompare("brick"));//1
//console.log(stringValue.localeCompare("yellow"));//0
//console.log(stringValue.localeCompare("zoo"));//-1
//

//var uri = "http%3A%2Fwww.wrox.com%2Fillegal%20value.htm%23start";
//
//console.log(decodeURI(uri));//http%3A%2Fwww.wrox.com%2Fillegal value.htm%23start
//console.log(decodeURIComponent(uri));//http:/www.wrox.com/illegal value.htm#start
//
//
//
//var person = new Object();
//person.name = "nicholas";
//person.age = 29;
//person.job = "Software Engineer";
//
//person.sayName = function(){
//    console.log(this.name);
//};


//var person = {
//    name: "nicholas",
//    age: 29,
//    job: "Software Engineer",
//
//    sayName: function(){
//        console.log(this.name);
//    }
//
//};

//
//var person = {};
//Object.defineProperty(person, "name", {
//    writable: false,
//    value: "Nicholas"
//});

//var book = {
//    _year: 2004,
//    edition: 1
//};
//
//Object.defineProperty(book, "year", {
//    get : function(){
//        return this._year;
//    },
//
//    set: function(newValue){
//
//        if(newValue > 2004) {
//            this._year = newValue;
//            this.edition += newValue - 2004;
//        }
//    }
//
//});
//
//
//book.year = 2005;
//console.log(book.edition);//2


//var book = {};
//Object.defineProperties(book, {
//    _year: {
//        value: 2004,
//        writable: true
//    },
//
//    edition: {
//        value: 1,
//        writable: true
//    },
//
//    year: {
//        get: function(){
//            return this._year
//        },
//
//        set: function(newValue){
//            if(newValue > 2004){
//                this._year = newValue;
//                this.edition += newValue - 2004;
//            }
//        }
//    }
//
//});
//
//var description = Object.getOwnPropertyDescriptor(book, "_year");
//console.log(description.value);
//console.log(description);



function Person(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
    this.sayName = function () {
        console.log(this.name);
    };
}
//
//var person1 = new Person("Nick", 29, "ss");
//var person2 = new Person("zhang", 18, "ww");
//
//
//console.log(person1.constructor);//[Function: Person]
//console.log(person2.constructor == Person);//true
//
//console.log(person1 instanceof Object);//true
//console.log(person1 instanceof Person);//true
//
//
//
//var person1 = Person("Nick", 29, "ss");
//var person2 = Person("Nick", 29, "ss");
//
////console.log(person1 === person2);
//
//
//function Person(name, age, job){
//    this.name = name;
//    this.age = age;
//    this.job = job;
//    this.sayName = sayName;
//}
//
//function sayName(){
//    console.log(this.name);
//}
//
//var person1 = new Person("zyy",21,"ss");
//var person2 = new Person("sda", 20, "asd");
//
//console.log(person1.sayName === person2.sayName);//true
//


//function Person(){
//}
//
//Person.prototype.name = "Nick";
//Person.prototype.age = 29;
//Person.prototype.job = "software";
//Person.prototype.sayName = function(){
//    console.log(this.name);
//};
//
//var person1 = new Person();
//console.log(person1.name);
//
//var person2 = new Person();
//console.log(person2.name);
//
//console.log(person1.constructor);
//console.log(Person.prototype.constructor);//Person
//
////console.log(person1.__proto__(""));
//
//console.log(Person.prototype.isPrototypeOf(person1));
//
//
//console.log(Object.getPrototypeOf(person1));
////Person { name: 'Nick', age: 29, job: 'software', sayName: [Function] }
//
//person1.name = "haha";
//console.log(person1.name);//"haha"
//console.log(person2.name);//"Nick"

//delete person1.name;
//console.log(person1.name);//"Nick"

//person1.name = "haha";
//console.log(person1.hasOwnProperty("name"));//true
//console.log(person2.hasOwnProperty("name"));//false

//console.log(Object.getOwnPropertyDescriptor(Person, "name"));


//
//function Person(){
//}
//
//Person.prototype.name = "Nick";
//Person.prototype.age = 29;
//Person.prototype.job = "software";
//Person.prototype.sayName = function(){
//    console.log(this.name);
//};
//
//var person1 = new Person();
//var person2 = new Person();
//
//console.log(person1.hasOwnProperty("name"));//false
//console.log("name" in person1);//true
//

//var o = {
//    toString : function(){
//        return "my Object";
//    }
//};
//
//for (var prop in o){
//    if(prop == "toString"){
//        console.log("Found toString");
//    }
//}
//
//
//var keys = Object.keys(Person.prototype);
//console.log(keys);//[ 'name', 'age', 'job', 'sayName' ]
//
//var p1 = new Person();
//p1.name = "sd";
//p1.age = 20;

//var p1Keys = Object.keys(p1);
//console.log(p1Keys);//[ 'name', 'age' ]
//
//
//var keys1 = Object.getOwnPropertyNames(Person.prototype);
//console.log(keys1);
////[ 'constructor', 'name', 'age', 'job', 'sayName' ]
//
//
//
//function Person(){
//
//}
//
//Person.prototype = {
//    constructor: Person,
//    name : "wahaha",
//    age : 29,
//    job : "ss",
//    sayName : function(){
//        console.log(this.name);
//    }
//};
//
//
//var p1 = new Person();
//console.log(p1.constructor);//Person
//
//var  friend = new Person();
//
//Person.prototype.sayHi = function(){
//    console.log("Hi");
//};
//
//friend.sayHi();//"Hi"





//Person.prototype = {
//    constructor: Person,
//    name : "wahaha",
//    age : 29,
//    job : "ss",
//    friends : ["Shelby", "Court"],
//    sayName : function(){
//        console.log(this.name);
//    }
//};
//
//
//var p1 = new Person();
//var p2 = new Person();
//
////console.log(Object.getOwnPropertyNames(Person.prototype));
//
//
//p1.friends.push("ss");
//console.log(p2.friends);//[ 'Shelby', 'Court', 'ss' ]

//function Person(name, age, job){
//    this.name = name;
//    this.age = age;
//    this.job = job;
//    this.friends = ["Shelby"];
//}
//
//Person.prototype = {
//    constructor : Person,
//    sayName : function(){
//        console.log(this.name);
//    }
//};
//
//var person1 = new Person("Nick", 29, "hahah");
//var person2 = new Person("greg", 27, "doc");
//
//person1.friends.push("Van");
//console.log(person1.friends);//[ 'Shelby', 'Van' ]
//console.log(person2.friends);//[ 'Shelby' ]
//console.log(person1.friends === person2.friends);//false
//console.log(person1.sayName === person2.sayName);//true
//
//Person.prototype.sayName = function(){
//    console.log("wahah");
//};
//
//person1.sayName();
//
//

//function SuperType(){
//    this.property = true;
//}
//
//SuperType.prototype.getSuperValue = function(){
//    return this.property;
//};
//
//function SubType(){
//    this.subproperty = false;
//}
//
//SubType.prototype = new SuperType();
//
//SubType.prototype.getSubValue = function(){
//    return this.subproperty;
//};
//
//SubType.prototype.getSuperValue = function(){
//    return false;
//};
//
//
//
//var instance = new SubType();
//console.log(instance.getSuperValue());//true
//
////console.log(Object.getPrototypeOf(instance));//SuperType
//
//console.log(instance instanceof SubType);//true
//
//var s1 = new SuperType();
//console.log(s1.getSuperValue());//true

//
//function SuperType(){
//    this.color = ["red", "blue"];
//}
//
//function SubType(){
//    SuperType.call(this);
//}
//
//var instance1 = new SubType();
//instance1.color.push("black");
//console.log(instance1.color);//[ 'red', 'blue', 'black' ]
//
//var instance2 = new SubType();
//console.log(instance2.color);//[ 'red', 'blue' ]
//
//console.log(SubType instanceof SuperType);//false


//function SuperType(name){
//    this.name = name;
//}
//
//function SubType(name){
//    SuperType.call(this, name);
//    this.age = 29;
//}
//
//SuperType.prototype.sayName = function(){
//    console.log(this.name);
//};
//
//var s1 = new SubType("wahha");
//console.log(s1.name);//wahha
//console.log(s1.age);//29
//
//
//s1.sayName();


//function SuperType(name){
//    this.name = name;
//    this.color = ["red"];
//}
//
//SuperType.prototype.sayName = function(){
//    console.log(this.name);
//};
//
//function SubType(name, age){
//    SuperType.call(this,name);
//    this.age = age;
//}
//
//SubType.prototype = new SuperType();
//
//SubType.prototype.sayAge = function(){
//    console.log(this.age);
//};
//
//var instance1 = new SubType("Nicholas", 29);
//instance1.color.push("black");
//console.log(instance1.color);
//instance1.sayAge();
//instance1.sayName();
//
//
//var instance2 = new SubType("Greg", 27);
//console.log(instance2.color);
//instance2.sayAge();
//instance2.sayName();
//console.log(SubType.prototype);
//
//console.log(instance1);
//
//function s(){
//    this.name = "s";
//}
//
//s.prototype.name = "m";
//
//var o = new s();
//console.log(s.name);//s


//
//function createAnother(original){
//    var clone = object(original);
//    clone.sayHi = function(){
//        console.log("Hi");
//    };
//    return clone;
//}
//
//
//var person = {
//    name : "haha"
//};
//
//var personA = createAnother();
//personA.sayHi();//Hi




//function object(o){
//    function F(){}
//    F.prototype = o;
//    return new F();
//}
//
//function inheritPrototype(subType, superType){
//    var prototype = object(superType.prototype);
//    prototype.constructor = subType;
//    subType.prototype = prototype;//只传了属性进来
//}
//
//
//function SuperType(name){
//    this.name = name;
//    this.colors = ["red", "blue", "green"];
//}
//
//var s = new SuperType("s");
//
//SuperType.prototype.sayName = function(){
//    console.log(this.name);
//};
//
//function SubType(name, age){
//    SuperType.call(this,name);
//    this.age = age;
//}
//
//inheritPrototype(SubType, SuperType);
//
//SubType.prototype.sayAge = function(){
//    console.log(this.age);
//};
//
//var sub = new SubType("ss",23);
//
//console.log(sub instanceof SuperType);









































