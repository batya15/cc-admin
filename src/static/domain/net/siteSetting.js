"use strict";

define(['backbone', 'domain/entity/socket'], function (Backbone, io) {

    var instance;

    var Collection = Backbone.Collection.extend({
        namespace: 'users',
        initialize: function(models, attr) {
            this.socket = attr.socket;
        },
        sync: function (a, c, options) {
            this.socket.emit('read', options, function(err, res) {
                if (!err && res) {
                    this.set(res);
                }
            }.bind(this));
        },
        model: Backbone.Model.extend({
            sync: function (action, model, opt) {
                var self = this;

                function callback(err, res) {
                    console.log(action, err, res);
                    if (!err) {
                        if (opt.success) {
                            opt.success(res);
                        }
                        if (action === 'create') {
                            model.set('id', res);
                            model.id = res;
                        }
                        model.trigger('sync', model, res, opt);
                    } else {
                        self.set(self.previousAttributes());
                        if (opt.error) {
                            opt.error(err);
                        }
                    }
                }

                var data = opt.attrs || model.toJSON();
                if(action == "delete"){
                    this.collection.socket.emit(action, {id:this.id}, callback);
                } else{
                    this.collection.socket.emit(action, data, callback);
                }
            }
        })
    });

    var Model = Backbone.Model.extend({ // модель текущей страницы - а именно параметры поиска по таблице
        defaults: {
            currentPage: 1,
            countItemsOnPage: 3
        },
        namespace: 'siteSetting',
        initialize: function () {
            var collection;
            this.socket = io('siteSetting');
            collection = new Collection([], {socket: this.socket});
            this.set('collection', collection);
            this._sync();
            this.on('change', this._sync.bind(this));
            this.sizeSelection = new Backbone.Model({count: 0});
        },
        _sync: function () {
            var search = {
                search: this.get('search'),
                currentPage: this.get('currentPage'),
                countItemsOnPage: this.get('countItemsOnPage'),
                sortBy: this.get('sortBy'),
                sortRevert: this.get('sortRevert')
            };
            this.socket.emit('getCount', search, function(err, count) {
                if (!err) {
                    this.sizeSelection.set('count', count);
                    if (count) {
                        this.get('collection').fetch(search);
                    }
                }
            }.bind(this));

        }
    });

    return function () {
        if (!instance) {
            instance = new Model();
        }
        return instance;
    };

});