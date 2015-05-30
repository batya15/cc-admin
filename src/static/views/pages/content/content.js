"use strict";

define(['domain/pages', 'views/entity/page', 'views/entity/list/list'], function (pages, Page, List) {

    var namespace = 'content';

    var NewList = List.extend({
        initialize: function () {
            this.$el.html('Переопределили метод');
        }
    });

    var View = Page.extend({
        List: NewList,
        batya: function() {
            this.$el.html('asdf');
        }
    });

    return pages.add({
        namespace: namespace,
        parent: 'content',
        icon: 'glyphicon-align-left',
        caption: 'Статьи',
        View: View
    });
});
