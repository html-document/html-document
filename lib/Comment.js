'use strict';

var _get = require('babel-runtime/helpers/get').default;

var _inherits = require('babel-runtime/helpers/inherits').default;

var _createClass = require('babel-runtime/helpers/create-class').default;

var _classCallCheck = require('babel-runtime/helpers/class-call-check').default;

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default').default;

Object.defineProperty(exports, '__esModule', {
  value: true
});

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
/** @class Comment 
* @param comment */
let Comment = (function (_Node) {
  _inherits(Comment, _Node);

  /*
   * @constructs Comment
   *
   * @param {String} comment
   */

  function Comment(comment) {
    _classCallCheck(this, Comment);

    _get(Object.getPrototypeOf(Comment.prototype), 'constructor', this).call(this);
    this._value = comment;
  }

  /**
   * @constant {number} Comment#nodeType
   */

  /**
   * @property Comment#innerHTML
   * @inheritdoc
   
  * @memberof Comment 
  * @instance 
  * @member innerHTML */

  _createClass(Comment, [{
    key: 'innerHTML',
    get: function get() {
      return '';
    }

    /**
     * @inheritdoc
     
    * @memberof Comment 
    * @instance 
    * @member outerHTML */
  }, {
    key: 'outerHTML',
    get: function get() {
      return '<!--' + (0, _utilsEscapeHTML2.default)(this._value) + '-->';
    }

    /**
     * Returns comment's value
     *
     * @type {String}
     
    * @memberof Comment 
    * @instance 
    * @member data */
  }, {
    key: 'data',
    get: function get() {
      return this._value;
    },

    /**
     * Set comment's value
     *
     * @param {String} data
     
    * @memberof Comment 
    * @instance 
    * @param data */
    set: function set(data) {
      this._value = data;
    }
  }]);

  return Comment;
})(_Node3.default);

exports.default = Comment;
Object.defineProperty(Comment.prototype, 'nodeType', { value: _Node3.default.COMMENT_NODE });

/**
 * @constant {string} Comment#nodeName
 */
Object.defineProperty(Comment.prototype, 'nodeName', { value: '#comment' });
module.exports = exports.default;
//# sourceMappingURL=Comment.js.map