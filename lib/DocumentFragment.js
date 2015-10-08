'use strict';

var _get = require('babel-runtime/helpers/get')['default'];

var _inherits = require('babel-runtime/helpers/inherits')['default'];

var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _Node = require('./Node');

var _Node2 = _interopRequireDefault(_Node);

var _ParentNode2 = require('./ParentNode');

var _ParentNode3 = _interopRequireDefault(_ParentNode2);

/**
 * The DocumentFragment interface represents a minimal document object that has no parent. It is used as
 * a light-weight version of Document to store well-formed or potentially non-well-formed fragments of XML.
 *
  * @see https://developer.mozilla.org/en/docs/Web/API/DocumentFragment
 */
/** @class DocumentFragment */
var DocumentFragment = (function (_ParentNode) {
  _inherits(DocumentFragment, _ParentNode);

  function DocumentFragment() {
    _classCallCheck(this, DocumentFragment);

    _get(Object.getPrototypeOf(DocumentFragment.prototype), 'constructor', this).apply(this, arguments);
  }

  /**
   * @constant {number} Comment#nodeType
   */

  _createClass(DocumentFragment, [{
    key: 'outerHTML',

    /**
     * @inheritdoc
     
    * @memberof DocumentFragment 
    * @instance 
    * @member outerHTML */
    get: function get() {
      return this.innerHTML;
    }
  }]);

  return DocumentFragment;
})(_ParentNode3['default']);

exports['default'] = DocumentFragment;
Object.defineProperty(DocumentFragment.prototype, 'nodeType', { value: _Node2['default'].DOCUMENT_FRAGMENT_NODE });
module.exports = exports['default'];
//# sourceMappingURL=DocumentFragment.js.map