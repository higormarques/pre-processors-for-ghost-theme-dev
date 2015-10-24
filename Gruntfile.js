"use strict";

module.exports = function(grunt) {

  require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);

  grunt.initConfig({

    watch: {
      options: {
        livereload: true
      },
      images: {
        files: "assets/images/*.{png,jpg,gif}",
        tasks: ["imagemin"]
      },
      sass: {
        files: "assets/scss/*.scss",
        tasks: ["sass", "cmq", "postcss", "cssmin"]
      },
      // js: {
      //   files: "assets/js/*.js",
      //   tasks: ["uglify", "concat"]
      // },
      // svg: {
      //   files: "dev/svg/**/*.svg",
      //   tasks: ["svgmin"]
      // }
    },

    sass: {
      options: {
        sourceMap: true
      },
      dist: {
        files: {
          'assets/css/output.css': 'assets/scss/input.scss'
        }
      }
    },

    postcss: {
      options: {
        processors: [
          require('autoprefixer-core')({
            browsers: 'last 1 version'
          })
        ]
      },
      dist: {
        src: [
          'assets/css/output.css'
        ]
      }
    },

    cmq: {
      options: {
        log: true
      },
      dist: {
        files: {
          'assets/css/output.css': 'assets/css/output.css'
        }
      }
    },

    cssmin: {
      options: {
        keepSpecialComments: 0,
        noAdvanced: true,
        banner: '/* ======= Higor Neves Marques =======*/'
      },
      css: {
        files: {
          "assets/css/output.css": "assets/css/output.css"
        }
      }
    },

    imagemin: {
      dynamic: {
        options: {
          optimizationLevel: 7,
          progressive: true
        },
        files: [{
          expand: true,
          cwd: 'assets/images/',
          src: '*.{png,jpg,gif}',
          dest: 'assets/images-min'
        }]
      }
    },

    devUpdate: {
      main: {
        options: {
          updateType: 'force',
          reportUpdated: false,
          semver: false,
          packages: {
            devDependencies: true,
            dependencies: false
          },
          packageJson: null,
          reportOnlyPkgs: []
        }
      }
    }

  });

  grunt.registerTask("default", ["watch"]);
  grunt.registerTask("css", ["sass", "cmq", "postcss", "cssmin"]);
  grunt.registerTask("img", ["imagemin"]);
  grunt.registerTask("compile", ["sass", "cmq", "postcss", "cssmin", "imagemin"]);
  grunt.registerTask("update", ["devUpdate"]);

};
