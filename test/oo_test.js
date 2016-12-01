load('riot.js');
Riot.require('../turing.core.js');
Riot.require('../turing.oo.js');
Riot.require('fixtures/example_classes.js');

Riot.context('turing.oo.js', function() {
    given('a class with no initializer', function() {
        var noInit = new NoInitializer();
        should('still do something', noInit.doSomething()).equals('something');
    });
});

Riot.run();
