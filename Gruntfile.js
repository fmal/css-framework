module.exports = function(grunt) {
    'use strict';

    var paths, tasks;
    // Configurable paths
    paths = {
        base       : '.',
        styles     : '<%= path.base %>',
        scss       : '<%= path.base %>/sass',
    };

    // Load tasks
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    // Project configuration
    grunt.initConfig({
        path: paths,
        pkg: grunt.file.readJSON('package.json'),

        sass: {
            compile: {
                options: {
                    style: 'expanded',
                    unixNewlines: true,
                    precision: 7,
                    require: ['<%= path.scss %>/helpers/url64.rb']
                },
                expand: true,
                cwd: '<%= path.scss %>',
                src: ['**/!(_)*.scss'],
                dest: '<%= path.styles %>',
                ext: '.css'
            }
        },

        autoprefixer: {
            options: {
                browsers: ['last 2 versions']
            },
            styles: {
                files: [
                    {
                        expand: true,
                        cwd: '<%= path.styles %>',
                        src: [
                            '*.css',
                            '!*.min.css',
                            '!styles-old-ie.css'
                        ],
                        dest: '<%= path.styles %>'
                    }
                ]
            },
            stylesIE: {
                options: {
                    browsers: ['last 2 versions', 'ie 8', 'ie 7']
                },
                files: {
                    '<%= path.styles %>/styles-old-ie.css': ['<%= path.styles %>/styles-old-ie.css']
                }
            }
        },

        csscomb: {
            files: {
                expand: true,
                flatten: true,
                src: [
                    '<%= path.styles %>/*.css',
                    '!<%= path.styles %>/*.min.css'
                ],
                dest: '<%= path.styles %>'
            }
        },

        csso: {
            options: {
                report: 'gzip'
            },
            compress: {
                options: {
                    restructure: false
                },
                expand: true,
                cwd: '<%= path.styles %>',
                src: ['*.css', '!*.min.css', '!styles.css'],
                dest: '<%= path.styles %>',
                ext: '.min.css'
            },
            restructure: {
                options: {
                    restructure: true
                },
                src: '<%= path.styles %>/cmq/styles.css',
                dest: '<%= path.styles %>/styles.min.css'
            }
        },

        cmq: {
            options: {
                log: false
            },
            target: {
                files: {
                    '<%= path.styles %>/cmq': ['<%= path.styles %>/styles.css']
                }
            }
        },

        watch: {
            sass: {
                files: '<%= path.scss %>/**/*.scss',
                tasks: 'default'
            }
        }
    });

    tasks = {
        "default": ['sass', 'autoprefixer:styles', 'csscomb'],
        release: ['sass', 'autoprefixer', 'csscomb', 'cmq', 'csso']
    };

    grunt.registerTask('default', tasks["default"]);
    grunt.registerTask('release', tasks.release);
};
