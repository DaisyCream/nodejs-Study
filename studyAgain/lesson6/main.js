var fibonacci = function(n){
    if(n > 10){
        throw new Error('n should <= 10');
    }

    if(n === 0){
        return 0;
    }
    if(n === 1){
        return 1;
    }



    return fibonacci(n-1) + fibonacci(n-2);
};

if(require.main === module){
    console.log(require);
    var n = Number(process.argv[2]);
    console.log('fibonacci ' + n , fibonacci(n));
}

exports.fibonacci = fibonacci;

