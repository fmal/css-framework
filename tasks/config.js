/**
 * Grunt configuration
 */

'use strict';

var pkg = require('../package');

module.exports = {
    banner: '/*! ' + pkg.name + ' -v' + pkg.version + ' */',

    // paths
    paths: {
        styles: '.',
        scss: './sass'
    }
};
