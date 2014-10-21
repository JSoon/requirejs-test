/**
 * app entrance
 */
require([
    'jquery',
    'test/date',
    'test/helloworld'
], function ($, date, helloworld) {

    var saying = helloworld.say;
    $('#hello').text(saying);

    var today = date.date;
    $('#date').text(today);

});