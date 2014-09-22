/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Task configuration.
    bower: {
      install: {
        options:{
          //targetDir: '../component/bower_components',
          layout: 'byComponent',
          copy: false,
          cleanTargetDir: false,
          cleanBowerDir: false,
          verbose: true,
        }
      },
    },
    clean:{
      dist: {
        src: [
          "bower_components/jquery/src/**/*",
          "node_modules", 
          "test", 
          ".git",
          ".gitignore",
          ".gitmodules",
          "Gruntfile.js",
          "package.json", 
          "bower.json",
        ],
      },
    },
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-bower-task');
  grunt.loadNpmTasks('grunt-contrib-clean');

  // Default task.
  grunt.registerTask('default', [
    'bower:install',
    'clean:dist',
  ]);
};