"use strict";

var _classProps = function (child, staticProps, instanceProps) {
  if (staticProps) Object.defineProperties(child, staticProps);
  if (instanceProps) Object.defineProperties(child.prototype, instanceProps);
};

var _extends = function (child, parent) {
  child.prototype = Object.create(parent.prototype, {
    constructor: {
      value: child,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  child.__proto__ = parent;
};

var escapeHTML = require("./utils/escapeHTML");
var Node = require("./Node").Node;

var Comment = (function (Node) {
  var Comment =
  /**
   * @param {String}
   */
  function Comment(comment) {
    this._value = comment;
  };

  _extends(Comment, Node);

  _classProps(Comment, null, {
    innerHTML: {
      /**
       * @return {String}
       */
      get: function () {
        return "";
      }
    },
    outerHTML: {
      /**
       * @return {String}
       */
      get: function () {
        return "<!--" + escapeHTML(this._value) + "-->";
      }
    },
    data: {
      /**
       * Returns comment's value
       *
       * @return {String}
       */
      get: function () {
        return this._value;
      },


      /**
       * Set comment's value
       *
       * @param {String} data
       * @return {String}
       */
      set: function (data) {
        this._value = data;
      }
    }
  });

  return Comment;
})(Node);

exports.Comment = Comment;
Object.defineProperty(Comment.prototype, "nodeType", { value: Node.COMMENT_NODE });
Object.defineProperty(Comment.prototype, "nodeName", { value: "#comment" });
//# sourceMappingURL=Comment.js.map