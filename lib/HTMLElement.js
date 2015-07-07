'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var Element = require('./Element');
var CSSStyleDeclaration = require('./HTMLElement/CSSStyleDeclaration');
var ClassList = require('./HTMLElement/ClassList');
var escapeAttribute = require('./utils/escapeAttribute');

var voidElements = 'area base br col embed hr img input keygen link meta param source track wbr'.split(' ');

/**
 * The HTMLElement interface represents any HTML element.
 *
 * {@link https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement}
 */

var HTMLElement = (function (_Element) {
    function HTMLElement() {
        _classCallCheck(this, HTMLElement);

        _get(Object.getPrototypeOf(HTMLElement.prototype), 'constructor', this).call(this);
        this.style = new CSSStyleDeclaration(this);
        /**
         * returns a token list of the class attribute of the element
         * @type {ClassList}
         */
        this.classList = new ClassList(this);
    }

    _inherits(HTMLElement, _Element);

    _createClass(HTMLElement, [{
        key: '_updatedAttribute',
        value: function _updatedAttribute(attributeName, value) {
            if (attributeName === 'style') {
                this.style.cssText = value || '';
            }
            if (attributeName === 'class') {
                this.classList._parse(value || '');
            }
        }
    }, {
        key: 'className',

        /**
         * Gets the class of the element.
         *
         * @return {string}
         */
        get: function get() {
            return this.getAttribute('class');
        },

        /**
         * Sets the class of the element.
         *
         * @param {string} className
         */
        set: function set(className) {
            this.setAttribute('class', className);
        }
    }, {
        key: 'outerHTML',

        /**
         * @return {string}
         */
        get: function get() {
            var _this = this;

            return '<' + this.nodeName + Object.keys(this._attributes).reduce(function (value, attributeName) {
                return value + ' ' + attributeName + '="' + escapeAttribute(_this._attributes[attributeName]) + '"';
            }, '') + '>' + (voidElements.indexOf(this.nodeName) !== -1 ? '' : this.innerHTML + '</' + this.nodeName + '>');
        }
    }]);

    return HTMLElement;
})(Element);

exports['default'] = HTMLElement;
module.exports = exports['default'];
//# sourceMappingURL=HTMLElement.js.map