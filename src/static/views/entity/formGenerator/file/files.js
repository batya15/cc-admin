"use strict";
//todo: отрефакторить вместе с файловым менеджером

define([
    'vendor/backbone',
    './file.jade',
    './itemFile/itemFile',
    'domain/fileManager'
], function (Backbone, templete, ItemFile, mFiles) {

    var NAME = 'form_files';

    var View = Backbone.View.extend({
        name: NAME,
        events: {
            'change input': 'changeValue',
            'click [data-select]': 'selectFile'
        },
        initialize: function (data) {
            this.key = data.key;
            this.data = data;
            this.views = [];
            this.setElement(templete(data));
            this.changeValue();
            this.renderItems();
        },
        changeValue: function () {
            this.value = this.$('input').val();
            this.ready = true;
            this.trigger('change');
        },
        remove: function () {
            _.each(this.views, function(view) {
                view.remove();
            });
            Backbone.View.prototype.remove.apply(this);
        },
        removeFile: function () {
            var files= '';
            _.each(this.views, function(view) {
                if (view.filename) files += view.filename + ';';
            });
            this.$('input').val(files).trigger('change');
        },
        renderItems: function () {
            _.each(this.views, function(view) {
                view.remove();
            });
            if (!this.value) return false;
            var files = this.value.split(';');
            _.each(files, _.bind(function (file) {
                if (!file) return false;
                var item = new ItemFile(this.data, file);
                item.$el.appendTo(this.$('#filesList'));
                this.listenTo(item, 'remove', _.bind(this.removeFile, this));
                this.views.push(item);
            }, this));

        },
        selectFile: function () {
            var src = (this.data.srcPath)? this.data.srcPath: '';
            mFiles.open(src, _.bind(function (err, val) {
                var files =  this.$('input').val();
                if (!err) {
                    _.each(val, function (v) {
                        files += v + ';'
                    });
                    this.$('input').val(files).trigger('change');
                    this.renderItems();
                }
            }, this));
        }
    });

    return {
        View: View,
        name: NAME
    }


});

