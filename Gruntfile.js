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
//                    appDir: 'www', // app根目录
//                    baseUrl: 'modules/app', // 模块相对路径，若已指定了appDir，则该路径相对于appDir
//                    dir: 'www/dist', // 输出文件目录，该路径以当前路径为起点
//                    mainConfigFile: 'www/modules/config.js', // requirejs配置文件，该路径以当前路径为起点
//                    optimize: 'none',
////                    findNestedDependencies: true,
//                    removeCombined: true, // 是否从输出目录移除与模块关联的文件
//                    modules: [ // 需要优化的模块文件
//                        {
//                            name: '../test',
//                            include: [
//                                'test/main'
//                            ],
//                            exclude: [
//                                'jquery'
//                            ]
//                        }
//                    ]
                }
            }
        }
    });

    // load plugins that provide the corresponding tasks
    grunt.loadNpmTasks('grunt-contrib-requirejs');

    // register tasks
    grunt.registerTask('r', ['requirejs']);

};