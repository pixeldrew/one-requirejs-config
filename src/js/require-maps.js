/**
 * This module needs to be UMD because it is also loaded via the grunt build
 */
(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define(['exports'], factory);
    } else if (typeof exports === 'object') {
        factory(exports);
    }
}(this, function (exports) {
    exports = {};
}));
