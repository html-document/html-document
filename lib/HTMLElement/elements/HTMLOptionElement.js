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
 * The HTMLOptionElement interface represents option elements
 * and inherits all classes and methods of the HTMLElement interface.
 *
 * @see https://developer.mozilla.org/en/docs/Web/API/HTMLOptionElement
 */
/** @class HTMLOptionElement */
var HTMLOptionElement = (function (_HTMLElement) {
    _inherits(HTMLOptionElement, _HTMLElement);

    function HTMLOptionElement() {
        _classCallCheck(this, HTMLOptionElement);

        _get(Object.getPrototypeOf(HTMLOptionElement.prototype), 'constructor', this).apply(this, arguments);
    }

    /**
     * @constant {string} HTMLOptionElement#nodeName option
     */

    _createClass(HTMLOptionElement, [{
        key: 'defaultSelected',

        /**
         * Contains the initial value of the selected HTML attribute,
         * indicating whether the option is selected by default or not.
         *
         * @type {boolean}
         * @ignore Unsuported
         
        * @memberof HTMLOptionElement 
        * @instance 
        * @member defaultSelected */
        get: function get() {
            throw new Error('Unsuported');
        },

        /**
         * @ignore
         * @param {boolean} selected
         
        * @memberof HTMLOptionElement 
        * @instance 
        * @param selected */
        set: function set(selected) {
            throw new Error('Unsuported');
        }

        /**
         * Reflects the value of the disabled HTML attribute, which indicates that the option is unavailable to be selected.
         * An option can also be disabled if it is a child of an optgroup element that is disabled.
         *
         * @type {boolean}
         
        * @memberof HTMLOptionElement 
        * @instance 
        * @member disabled */
    }, {
        key: 'disabled',
        get: function get() {
            return !!this.getAttribute('disabled') && (this.parentNode.nodeName !== 'optgroup' || !this.parentNode.disabled);
        },

        /**
         * @ignore
         * @param {boolean} disabled
         
        * @memberof HTMLOptionElement 
        * @instance 
        * @param disabled */
        set: function set(disabled) {
            if (disabled) {
                this.setAttribute('disabled', 'disabled');
            } else {
                this.removeAttribute('disabled');
            }
        }

        /**
         * If the option is a descendent of a select element, then this property has the same value as
         * the form property of the corresponding HTMLSelectElement object; otherwise, it is null.
         *
         * @type {HTMLFormElement}
         * @readonly
         
        * @memberof HTMLOptionElement 
        * @instance 
        * @member form */
    }, {
        key: 'form',
        get: function get() {
            throw new Error('Not implemented');
        },

        /**
         * @ignore
         
        * @memberof HTMLOptionElement 
        * @instance 
        * @param value */
        set: function set(value) {
            throw new Error('form is read only');
        }

        /**
         * The position of the option within the list of options it belongs to, in tree-order.
         * If the option is not part of a list of options, like when it is part of the datalist element, the value is 0.
         *
         * @type {number}
         * @readonly
         * @ignore Unsuported
         
        * @memberof HTMLOptionElement 
        * @instance 
        * @member index */
    }, {
        key: 'index',
        get: function get() {
            throw new Error('Not implemented');
        },

        /**
         * @ignore
         * @param {number} value
         
        * @memberof HTMLOptionElement 
        * @instance 
        * @param value */
        set: function set(value) {
            throw new Error('index is read only');
        }

        /**
         * Reflects the value of the label HTML attribute, which provides a label for the option.
         * If this attribute isn't specifically set, reading it returns the element's text content.
         *
         * @type {string}
         * @ignore
         
        * @memberof HTMLOptionElement 
        * @instance 
        * @member label */
    }, {
        key: 'label',
        get: function get() {
            throw new Error('Not implemented');
        },

        /**
         * @ignore
         * @param {string} label
         
        * @memberof HTMLOptionElement 
        * @instance 
        * @param label */
        set: function set(label) {
            throw new Error('Not implemented');
        }
    }, {
        key: '_select',
        /** @memberof HTMLOptionElement 
        * @instance 
        * @member _select */get: function get() {
            // jscs:disable safeContextKeyword
            var node = this;

            // jscs:enable safeContextKeyword

            while (node = node.parentNode) {
                if (node.nodeName === 'select') {
                    return node;
                }
            }

            return null;
        }

        /**
         * Indicates whether the option is currently selected.
         *
         * @member {boolean}
         
        * @memberof HTMLOptionElement 
        * @instance */
    }, {
        key: 'selected',
        get: function get() {
            return !!this.getAttribute('selected');
        },

        /**
         * @ignore
         * @param {boolean} selected
         
        * @memberof HTMLOptionElement 
        * @instance 
        * @param selected */
        set: function set(selected) {
            if (selected) {
                var selectElement = this._select;
                if (!selectElement.multiple) {
                    var selectedOption = selectElement.selectedOption;
                    if (selectedOption) {
                        selectedOption.selected = false;
                    }
                }

                this.setAttribute('selected', 'selected');
            } else {
                this.removeAttribute('selected');
            }
        }

        /**
         * Contains the text content of the element.
         *
         * @type {string}
         
        * @memberof HTMLOptionElement 
        * @instance 
        * @member text */
    }, {
        key: 'text',
        get: function get() {
            return this.textContent;
        },

        /**
         * @param {string} text
         
        * @memberof HTMLOptionElement 
        * @instance 
        * @param text */
        set: function set(text) {
            while (this.firstChild) {
                this.removeChild(this.firstChild);
            }

            this.appendChild(this.ownerDocument.createTextNode(text));
        }

        /**
         * Reflects the value of the value HTML attribute, if it exists;
         * otherwise reflects value of the Node.textContent property.
         *
         * @type {string}
         
        * @memberof HTMLOptionElement 
        * @instance 
        * @member value */
    }, {
        key: 'value',
        get: function get() {
            var value = this.getAttribute('value');
            return value === null ? this.textContent : value;
        },

        /**
         * @param {string} value
         
        * @memberof HTMLOptionElement 
        * @instance 
        * @param value */
        set: function set(value) {
            if (value) {
                this.setAttribute('value', value);
            } else {
                this.removeAttribute('value');
            }
        }
    }]);

    return HTMLOptionElement;
})(_HTMLElement3['default']);

exports['default'] = HTMLOptionElement;
Object.defineProperty(HTMLOptionElement.prototype, 'nodeName', { value: 'option' });
module.exports = exports['default'];
//# sourceMappingURL=HTMLOptionElement.js.map