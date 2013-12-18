/**
 * Autoprefixer task
 */
'use strict';

var config = require('../config');

module.exports = {
    options: {
        browsers: ['last 2 versions']
    },
    styles: {
        files: [
            {
                expand: true,
                cwd: config.paths.styles,
                src: [
                    '*.css',
                    '!*.min.css',
                    '!styles-old-ie.css'
                ],
                dest: config.paths.styles
            }
        ]
    },
    stylesIE: {
        options: {
            browsers: ['last 2 versions', 'ie 8', 'ie 7']
        },
        src: config.paths.styles + '/styles-old-ie.css',
        dest: config.paths.styles + '/styles-old-ie.css'
    }
};
