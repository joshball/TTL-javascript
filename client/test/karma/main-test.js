var tests = [];
for (var file in window.__karma__.files) {
    if (window.__karma__.files.hasOwnProperty(file)) {
        if (/\/specs\/.*Specs?\.js$/.test(file)) {
            console.log('Adding test: ', file);
            tests.push(file);
        }
    }
}
requirejs.config({
    // Karma serves files from '/base'
    baseUrl: '/base',

    paths: {
        'PrettyStorage' :           'src/app/lib/PrettyStorage',
        'jquery':                   'vendor/jquery/jquery-1.9.1',
        'knockout':                 'vendor/knockout/knockout-2.3.0.debug',
        'expect':                   'vendor/testlibs/expect',
        'mocha':                    'test/vendor/mocha',
        'chai':                     'test/vendor/chai'
    },

    shim: {
    },

    // ask Require.js to load these files (all our tests)
    deps: tests,

    // start test run, once Require.js is done
    callback: window.__karma__.start
});