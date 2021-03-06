(function (global) {
    var turing = {
        VERSION: '0.01',
        lesson: 'Part 1: Library Architecture'
    };
    turing.isNumber = function (object) {
        return (object === +object) || (toString.call(object) === '[object Number]')
    }
    if(global.turing){
        throw new Error('turing has already been defined');
    } else {
        global.turing = turing;
    }
})(typeof window === 'undefined' ? this : window);