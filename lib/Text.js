'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _utilsEscapeHTML = require('./utils/escapeHTML');

var _utilsEscapeHTML2 = _interopRequireDefault(_utilsEscapeHTML);

var _Node2 = require('./Node');

var _Node3 = _interopRequireDefault(_Node2);

/**
* @see https://developer.mozilla.org/en/docs/Web/API/Text
* @class Text
* @extends Node
* @param {String} textContent
* @property {String} textContent
*/

var Text = (function (_Node) {
    function Text(textContent) {
        _classCallCheck(this, Text);

        _get(Object.getPrototypeOf(Text.prototype), 'constructor', this).call(this);
        this.value = textContent;
    }

    _inherits(Text, _Node);

    _createClass(Text, [{
        key: '_toHTML',
        value: function _toHTML() {
            return (0, _utilsEscapeHTML2['default'])(this.value);
        }
    }, {
        key: 'textContent',
        get: function get() {
            return this.value;
        },
        set: function set(textContent) {
            this.value = textContent;
        }
    }]);

    return Text;
})(_Node3['default']);

exports['default'] = Text;

/**
 * @constant {number} Comment#nodeType
 */
Object.defineProperty(Text.prototype, 'nodeType', { value: _Node3['default'].TEXT_NODE });

/**
 * @constant {string} Comment#nodeName
 */
Object.defineProperty(Text.prototype, 'nodeName', { value: '#text' });
module.exports = exports['default'];
//# sourceMappingURL=Text.js.map