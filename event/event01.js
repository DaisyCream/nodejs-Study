/*****************nolma function*********************/
obj.api1(function(value1){
    obj.api2(value1,function(value2){
        obj.api3(value2,function(value3){
            obj.api4(value3,function(value4){
                callback(value4)
            });
        });
    });
});



/*****************slice function*********************/

var handel1 = function(value1){
    obj.api2(value1,handel2);
};

var handel2 = function(value2){
    obj.api3(value2,handel3);
};

var handel3 = function(value3){
    obj.api4(value3,handel4);
};

var handel4 = function(value4){
    callback(value4)
};


obj.api1(handel1);

/*****************event function*********************/

var emitter = new require('events').EventEmitter();

emitter.on('step1',function(){
    obj.api1(function(value1){
        emitter.emit('step2',value1);
    });
});

emitter.on('step2',function(value1){
    obj.api2(value1,function(value2){
        emitter.emit('step3',value2);
    });
});

emitter.on('step3',function(value2){
    obj.api2(value2,function(value3){
        emitter.emit('step4',value3);
    });
});


emitter.on('step4',function(value3){
    obj.api3(value3,function(value4){
        callback(value4);
    });
});



emitter.emit('ste1');

/******than********/
