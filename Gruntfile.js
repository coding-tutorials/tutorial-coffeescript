module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        coffee: {
            compile: {
                expand: true,
                cwd: './',
                src: ['*.coffee'],
                dest: './',
                ext: '.js'
            }
        },
        jshint: {
            all: ['./*.js']
        },
        watch: {
            coffee: {
                files: ['./*.coffee'],
                tasks: ['coffee', 'jshint']
            }
        }
    });

    // Load the plugin that provides the "watch" & "stylus" tasks.
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-coffee');
    grunt.loadNpmTasks('grunt-contrib-jshint');

    // Default task(s).
    grunt.registerTask('default', ['coffee', 'jshint', 'watch']);
};