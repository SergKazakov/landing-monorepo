module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        cssmin: {
            options: {
                banner: '/* Minified CSS */',
                keepSpecialComments: 0
            },
            main: {
                files: {
                    'css/main.min.css': ['css/reset.css', 'css/main.css']
                }
            },
            ie: {
                files: {
                    'css/ie.min.css': ['css/ie.css']
                }
            }
        },
        watch: {
            files: ['css/*.css', '!css/*.min.css'],
            tasks: ['newer:cssmin'],
            options: {
                livereload: true,
            }
        },
    });

    require('load-grunt-tasks')(grunt);
    grunt.registerTask('default', ['cssmin', 'watch']);
};