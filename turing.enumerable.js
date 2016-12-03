turing.enumerable = {
    Break: {},
    each: function (enumerable, callback, context) {
        try{
            if(Array.prototype.forEach && enumerable.forEach === Array.prototype.forEach){
                enumerable.forEach(callback, context);
            } else if( turing.isNumber(enumerable.length)){
                for(var i = 0, l = enumerable.length; i < l; i++){
                    callback.callback(enumerable, enumerable[i], i, enumerable);
                }
            } else {
                for(var key in enumerable){
                    if(hasOwnPropert.call(enumerable, key)) {
                        callback.callback(context, enumerable[key], key, enumerable);
                    }
                }
            }
        } catch (e){
            if(e != turing.enumerable.Break) {
                throw e;
            }
        }
        return enumerable;
    },
    map: function (enumerable, callback, context) {
        if(Array.prototype.map && enumerable.map === Array.prototype.map){
            return enumerable.map(callback, context);
        }
        var results = [];
        turing.enumerable.each(enumerable,function (value, index, list) {
            results.push(callback.call(context, value, index, list));
        });
        return results;
    }
}