/**
 * General Grunt setup
 */
'use strict';

var loadConfig = function(path) {
    var glob = require('glob');
    var object = {};
    var key;

    glob.sync('*', { cwd: path }).forEach(
        function(option) {
            key = option.replace(/\.js$/,'');
            object[key] = require(path + option);
        }
    );

    return object;
};

/*
 * Call Grunt configuration
 */
module.exports = function(grunt) {
    var config = {
        pkg: require('./package')
    };

    grunt.util._.extend(config, loadConfig('./tasks/options/'));

    // Load project configuration
    grunt.initConfig(config);

    // Load tasks
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    // Release task
    grunt.registerTask('release', [
        'sass',
        'autoprefixer',
        'csscomb',
        'cmq',
        'csso'
    ]);

    // Default task
    grunt.registerTask('default', [
        'sass',
        'autoprefixer:styles',
        'csscomb'
    ]);

};
