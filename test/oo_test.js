load('riot.js');
Riot.require('../turing.core.js');
Riot.require('../turing.oo.js');
Riot.require('fixtures/example_classes.js');

Riot.context('turing.oo.js', function() {
    given('a class with no initializer', function() {
        var noInit = new NoInitializer();
        should('still do something', noInit.doSomething()).equals('something');
    });
    given('简单的类',function () {
        var zhongyuan = new User('中原', 26);
        should('正确地实例化一个对象',zhongyuan.name).equals('中原');
    });
    given('一个继承的类',function () {
        var admin = new Admin('中原', 26),
            guset = new Guest('正在注册中……');
        should('正确地实例化一个对象',admin.name).equals('中原');
        should('继承的类，即子类，有自己独有的方法', admin.dangerousMethod()).equals('danger!');
        should('执行自定义的initializer', guset.state).equals('正在注册中……');
    });
});

Riot.run();