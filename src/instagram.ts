import BaseApi from './base-api';

/**
 * Instagram API-loading class.
 * @class Instagram
 */
class Instagram extends BaseApi {

    static get id () {
        return 'instagram';
    }

    /**
     * Handles loading the API.
     * @private
     */
    _handleLoadApi () {
        return this._loadScript('//platform.instagram.com/en_US/embeds.js').then(() => {
            // must manually process instagram embed
            window.instgrm.Embeds.process();
            return window.instgrm;
        });
    }

}

export default Instagram;
