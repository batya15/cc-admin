"use strict";

define(['views/entity/parentView', 'underscore', 'domain/router', 'views/entity/create/create', 'views/entity/edit/edit',
        'views/entity/list/list', 'views/entity/preview/preview'],
    function (ParentView, _) {

        var router = require('domain/router'),
            List = require('views/entity/list/list'),
            Create = require('views/entity/create/create'),
            Preview = require('views/entity/preview/preview'),
            Edit = require('views/entity/edit/edit');

        return ParentView.extend({
            List: List,
            Create: Create,
            Preview: Preview,
            Edit: Edit,
            initialize: function () {
                this.listenTo(router, 'change:path', this._loadModule);
                this._loadModule();
            },
            _loadModule: function () {
                this._removeChildren();
                if (router.get('path') && _.isFunction(this[router.get('path')[0]])) {
                    this[router.get('path')[0]].apply(this, arguments);
                } else {
                    this.list.call(this, arguments);
                }
            },
            _getEntities: function () {
                var m = this.model.get('Model');
                m = (m) ? new m() : {};
                return {
                    model: m,
                    page: this.model
                };
            },
            list: function () {
                var v = new this.List(this._getEntities());
                this.addChild(v);
                this.$el.append(v.$el);
            },
            edit: function (modelRouter) {
                if (modelRouter) {
                    var search = modelRouter.get('search');
                    var model;
                    var entities = this._getEntities();
                    if (search.id) {
                        model = entities.model.get('collection').get(search.id);
                    }

                    if (!model) {
                        location.href = '/pjax/' + this.model.get('namespace');
                    }

                    var v = new this.Edit({model: model});
                    this.addChild(v);
                    this.$el.append(v.$el);
                }
            },
            create: function (modelRouter) {
                var entities = this._getEntities(),
                    model = entities.model.get('collection').add({});

                var v = new this.Edit({model: model});
                this.addChild(v);
                this.$el.append(v.$el);

            }
        });

    });


