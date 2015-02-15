'use strict';

var Utils = require('./utils');
var BaseApi = require('./base-api');

/**
 * Twitter API-loading class.
 * @class Twitter
 */
var Twitter = function () {
    this.initialize();
};
Twitter.prototype = Utils.extend({}, BaseApi.prototype, {

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
        t.ready = function (f) {
            t._e.push(f);
        };
        window.twttr = t;
        this.injectScript(options.scriptUrl, 'twitter-wjs', function () {
            callback ? callback(t) : null;
        });
        this._triggerScriptLoaded();
    }

});

module.exports = window.SocialApi.Twitter = new Twitter();
