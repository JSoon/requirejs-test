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