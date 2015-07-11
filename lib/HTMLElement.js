'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _Element2 = require('./Element');

var _Element3 = _interopRequireDefault(_Element2);

var _HTMLElementCSSStyleDeclaration = require('./HTMLElement/CSSStyleDeclaration');

var _HTMLElementCSSStyleDeclaration2 = _interopRequireDefault(_HTMLElementCSSStyleDeclaration);

var _HTMLElementClassList = require('./HTMLElement/ClassList');

var _HTMLElementClassList2 = _interopRequireDefault(_HTMLElementClassList);

var _utilsEscapeAttribute = require('./utils/escapeAttribute');

var _utilsEscapeAttribute2 = _interopRequireDefault(_utilsEscapeAttribute);

var voidElements = 'area base br col embed hr img input keygen link meta param source track wbr'.split(' ');

/**
 * The HTMLElement interface represents any HTML element.
 *
 * @see https://developer.mozilla.org/en/docs/Web/API/HTMLElement
 * @class HTMLElement
 * @extends Element
 */

var HTMLElement = (function (_Element) {
    function HTMLElement() {
        _classCallCheck(this, HTMLElement);

        _get(Object.getPrototypeOf(HTMLElement.prototype), 'constructor', this).call(this);
        /**
         * returns a token list of the class attribute of the element
         * @member {CSSStyleDeclaration} HTMLElement#style
         * @readonly
         */
        this.style = new _HTMLElementCSSStyleDeclaration2['default'](this);
        /**
         * returns a token list of the class attribute of the element
         * @member {ClassList} HTMLElement#classList
         * @readonly
         */
        this.classList = new _HTMLElementClassList2['default'](this);
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
         * The class of the element.
         *
         * @member {String} HTMLElement#className
         */
        get: function get() {
            return this.getAttribute('class');
        },

        /**
         * @ignore
         * @param {String} className
         */
        set: function set(className) {
            this.setAttribute('class', className);
        }
    }, {
        key: 'outerHTML',

        /**
         * @ignore
         * @return {String}
         */
        get: function get() {
            var _this = this;

            return '<' + this.nodeName + Object.keys(this._attributes).reduce(function (value, attributeName) {
                return value + ' ' + attributeName + '="' + (0, _utilsEscapeAttribute2['default'])(_this._attributes[attributeName]) + '"';
            }, '') + '>' + (voidElements.indexOf(this.nodeName) !== -1 ? '' : this.innerHTML + '</' + this.nodeName + '>');
        }
    }]);

    return HTMLElement;
})(_Element3['default']);

exports['default'] = HTMLElement;
module.exports = exports['default'];
//# sourceMappingURL=HTMLElement.js.map