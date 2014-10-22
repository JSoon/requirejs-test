/**
 * requirejs config
 */
define(function (require) {

  var config = requirejs.config({
    baseUrl: 'c',
    paths: {
      requireLib: '../bower_components/requirejs/require',

      jquery: '../bower_components/jquery/dist/jquery.min' // v1.11.1
    }
  });
  return config;

});