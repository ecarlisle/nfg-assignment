module.exports = function(grunt) {
  require('jit-grunt')(grunt);

  grunt.initConfig({
    less: {
      development: {
        options: {
          expand: true,
          optimization: 2
        },
        files: {
          "css/application.css": "less/application.less"
        }
      }
    },
    watch: {
      styles: {
        files: ['less/**/*.less'], // which files to watch
        tasks: ['less'],
        options: {
          nospawn: true
        }
      }
    },
    cmq: {
      options: {
        log: false
      },
      your_target: {
        files: {
          'css': ['css/application.css']
        }
      }
    },
    cssbeautifier : {
      files : "css/application.css",
      options : {
        indent: '  ',
      }
    }
  });

  grunt.loadNpmTasks('grunt-combine-media-queries');
  grunt.loadNpmTasks('grunt-cssbeautifier');
  grunt.registerTask('default', ['less', 'watch']);
};