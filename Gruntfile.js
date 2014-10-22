// 包装函数
module.exports = function (grunt) {

  // 任务配置
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    requirejs: {
      compile: {
        options: {
          mainConfigFile: "c/config.js",
          baseUrl: 'c',
          removeCombined: true,
          optimize: 'none',
          dir: 'dist',
          modules: [
            {
              name: 'test/main',
              include: [
                'requireLib'
              ],
              exclude: [
                'jquery'
              ]
            }
          ]
        }
      }
    }

  });

  // 任务加载
  grunt.loadNpmTasks('grunt-contrib-requirejs');

  // 自定义任务
  grunt.registerTask('r', ['requirejs']);

};