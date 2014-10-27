/**
 * non-AMD scripts jquery.alpha
 */
;
(function ($) {

    $.fn.shimTest = function () {
        return this.append('<p>Shim is Go!</p>');
    };

})(jQuery);
define("jquery.shimTest", function(){});

/**
 * header
 */
define('app/test/header',['require','jquery.shimTest'],function (require) {
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
/**
 * test module entrance
 */
define('app/test/main',['require','app/test/header'],function (require) {
    var header = require('app/test/header');
    header.setText('I\'m header');
});
