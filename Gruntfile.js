/**
 * Gruntfile configuration
 */
module.exports = function (grunt) {

    // project configuration
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        requirejs: {
            compile: {
                options: {
                    appDir: 'www', // app根目录
                    /**
                     * 模块起始的相对路径，若已指定了 appDir，则该路径相对于 appDir
                     * 这里的 baseUrl 会覆盖掉 requirejs.config 中的 baseUrl
                     * 建议在这里使用与之相同的 baseUrl
                     */
                    baseUrl: 'modules',
                    dir: 'www_dist', // 输出文件目录，该路径以当前路径为起点
                    mainConfigFile: 'www/modules/config.js', // requirejs 配置文件，该路径以当前路径为起点
                    optimize: 'none', // 是否优化合并的模块
                    findNestedDependencies: true, // 是否优化与其相关联的模块
                    removeCombined: true, // 是否从输出目录移除与目标模块关联的模块
                    modules: [ // 需要优化的模块
                        {
                            name: 'test',
                            exclude: [ // 排除的模块
                                'jquery'
                            ]
                        }
                    ],
                    done: function (done, output) {
                        grunt.log.write(done);
                        grunt.log.write(output);
                    }
                }
            }
        }
    });

    // load plugins that provide the corresponding tasks
    grunt.loadNpmTasks('grunt-contrib-requirejs');

    // register tasks
    grunt.registerTask('r', ['requirejs']);

};