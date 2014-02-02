module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
     cssmin: { 
            add_banner: {
                options: {
                    banner: '/* Minified CSS */'  
                },
                files: {
                    'css/main.min.css' : ['css/reset.css', 'css/ie.css' ,'css/main.css' ]  
                } 
            }
        },
    watch: { 
            files: ['**/*.css', '**/*.html'],
            tasks: ['cssmin'] ,
            options:{
              livereload:true,
            }
        },
  });

  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', ['cssmin', 'watch']);
};