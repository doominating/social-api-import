define(function(require, exports, module) {

    'use strict';

    var Utils = require('./utils');
    var BaseApi = require('./base-api');

    /**
     * Instagram API-loading class.
     * @class Instagram
     */
    var Instagram = Utils.extend({}, BaseApi.prototype, {

        /**
         * Loads the script to the API and returns the FB object.
         * @param {Object} options - load options
         * @param {Object} options.scriptUrl - The src url of the script js file
         * @param {Object} options.apiConfig - The FB.init() options
         * @param {Function} [callback] - Fires when the FB SDK has been loaded passed the FB object
         */
        load: function (options, callback) {

            options = Utils.extend({
                scriptUrl: '//platform.instagram.com/en_US/embeds.js',
                apiConfig: {}
            }, options);

            this.loadScript(document, options.scriptUrl, 'instagram-sdk', callback);
        }

    });

    module.exports = window.SocialApi.Instagram = Instagram;
});