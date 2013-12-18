/**
 * Combine media queries task
 */
'use strict';

var config = require('../config');

/**
 * Helper
 */
var helper = {};

helper.cmq = {};
helper.cmq[config.paths.styles + '/cmq'] = config.paths.styles + '/styles.css';

module.exports = {
    options: {
        log: false
    },
    target: {
        files: helper.cmq
    }
};
