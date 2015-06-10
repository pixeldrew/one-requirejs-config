
var pkg = require('./package.json'),
    map = require(pkg.directories["js-src"] + '/require-maps');

// requirejs build file processed in grunt
module.exports = {
    baseUrl: '<%= pkg.directories["js-src"] %>',
    dir: '<%= pkg.directories["js-dist"] %>',
    mainConfigFile: '<%= pkg.directories["js-src"] %>/require-config.js',
    optimize: 'none',
    removeCombined: true,
    modules: [
        {
            name: 'site',
            create: true,
            include: [
                'require-lib',
                'site-init'
            ],
            insertRequire: ['site-init']
        }
    ],
    map: map
};
