//sayHi();//Hi
//
//function sayHi(){
//    console.log("Hi");
// /}

//condition = true;
//if(condition){
//    function sayHi(){
//        console.log("Hi");
//    }
//}else{
//    function sayHi(){
//        console.log("Yo");
//    }
//}


//var sayHi;
//
//if(condition){
//    sayHi = function(){
//        console.log("Hi");
//    };
//}else{
//    sayHi = function(){
//        console.log("Yo");
//    }
//}
//
//function factorial(num){
//    if(num <= 1){
//        return 1;
//    }else{
//        return num * arguments.callee(num-1);
//    }
//}
//
//
//var factorial = (function f(num){
//    if(num <= 1){
//        return 1;
//    }else{
//        return num * f(num-1);
//    }
//});


//function compare(value1, value2){
//    if(value1 < value2){
//        return -1;
//    }else if(value1 > value2){
//        return 1;
//    }else{
//        return 0;
//    }
//}
//
//var result = compare(5,10);


//function createCompareFunction(property){
//    return function(obj1, obj2) {
//        if (obj1[property] > obj2[property]) {
//            return 1;
//        } else if (obj1[property] < obj2[property]) {
//            return -1;
//        }else{
//            return 0;
//        }
//    }
//
//}
//
//var compareNames = createCompareFunction("name");
//var result = compareNames({name:"hi"},{name :"wa"});
//
//console.log(result);//-1
//
////销毁活动作用域链
//
//compareNames = null;

//var s = new Array(10);
//
//function createFunctions(){
//    var result = new Array();
//
//    for(var i=0; i < 10; i++){
//        result[i] = function(){
//            s[i] = i;
//        }()
//    }
//}
//
//var result = createFunctions();
//
//console.log(s);
//
//
//function createFunctions(){
//    var result = new Array();
//
//    for(var i=0; i<10; i++){
//        result[i] = function(num){
//            return function(){
//                return num;
//            }
//        }(i);
//    }
//    return result;
//}
//
//var result = createFunctions();
//console.log(result[1]());


//var name = "The Window";
//
//var object = {
//    name : "My Object",
//
//    getNameFunc : function(){
//        var that = this;
//        return function(){
//            return that.name;
//        };
//    }
//};
//
//console.log(object.getNameFunc()());//The Window

//var name = "The window";
//
//var object = {
//    name: "My object",
//
//    getName: function(){
//        return this.name
//    }
//};
//
//var s = {
//    name :"lala"
//};
//
//console.log(object.getName());//My object
//console.log((object.getName)());//My object
//console.log((object.getName = object.getName)());//The Window
//console.log((s.getName = object.getName)());
//console.log(s.getName());//lala


//
//function assiginHandler(){
//    var element = document.getElementById("someElement");
//
//
//    element.onclick = function(){
//        console.log(element.id);
//    };
//
//}

//
//function outputNumbers(count){
//    for(var i=0;i < count; i++){
//        console.log(i);
//    }
//    console.log(i);
//}


//function outputNumber(count){
//    (function(){
//        for(var i=0;i<count;i++){
//            console.log(i);
//        }
//    })();
//    console.log(i);//报错
//}

//var Person;
//
//(function(){
//
//    var name = "";
//
//    Person = function(value){
//        name = value;
//    };
//
//    Person.prototype.getName = function(){
//        return name;
//    };
//
//    Person.prototype.setName = function(value){
//        name = value;
//    };
//
//})();
//
//var person1 = new Person("11");
//console.log(person1.getName());//"11"
//var person2 = new Person("22");
//console.log(person2.getName());//"22"
//console.log(person1.getName());//"22"





//var singleton = function(){
//    var privateVariable = 10;
//
//    function privateFunction(){
//        return false;
//    }
//
//    return {
//
//        publicProperty :true,
//
//        publicMethod : function(){
//            privateVariable ++;
//            return privateFunction();
//        }
//    }
//
//};


//var application = function(){
//
//    //私有变量和函数
//    var components = new Array();
//
//    //初始化
//    components.push(new BaseComponent());
//
//    //公共
//    return {
//        getComponentCount : function(){
//            return components.length
//        },
//
//        registerComponent : function(component){
//            if(typeof component == "object"){
//                components.push(component);
//            }
//        }
//
//    }
//};

var singleton = function(){

    var privateVariable = 10;

    function privateFunction(){
        return false;
    }

    var object = new CustomType();

    object.publicProperty = true;

    object.publicMethod = function(){
        privateVariable++;
        return privateVariable;
    };

    return object;

};








































