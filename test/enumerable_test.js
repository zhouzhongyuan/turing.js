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
    })
})
Riot.run();