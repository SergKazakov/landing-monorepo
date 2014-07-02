'use strict';
module.exports = function (grunt) {
    var config = {
        app: 'app',
        dist: 'dist'
    };

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        sprite: {
            all: {
                src: 'app/img/sprites/*.png',
                destImg: 'app/img/sprite.png',
                destCSS: 'app/less/core/sprite.less',
                cssFormat: 'less',
                padding: 15,
                algorithm: 'binary-tree',
            }
        },
        less: {
            options: {
                expand: true,
                sourceMap: true
            },
            dev: {
                options: {
                    strictMath: true
                },
                files: {
                    'app/css/all.css': ['app/less/all.less']
                }
            }
        },
        watch: {
            gruntfile: {
                files: 'Gruntfile.js'
            },
            less: {
                files: ['app/**/*.less'],
                tasks: ['less']
            }
        },
        browserSync: {
            files: {
                src: ['app/*.html', 'app/css/*.css', 'app/js/main.js']
            },
            options: {
                watchTask: true,
                ghostMode: {
                    clicks: true,
                    scroll: true,
                    links: true,
                    forms: true
                },
                server: {
                    baseDir: 'app'
                }
            }
        }
    });
    require('load-grunt-tasks')(grunt);
    grunt.registerTask('default', ['less', 'browserSync', 'watch']);
};