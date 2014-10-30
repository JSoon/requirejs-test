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
            'jquery.shimTest': 'lib/jquery.shimTest',
            'jquery.crop': 'lib/jquery.Jcrop'
        },
        shim: {
            'jquery.shimTest': ['jquery'],
            'jquery.crop': ['jquery']
        }
    });
});