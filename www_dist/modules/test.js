/**
 * requirejs common config
 */
define('config',[],function () {
    return requirejs.config({
        baseUrl: 'modules',
        paths: {
            /**
             * lib path
             */
            jquery: 'lib/jquery' // v1.11.1
        }
    });
});
/**
 * header
 */
define('app/test/header',['require','jquery'],function (require) {
    var $ = require('jquery');
    var header = $('<h1></h1>');
    $('header').html(header);

    return {
        setText: function (txt) {
            header.text(txt);
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
/**
 * load config code, then load the app logic for this module
 * 两种情况：
 * 1. 如果没有使用 Gruntfile 中的 baseUrl，那么这里的 'config' 模块起始路径 baseUrl 默认为
 * 包含 RequireJS 的那个 HTML 页面的所属目录，即 www
 * 2. 如果使用了 Gruntfile 进行合并压缩，那么这里的 'config' 模块起始路径则为 Gruntfile 中
 * 指定的 baseUrl
 */
require(['config'], function () {
    require(['app/test/main']);
});
define("test", function(){});

