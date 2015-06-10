module.exports = {
    site: {
        files: [
            {
                cwd: '<%=pkg.directories["src"]%>',
                src: '**/*.html',
                dest: '<%=pkg.directories["dist"]%>'
            }
        ]
    }
};
