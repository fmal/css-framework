/**
 * Watch task
 */
'use strict';

var config = require('../config');

module.exports = {
    sass: {
        files: config.paths.scss + '/**/*.scss',
        tasks: 'default'
    }
};
