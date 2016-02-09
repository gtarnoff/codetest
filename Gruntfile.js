module.exports = function(grunt) {
  require('jit-grunt')(grunt, {});

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      javascripts: {
            files: {
              'js/modules.min.js': [
                'js/loadUserList.js',
                'js/testInput.js',
                'js/updateUserList.js'
              ]
            }
          }
    },
    sass: {
      dist: {
        files: [{
        expand: true,
        cwd: 'styles',
        src: ['**/*.sass'],
        dest: 'styles',
        ext: '.css'
      }]
      }
    },
    connect :{
      server: {
        options: {
          port: 8000
        }
      }
    },
    watch: {
    options: {
        dateFormat: function(time) {
          grunt.log.writeln('The watch finished in ' + time + 'ms at ' + (new Date()).toString());
          grunt.log.writeln('Waiting for more changes...');
        }
      },
      scripts: {
        files: ['**/*.js'],
        options: {
          spawn: false
        }
      },
      css: {
        files: ['**/*.sass'],
        tasks: ['sass'],
        options: {
          livereload: false
          }
        },
      html: {
        files: ['**/*.html'],
        options: {
        livereload: false
        }
      }
    }
  });

  grunt.registerTask('default', [
    'uglify',
    'sass',
    'connect',
    'watch'
  ]);
};
