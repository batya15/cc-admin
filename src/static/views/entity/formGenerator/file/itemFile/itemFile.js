"use strict";

define([
    'vendor/backbone',
    './itemFile.jade'
], function (Backbone, template) {

    return Backbone.View.extend({
        name: 'itemFile',
        events: {
            'click [data-deleteFile]': 'removeFile',
            'click .itemFile' : 'openPreview',
            'mouseout .itemFile': 'closePreview'
        },
        initialize: function (data, filename) {
            var src = (data.srcPath)? data.srcPath + '/': '';
            this.filename = filename;
            this.$el.html(template({filename: '/'+ src + this.filename}))
        },
        removeFile: function (e) {
            e.stopPropagation();
            e.preventDefault();
            this.filename = null;
            this.remove();
            this.trigger('remove');
        },
        openPreview: function () {
            this.$('.previewImg').show();
        },
        closePreview: function() {
            this.$('.previewImg').hide();
        }
    });

});

