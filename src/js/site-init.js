require(['jquery', 'lodash', 'require-maps'], function($, _, requireMaps) {
    //only way to get maps into one place and to have them as part of the build is to load them into here
    require.config({map: requireMaps});

    // do something, perhaps load dynamic site/page dependencies...

    console.log('site framework loaded');
});
