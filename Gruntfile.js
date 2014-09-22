/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Task configuration.
    bower: {
      install: {
        options:{
          targetDir: '../component/bower_components',
          layout: 'byComponent',
          copy: true,
          cleanTargetDir: false,
          cleanBowerDir: false,
          verbose: true,
        }
      },
    },
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-bower-task');

  // Default task.
  grunt.registerTask('default', [
    'bower:install',
  ]);
};