/**
 * header
 */
define(function (require) {
    var $ = require('jquery');
    var header = $('<h1></h1>');
    $('header').html(header);

    return {
        setText: function (txt) {
            header.text(txt);
        }
    }
});