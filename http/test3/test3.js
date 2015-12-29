var ss = {
    'aa':1,
    'bb':2,
    'cc':3
};

var s = 'aa';

for(var index in ss){
    if(s != index){
        console.log(index);
    }
}
