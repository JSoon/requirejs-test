/**
 * helloworld
 */
define(function (require) {

    var today = require('test/date');
    return {
        say: 'hello, world! Today is ' + today.date
    };

});