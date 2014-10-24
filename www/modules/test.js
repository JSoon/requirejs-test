/**
 * load config code, then load the app logic for this module
 */
require(['config'], function () {
    require(['test/main']);
});