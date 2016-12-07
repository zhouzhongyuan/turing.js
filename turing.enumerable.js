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
                    if(Object.prototype.hasOwnProperty.call(enumerable, key)) {
                        callback.call(context, enumerable[key], key, enumerable);
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
    },
    filter: function (enumerable, callback, context) {
        if(Array.prototype.filter && enumerable.filter === Array.prototype.filter){
            return enumerable.filter(callback, context);
        }
        var results = [];
        turing.enumerable.each(enumerable, function (value, index, list) {
            if(callback.call(context, value, index, list)){
                if(Object.prototype.toString.call(enumerable) === '[object Array]'){
                    results.push(value);
                }else{
                    results.push([index, value]);
                }
            }
        })
        return results;
    },
    detect: function (enumerable, callback, context) {
        var result;
        turing.enumerable.each(enumerable, function (value, index, list) {
            if(callback.call(context, value, index, list)){
                result = value;
                break;
            }
        })
        return result;
    },
}