var o = function(){

};

o.prototype.m = function(i){
    console.log(i);
    return this;
};

var s = new o();

s.m(1).m(2).m(3);