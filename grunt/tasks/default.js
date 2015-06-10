module.exports = function(grunt) {

    'use strict';

    grunt.registerTask('default', [
        'requirejs:site',
        'sync:site',
        'regex-replace:site'
    ]);
};
