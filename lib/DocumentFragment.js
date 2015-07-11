'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _Node = require('./Node');

var _Node2 = _interopRequireDefault(_Node);

var _ParentNode2 = require('./ParentNode');

var _ParentNode3 = _interopRequireDefault(_ParentNode2);

/**
 * The DocumentFragment interface represents a minimal document object that has no parent. It is used as
 * a light-weight version of Document to store well-formed or potentially non-well-formed fragments of XML.
 *
  * @see https://developer.mozilla.org/en/docs/Web/API/DocumentFragment
  * @class DocumentFragment
  * @extends ParentNode
 */

var DocumentFragment = (function (_ParentNode) {
  function DocumentFragment() {
    _classCallCheck(this, DocumentFragment);

    _get(Object.getPrototypeOf(DocumentFragment.prototype), 'constructor', this).apply(this, arguments);
  }

  _inherits(DocumentFragment, _ParentNode);

  _createClass(DocumentFragment, [{
    key: 'outerHTML',

    /**
     * @inheritdoc
     */
    get: function get() {
      return this.innerHTML;
    }
  }]);

  return DocumentFragment;
})(_ParentNode3['default']);

exports['default'] = DocumentFragment;

/**
 * @constant {number} Comment#nodeType
 */
Object.defineProperty(DocumentFragment.prototype, 'nodeType', { value: _Node2['default'].DOCUMENT_FRAGMENT_NODE });
module.exports = exports['default'];
//# sourceMappingURL=DocumentFragment.js.map