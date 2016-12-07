load('riot.js');
Riot.require('../turing.core.js')
Riot.require('../turing.enumerable.js')

Riot.context('turing.enumerable.js', function () {
    given('数组',function () {
        var a = [1, 2, 3, 4, 5];
        should('each 迭代', function() {
            var count = 0;
            turing.enumerable.each(a, function(n) { count += 1; });
            return count;
        }).equals(5);
        should('map 迭代',function () {
            return turing.enumerable.map(a, function (n) {
                return n+1;
            })
        }).equals([2, 3, 4, 5, 6]);
        should('filter 迭代',function () {
            return turing.enumerable.filter(a,function (n) {
                return n % 2 === 0;
            })
        }).equals([2, 4]);
    })
    given('对象',function () {
        var obj = {one: '1', tow: '2', three: '3'};
        should('each 迭代',function () {
            var count = 0;
            turing.enumerable.each(obj, function (n) {
                count += 1;
            });
            return count;
        }).equals(3);
        should('map 迭代',function () {
            return turing.enumerable.map(obj, function (n) {
                return n +1;
            })
        }).equals(['11', '21', '31']);
        should('filter 迭代，应该返回一个多维数组',function () {
            return turing.enumerable.filter(obj, function (v, i) {
                return v < 2;
            })
        }).equals('one');
    })
})
Riot.run();