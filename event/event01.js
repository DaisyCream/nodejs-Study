obj.api1(function(value1){
    obj.api1(value1,function(value2){
        obj.api1(value2,function(value3){
            obj.api1(value3,function(value4){
                callback(value4)
            });
        });
    });
});





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



var emitter = new require('events').EventEmitter();

emitter.on('step1',function(value1){
    obj.api1(value1,function(value2){
        emitter.emit('step2',value2);
    });
});

emitter.on('step2',function(value2){
    obj.api1(value2,function(value3){
        emitter.emit('step2',value3);
    });
});

emitter.on('step3',function(value3){
    obj.api1(value3,function(value4){
        emitter.emit('step2',value4);
    });
});

emitter.on('step4',function(value4){
    callback(value4);
});