'use strict';

var _get = require('babel-runtime/helpers/get')['default'];

var _inherits = require('babel-runtime/helpers/inherits')['default'];

var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _AbstractAbstractCSSStyleDeclaration = require('../Abstract/AbstractCSSStyleDeclaration');

var _AbstractAbstractCSSStyleDeclaration2 = _interopRequireDefault(_AbstractAbstractCSSStyleDeclaration);

/**
 * @see https://developer.mozilla.org/en/docs/Web/API/CSSStyleDeclaration
 */
/** @class CSSStyleDeclaration 
* @param element */
var CSSStyleDeclaration = (function (_AbstractCSSStyleDeclaration) {
    _inherits(CSSStyleDeclaration, _AbstractCSSStyleDeclaration);

    /**
     * @param {HTMLElement} element
     */

    function CSSStyleDeclaration(element) {
        _classCallCheck(this, CSSStyleDeclaration);

        _get(Object.getPrototypeOf(CSSStyleDeclaration.prototype), 'constructor', this).call(this);
        this._element = element;
    }

    _createClass(CSSStyleDeclaration, [{
        key: '_stringify',
        /** @memberof CSSStyleDeclaration 
        * @instance 
        * @method _stringify */value: function _stringify() {
            _get(Object.getPrototypeOf(CSSStyleDeclaration.prototype), '_stringify', this).call(this);
            this._element._setAttribute('style', this.cssText);
        }
    }]);

    return CSSStyleDeclaration;
})(_AbstractAbstractCSSStyleDeclaration2['default']);

exports['default'] = CSSStyleDeclaration;
module.exports = exports['default'];
//# sourceMappingURL=CSSStyleDeclaration.js.map