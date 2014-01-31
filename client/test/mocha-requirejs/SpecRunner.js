require.config({
    baseUrl: '../src',
    paths: {
        'jquery': '../../src/vendor/jquery/jquery-1.9.1',
        'knockout': '/src/vendor/knockout/knockout-2.3.0-debug',
        'mocha': '../../test/vendor/mocha',
        'chai': '../../test/vendor/chai',
        'PrettyStorage': '../../src/app/lib/PrettyStorage'
    },
    shim: {
        'jquery': {
            exports: '$'
        }
    },
    urlArgs: 'bust=' + (new Date()).getTime()
});



require(['require', 'chai', 'mocha', 'jquery'], function (require, chai) {

    // Chai
    var should = chai.should();
    expect = chai.expect;
    /*globals mocha */
    console.log('MOCHA SETUP');
    mocha.setup('bdd');
    console.log('MOCHA done');

    require([
        '../specs/PrettyStorageSpecs.js',
    ], function (require) {
        console.log('mochaPhantomJS:', typeof mochaPhantomJS);
        mocha.run();
    });

});