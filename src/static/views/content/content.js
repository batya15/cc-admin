"use strict";

define([
    'views/entity/parentView',
    'domain/router',
    'domain/pages',
    'views/pages/siteSetting',
    'views/pages/siteReviews',
    'views/pages/siteAliases',
    'views/pages/siteRedirect',
    'views/pages/siteMenus',
    'views/pages/brands',
    'views/pages/home',
    'views/pages/country',
    'views/pages/products',
    'views/pages/content',
    'views/pages/orders',
    'views/pages/comment'

], function () {

    var pages = require('domain/pages'),
        router = require('domain/router'),
        ParentView = require('views/entity/parentView'),
        currentView;

    return ParentView.extend({
        initialize: function () {
            this.listenTo(router, 'change:namespace', this.onRoute);
        },
        onRoute: function () {
            var namespace = router.get('namespace'),
                page = pages.get(namespace),
                View;

            if (!page) {
                page = pages.get('home');
            }
            if (currentView) {
                currentView.remove();
            }
            View = page.get('View');
            document.title = page.get('caption');
            currentView = new View({model: page});
            this.$el.append(currentView.$el);
        }
    });

});

