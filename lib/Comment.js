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
 * @see https://developer.mozilla.org/en/docs/Web/API/Comment
 * @class Comment
 * @extends Node
 * @param {String} comment
 */

var Comment = (function (_Node) {
  /*
   * @constructs Comment
   *
   * @param {String} comment
   */

  function Comment(comment /*: string*/) {
    _classCallCheck(this, Comment);

    _get(Object.getPrototypeOf(Comment.prototype), 'constructor', this).call(this);
    this._value = comment;
  }

  _inherits(Comment, _Node);

  _createClass(Comment, [{
    key: 'innerHTML',

    /**
     * @property Comment#innerHTML
     * @inheritdoc
     */
    get: function get() {
      return '';
    }
  }, {
    key: 'outerHTML',

    /**
     * @inheritdoc
     */
    get: function get() {
      return '<!--' + (0, _utilsEscapeHTML2['default'])(this._value) + '-->';
    }
  }, {
    key: 'data',

    /**
     * Returns comment's value
     *
     * @type {String}
     */
    get: function get() {
      return this._value;
    },

    /**
     * Set comment's value
     *
     * @param {String} data
     */
    set: function set(data) {
      this._value = data;
    }
  }]);

  return Comment;
})(_Node3['default']);

exports['default'] = Comment;

/**
 * @constant {number} Comment#nodeType
 */
Object.defineProperty(Comment.prototype, 'nodeType', { value: _Node3['default'].COMMENT_NODE });

/**
 * @constant {string} Comment#nodeName
 */
Object.defineProperty(Comment.prototype, 'nodeName', { value: '#comment' });
module.exports = exports['default'];
//# sourceMappingURL=Comment.js.map