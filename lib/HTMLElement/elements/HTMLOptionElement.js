'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var HTMLElement = require('../../HTMLElement');

/**
 * The HTMLOptionElement interface represents <option> elements
 * and inherits all classes and methods of the HTMLElement interface.
 */

var HTMLOptionElement = (function (_HTMLElement) {
    function HTMLOptionElement() {
        _classCallCheck(this, HTMLOptionElement);

        _get(Object.getPrototypeOf(HTMLOptionElement.prototype), 'constructor', this).call(this);
        this.nodeName = 'option';
    }

    _inherits(HTMLOptionElement, _HTMLElement);

    _createClass(HTMLOptionElement, [{
        key: 'defaultSelected',

        /**
         * Contains the initial value of the selected HTML attribute,
         * indicating whether the option is selected by default or not.
         *
         * @return {Boolean}
         */
        get: function get() {
            throw new Error('Unsuported');
        },

        /**
         * Contains the initial value of the selected HTML attribute,
         * indicating whether the option is selected by default or not.
         *
         * @param {Boolean} selected
         */
        set: function set(selected) {
            throw new Error('Unsuported');
        }
    }, {
        key: 'disabled',

        /**
         * Reflects the value of the disabled HTML attribute, which indicates that the option is unavailable to be selected.
         * An option can also be disabled if it is a child of an <optgroup> element that is disabled.
         *
         * @return {Boolean}
         */
        get: function get() {
            return !!this.getAttribute('disabled') && (this.parentNode.nodeName !== 'optgroup' || !this.parentNode.disabled);
        },

        /**
         * Reflects the value of the disabled HTML attribute, which indicates that the option is unavailable to be selected.
         *
         * @param {Boolean} disabled
         */
        set: function set(disabled) {
            if (disabled) {
                this.setAttribute('disabled', 'disabled');
            } else {
                this.removeAttribute('disabled');
            }
        }
    }, {
        key: 'form',

        /**
         * If the option is a descendent of a <select> element, then this property has the same value as
         * the form property of the corresponding HTMLSelectElement object; otherwise, it is null.
         *
         * @return {HTMLFormElement}
         */
        get: function get() {
            throw new Error('Not implemented');
        },
        set: function set(value) {
            throw new Error('form is read only');
        }
    }, {
        key: 'index',

        /**
         * The position of the option within the list of options it belongs to, in tree-order.
         * If the option is not part of a list of options, like when it is part of the <datalist> element, the value is 0.
         *
         * @return {Number}
         */
        get: function get() {
            throw new Error('Not implemented');
        },

        /**
         * The position of the option within the list of options it belongs to, in tree-order.
         * If the option is not part of a list of options, like when it is part of the <datalist> element, the value is 0.
         *
         */
        set: function set(value) {
            throw new Error('index is read only');
        }
    }, {
        key: 'label',

        /**
         * Reflects the value of the label HTML attribute, which provides a label for the option.
         * If this attribute isn't specifically set, reading it returns the element's text content.
         *
         * @return {Number}
         */
        get: function get() {
            throw new Error('Not implemented');
        },

        /**
         * Reflects the value of the label HTML attribute, which provides a label for the option.
         * If this attribute isn't specifically set, reading it returns the element's text content.
         *
         * @param {Number}
         */
        set: function set(label) {
            throw new Error('Not implemented');
        }
    }, {
        key: '_select',
        get: function get() {
            var node = this;
            while (node = node.parentNode) {
                if (node.nodeName === 'select') {
                    return node;
                }
            }
            return null;
        }
    }, {
        key: 'selected',

        /**
         * Indicates whether the option is currently selected.
         *
         * @return {Boolean}
         */
        get: function get() {
            return !!this.getAttribute('selected');
        },

        /**
         * Indicates whether the option is currently selected.
         *
         * @param {Boolean} selected
         */
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
    }, {
        key: 'text',

        /**
         * Contains the text content of the element.
         *
         * @return {String}
         */
        get: function get() {
            return this.textContent;
        },

        /**
         * Contains the text content of the element.
         *
         * @param {String} text
         */
        set: function set(text) {
            while (this.firstChild) {
                this.removeChild(this.firstChild);
            }
            this.appendChild(this.ownerDocument.createTextNode(text));
        }
    }, {
        key: 'value',

        /**
         * Reflects the value of the value HTML attribute, if it exists;
         * otherwise reflects value of the Node.textContent property.
         *
         * @return {String}
         */
        get: function get() {
            var value = this.getAttribute('value');
            return value === null ? this.textContent : value;
        },

        /**
         * Reflects the value of the value HTML attribute, if it exists;
         * otherwise reflects value of the Node.textContent property.
         *
         * @param {String} value
         */
        set: function set(value) {
            if (value) {
                this.setAttribute('value', value);
            } else {
                this.removeAttribute('value');
            }
        }
    }]);

    return HTMLOptionElement;
})(HTMLElement);

exports['default'] = HTMLOptionElement;
module.exports = exports['default'];
//# sourceMappingURL=HTMLOptionElement.js.map