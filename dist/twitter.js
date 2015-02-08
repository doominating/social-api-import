/** 
* social-api - v0.0.2.
* https://github.com/mkay581/social-api.git
* Copyright 2015 Mark Kennedy. Licensed MIT.
*/
define(['./utils', './base-api'], function (Utils, BaseApi) {
    'use strict';

    /**
     * Twitter API-loading class.
     * @class Twitter
     */
    var Twitter = Utils.extend({}, BaseApi, {

        /**
         * Loads the script to the API and returns the FB object.
         * @param {Object} options - load options
         * @param {Object} options.scriptUrl - The src url of the script js file
         * @param {Object} options.apiConfig - The FB.init() options
         * @param {Function} [callback] - Fires when the FB SDK has been loaded passed the FB object
         */
        load: function (options, callback) {

            options = Utils.extend({
                scriptUrl: 'https://platform.twitter.com/widgets.js',
                apiConfig: {}
            }, options);
            var t = window.twttr || {};
            t.ready = function(f) {
                t._e.push(f);
            };
            window.twttr = t;
            this.loadScript(document, options.scriptUrl, 'twitter-wjs', function () {
                callback ? callback(t) : null;
            });
        }

    });

    return Twitter;
});
