module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
     cssmin: {
            add_banner: {
                options: {
                    banner: '/* Minified CSS */'
                },
                files: {
                    'css/main.min.css' : ['css/reset.css','css/main.css' ]
                }
            }
        },
    watch: {
            files: ['**/*.css', '**/*.html'],
            tasks: ['newer:cssmin'] ,
            options:{
              livereload:true,
            }
        },
    uglify:{
        script:{
            files:{
                'js/plugins/inputStyler.min.js':'js/plugins/inputStyler.js'
            }
        }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-newer');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Default task(s).
  grunt.registerTask('default', ['cssmin', 'watch']);
  grunt.registerTask('custom', ['uglify']);
};
