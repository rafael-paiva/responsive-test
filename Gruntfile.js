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
    uglify: {
      js: {
        src: ['assets/js/app.js'],
        dest: 'assets/js/min/app.js'
      }
    },
    watch: {
      files: ['assets/js/app.js', 'assets/stylus/app.styl'],
      tasks: ['uglify', 'stylus']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-stylus');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['stylus', 'uglify', 'watch']);
};
