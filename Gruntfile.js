module.exports = function(grunt) {
  grunt.initConfig({
    stylus: {
      build: {
        options: {
          compress: true
        },
        files: [{
          expand: true,
          cwd: 'assets/stylus',
          src: [ '*.styl' ],
          dest: 'assets/css',
          ext: '.css'
        }]
      }
    },
  });

  grunt.loadNpmTasks('grunt-contrib-stylus');
};
