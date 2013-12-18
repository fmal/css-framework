/**
 * Csscomb task
 */
'use strict';

var config = require('../config');

module.exports = {
    files: {
        expand: true,
        flatten: true,
        src: [
            config.paths.styles + '/*.css',
            '!' + config.paths.styles + '/*.min.css'
        ],
        dest: config.paths.styles
    }
};
