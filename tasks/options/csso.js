/**
 * Csso task
 */
'use strict';

var config = require('../config');

module.exports = {
    options: {
        report: 'gzip'
    },
    compress: {
        options: {
            restructure: false
        },
        expand: true,
        cwd: config.paths.styles,
        src: ['*.css', '!*.min.css', '!styles.css'],
        dest: config.paths.styles,
        ext: '.min.css'
    },
    restructure: {
        options: {
            restructure: true
        },
        src: config.paths.styles + '/cmq/styles.css',
        dest: config.paths.styles + '/styles.min.css'
    }
};
