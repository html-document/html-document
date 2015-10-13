'use strict';

var _get = require('babel-runtime/helpers/get')['default'];

var _inherits = require('babel-runtime/helpers/inherits')['default'];

var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _HTMLElement2 = require('../../HTMLElement');

var _HTMLElement3 = _interopRequireDefault(_HTMLElement2);

/**
 * The HTMLMetaElement interface contains descriptive metadata about a document. It inherits all of the properties
 * and methods described in the HTMLElement interface.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/HTMLMetaElement
 */
/** @class HTMLMetaElement */
var HTMLMetaElement = (function (_HTMLElement) {
    _inherits(HTMLMetaElement, _HTMLElement);

    function HTMLMetaElement() {
        _classCallCheck(this, HTMLMetaElement);

        _get(Object.getPrototypeOf(HTMLMetaElement.prototype), 'constructor', this).apply(this, arguments);
    }

    /**
     * @constant {string} HTMLMetaElement#nodeName meta
     */

    _createClass(HTMLMetaElement, [{
        key: 'content',

        /**
         * Gets or sets the value of meta-data property.
         *
         * @type {string}
         
        * @memberof HTMLMetaElement 
        * @instance 
        * @member content */
        get: function get() {
            if (this.hasAttribute('content')) {
                return this.getAttribute('content');
            }

            return '';
        },

        /**
         * @ignore
         * @param {string} value
         
        * @memberof HTMLMetaElement 
        * @instance 
        * @param value */
        set: function set(value) {
            this.setAttribute('content', value);
        }

        /**
         * Gets or sets the name of an HTTP response header to define for a document.
         *
         * @type {string}
         
        * @memberof HTMLMetaElement 
        * @instance 
        * @member httpEquiv */
    }, {
        key: 'httpEquiv',
        get: function get() {
            if (this.hasAttribute('http-equiv')) {
                return this.getAttribute('http-equiv');
            }

            return '';
        },

        /**
         * @ignore
         * @param {string} value
         
        * @memberof HTMLMetaElement 
        * @instance 
        * @param value */
        set: function set(value) {
            this.setAttribute('http-equiv', value);
        }

        /**
         * Gets or sets the name of a meta-data property to define for a document.
         *
         * @type {string}
         
        * @memberof HTMLMetaElement 
        * @instance 
        * @member name */
    }, {
        key: 'name',
        get: function get() {
            if (this.hasAttribute('name')) {
                return this.getAttribute('name');
            }

            return '';
        },

        /**
         * @ignore
         * @param {string} value
         
        * @memberof HTMLMetaElement 
        * @instance 
        * @param value */
        set: function set(value) {
            this.setAttribute('name', value);
        }
    }]);

    return HTMLMetaElement;
})(_HTMLElement3['default']);

exports['default'] = HTMLMetaElement;
Object.defineProperty(HTMLMetaElement.prototype, 'nodeName', { value: 'meta' });
module.exports = exports['default'];
//# sourceMappingURL=HTMLMetaElement.js.map