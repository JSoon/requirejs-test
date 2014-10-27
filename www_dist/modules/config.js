/**
 * requirejs common config
 */
define(function () {
    return requirejs.config({
        baseUrl: 'modules',
        paths: {
            /**
             * lib path
             */
            'jquery': 'lib/jquery', // v1.11.1
            'jquery.shimTest': 'lib/jquery.shimTest'
        },
        shim: {
            'jquery.shimTest': ['jquery']
        }
    });
});