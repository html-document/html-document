'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var escapeHTML = require('./utils/escapeHTML');
var Node = require('./Node').Node;

/**
 * Comment Node
 */

var Comment = (function (_Node) {
  /**
   * @param {String}
   */

  function Comment(comment) {
    _classCallCheck(this, Comment);

    _get(Object.getPrototypeOf(Comment.prototype), 'constructor', this).call(this);
    this._value = comment;
  }

  _inherits(Comment, _Node);

  _createClass(Comment, [{
    key: 'innerHTML',

    /**
     * @return {String}
     */
    get: function get() {
      return '';
    }
  }, {
    key: 'outerHTML',

    /**
     * @return {String}
     */
    get: function get() {
      return '<!--' + escapeHTML(this._value) + '-->';
    }
  }, {
    key: 'data',

    /**
     * Returns comment's value
     *
     * @return {String}
     */
    get: function get() {
      return this._value;
    },

    /**
     * Set comment's value
     *
     * @param {String} data
     * @return {String}
     */
    set: function set(data) {
      this._value = data;
    }
  }]);

  return Comment;
})(Node);

exports.Comment = Comment;

Object.defineProperty(Comment.prototype, 'nodeType', { value: Node.COMMENT_NODE });
Object.defineProperty(Comment.prototype, 'nodeName', { value: '#comment' });
//# sourceMappingURL=Comment.js.map