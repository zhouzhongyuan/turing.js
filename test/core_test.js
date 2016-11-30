load('riot.js');
Riot.require('../turing.core.js');

Riot.context('turing.core.js',function () {
    given('the turing object', function () {
        should('be gloabal and accessible', turing).isNotNull();
        should('return a VERSION', turing.VERSION).isNotNull();
        should('be turing complete', true).isTrue();
    });
})

Riot.run();
