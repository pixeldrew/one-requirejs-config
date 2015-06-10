module.exports = {
    site: {
        src: ['<%= pkg.directories["dist"] %>/**/*.html'],
        actions: [
            {
                name: 'require-site',
                search: '<script src="bower_components/requirejs/require.js" data-main="require-config"></script>',
                replace: '<script src="/js/site.js"></script>',
                flags: 'g'
            }
        ]
    }
};