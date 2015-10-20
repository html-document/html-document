'use strict';

var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _url = require('url');

/**
 * Helper class providing URLUtils object implementation. Used in document.location, HTMLAnchorElement etc.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/URLUtils
 */
/** @class Url 
* @param url */
var Url = (function () {
    /**
     * Creates object using given value as start url.
     *
     * @param {string} url - url to parse.
     */

    function Url(url) {
        _classCallCheck(this, Url);

        url = url || 'about:blank';
        this._data = (0, _url.parse)(url);
    }

    /**
     * @returns {string} - string representation of Url (Full URI)
     
    * @memberof Url 
    * @instance 
    * @method toString */

    _createClass(Url, [{
        key: 'toString',
        value: function toString() {
            return (0, _url.format)(this._data);
        }

        /**
         * Is a DOMString containing the whole URL.
         *
         * @type {string}
         
        * @memberof Url 
        * @instance 
        * @member href */
    }, {
        key: 'href',
        get: function get() {
            return this.toString();
        },

        /**
         * @ignore
         * @param {string} value
         
        * @memberof Url 
        * @instance 
        * @param value */
        set: function set(value) {
            value = value || 'about:blank';
            this._data = (0, _url.parse)(value);
        }

        /**
         * Is a DOMString containing the protocol scheme of the URL, including the final ':'.
         *
         * @type {string}
         
        * @memberof Url 
        * @instance 
        * @member protocol */
    }, {
        key: 'protocol',
        get: function get() {
            return this._data.protocol;
        },

        /**
         * @ignore
         * @param {string} value
         
        * @memberof Url 
        * @instance 
        * @param value */
        set: function set(value) {
            if (!value.endsWith(':')) {
                value += ':';
            }

            this._data.protocol = value;
        }

        /**
         * Is a DOMString containing the host, that is the hostname, and then, if the port of the URL is not empty
         * (which can happen because it was not specified or because it was specified to be the default port of the
         * URL's scheme), a ':', and the port of the URL.
         *
         * @type {string}
         
        * @memberof Url 
        * @instance 
        * @member host */
    }, {
        key: 'host',
        get: function get() {
            return this._data.host;
        },

        /**
         * @ignore
         * @param {string} value
         
        * @memberof Url 
        * @instance 
        * @param value */
        set: function set(value) {
            var tmpUrl = (0, _url.parse)('//' + value, false, true);
            this._data.host = tmpUrl.host;
            this._data.hostname = tmpUrl.hostname;
            this._data.port = tmpUrl.port;
        }

        /**
         * The authentication information portion of a URL.
         *
         * @type {string}
         
        * @memberof Url 
        * @instance 
        * @member auth */
    }, {
        key: 'auth',
        get: function get() {
            if (this._data.auth === null || this._data.auth === undefined) {
                return '';
            }

            return this._data.auth;
        },

        /**
         * @ignore
         * @param {string} value
         
        * @memberof Url 
        * @instance 
        * @param value */
        set: function set(value) {
            this._data.auth = value;
        }

        /**
         * Is a DOMString containing the domain of the URL.
         *
         * @type {string}
         
        * @memberof Url 
        * @instance 
        * @member hostname */
    }, {
        key: 'hostname',
        get: function get() {
            return this._data.hostname;
        },

        /**
         * @ignore
         * @param {string} value
         
        * @memberof Url 
        * @instance 
        * @param value */
        set: function set(value) {
            this._data.hostname = value;
        }

        /**
         * Is a DOMString containing the port number of the URL.
         *
         * @returns {string}
         
        * @memberof Url 
        * @instance 
        * @member port */
    }, {
        key: 'port',
        get: function get() {
            if (this._data.port === null || this._data.port === undefined) {
                switch (this._data.protocol) {
                    case 'http:':
                        return '80';
                    case 'https:':
                        return '443';
                    case 'ftp:':
                        return '21';
                }
                return '';
            }

            return this._data.port;
        },

        /**
         * @ignore
         * @param {string} value
         
        * @memberof Url 
        * @instance 
        * @param value */
        set: function set(value) {
            value = parseInt(value, 10);
            if (isNaN(value)) {
                value = '';
            }

            this._data.port = value;
            delete this._data.host;
            this.href = (0, _url.format)(this._data);
        }

        /**
         * Is a DOMString containing an initial '/' followed by the path of the URL.
         *
         * @returns {string}
         
        * @memberof Url 
        * @instance 
        * @member pathname */
    }, {
        key: 'pathname',
        get: function get() {
            return this._data.pathname;
        },

        /**
         * @ignore
         * @param {string} value
         
        * @memberof Url 
        * @instance 
        * @param value */
        set: function set(value) {
            this._data.pathname = value;
        }

        /**
         * Is a DOMString containing a '?' followed by the parameters of the URL.
         *
         * @returns {string}
         
        * @memberof Url 
        * @instance 
        * @member search */
    }, {
        key: 'search',
        get: function get() {
            if (this._data.search === null) {
                return '';
            }

            return this._data.search;
        },

        /**
         * @ignore
         * @param {string} value
         
        * @memberof Url 
        * @instance 
        * @param value */
        set: function set(value) {
            this._data.search = value;
        }

        /**
         * Is a DOMString containing a '#' followed by the fragment identifier of the URL.
         *
         * @type {string}
         
        * @memberof Url 
        * @instance 
        * @member hash */
    }, {
        key: 'hash',
        get: function get() {
            if (this._data.hash === null) {
                return '#';
            }

            return this._data.hash;
        },

        /**
         * @ignore
         * @param {string} value
         
        * @memberof Url 
        * @instance 
        * @param value */
        set: function set(value) {
            if (!value.startsWith('#')) {
                value = '#' + value;
            }

            this._data.hash = value;
        }

        /**
         * Is a DOMString containing the username specified before the domain name.
         *
         * @type {string}
         
        * @memberof Url 
        * @instance 
        * @member username */
    }, {
        key: 'username',
        get: function get() {
            if (this.auth !== '') {
                if (this.auth.indexOf(':') !== -1) {
                    var _auth$split = this.auth.split(':');

                    var _name = _auth$split[0];
                    var password = _auth$split[1];

                    return _name;
                } else {
                    return this.auth;
                }
            }

            return '';
        },

        /**
         * @ignore
         * @param {string} value
         
        * @memberof Url 
        * @instance 
        * @param value */
        set: function set(value) {
            if (this.auth !== '') {
                var _auth$split2 = this.auth.split(':');

                var _name2 = _auth$split2[0];
                var password = _auth$split2[1];

                this.auth = value + ':' + password;
            } else {
                this.auth = value;
            }
        }

        /**
         * Is a DOMString containing the password specified before the domain name.
         *
         * @type {string}
         
        * @memberof Url 
        * @instance 
        * @member password */
    }, {
        key: 'password',
        get: function get() {
            if (this.auth !== '' && this.auth.indexOf(':') !== -1) {
                var _auth$split3 = this.auth.split(':');

                var _name3 = _auth$split3[0];
                var password = _auth$split3[1];

                return password;
            }

            return '';
        },

        /**
         * @ignore
         * @param {string} value
         
        * @memberof Url 
        * @instance 
        * @param value */
        set: function set(value) {
            if (this.auth !== '') {
                var _auth$split4 = this.auth.split(':');

                var _name4 = _auth$split4[0];
                var password = _auth$split4[1];

                this.auth = _name4 + ':' + value;
            } else {
                this.auth = ':' + value;
            }
        }

        /**
         * Return 'params' part of href as object.
         *
         * @type {Object}
         
        * @memberof Url 
        * @instance 
        * @member searchParams */
    }, {
        key: 'searchParams',
        get: function get() {
            var tempUrl = (0, _url.parse)(this.href, true);
            return tempUrl.query;
        }
    }]);

    return Url;
})();

exports['default'] = Url;
module.exports = exports['default'];
//# sourceMappingURL=Url.js.map