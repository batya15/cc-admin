"use strict";

define(['backbone', 'caption', './input/input', './textarea/textarea', './checkbox/checkbox', './file/file',
        './dateTime/dateTime', './select/select'],
    function (Backbone, caption, Input) {

        var modules = arguments;

        return Backbone.View.extend({
            initialize: function (attr, scheme) {
                var fields = {};

                this.fields= new Backbone.Model();
                this.views = [];

                _.each(scheme, function (val, key) {
                    fields[key] = {
                        value: attr[key],
                        key: key,
                        caption: caption(key)
                    };
                    if (_.isObject(val)) {
                        fields[key] = _.extend(fields[key], scheme[key]);
                    }
                });

                _.each(fields, _.bind(function (opt) {
                    opt.type = (opt.hasOwnProperty('type'))? opt.type: 'input';
                    var View = _.find(modules, function (val) {
                        return ('form_' + opt.type == val.name);
                    });
                    if (!View) {
                        View = Input;
                    }
                    var view = new View.View(opt);
                    this.listenTo(view, 'change', _.bind(this.changeValues, this));
                    this.views.push(view);
                    this.$el.append(view.$el);
                }, this));
                this.changeValues();
            },
            changeValues: function () {
                var fields = {};
                _.each(this.views, function (view) {
                    fields[view.key] = view.value;
                });
                this.readyValue = true;
                this.fields.set(fields);
                this.trigger('change');
            },
            remove: function () {
                _.each(this.views, function(view) {
                    view.remove();
                });
                Backbone.View.prototype.remove.apply(this);
            }
        });

    });

