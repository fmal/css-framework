/**
 * Sass task
 */
'use strict';

var config = require('../config');

module.exports = {
    compile: {
        options: {
            style: 'expanded',
            unixNewlines: true,
            precision: 7,
            require: [
                config.paths.scss + '/helpers/b64.rb'
            ]
        },
        expand: true,
        cwd: config.paths.scss,
        src: ['**/!(_)*.scss'],
        dest: config.paths.styles,
        ext: '.css'
    }
};
