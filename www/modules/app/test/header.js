/**
 * header
 */
define(function (require) {
    /**
     *  shim 为关键字，如果这里变量名设置为 shim，调用时则会报错
     */
    var shimTest = require('jquery.shimTest');
    var header = $('<h1></h1>');
    $('header').html(header);

    return {
        setText: function (txt) {
            header.text(txt).shimTest();
        }
    }
});