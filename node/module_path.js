Module._extenstions['.json'] = function(module, filename){
    var content = NativeModule.required('fs').readFileSync(filename, 'utf8');
    try {
        module.exports = JSON.parse(stripBom(content));
    }
    catch(err){
        err.message = filename + ": " + err.message;
        throw err;
    }
};