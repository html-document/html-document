"use strict";
Object.defineProperties(exports, {
  Comment: {get: function() {
      return Comment;
    }},
  __esModule: {value: true}
});
var $__Object$defineProperty = Object.defineProperty;
var $__Object$create = Object.create;
var escapeHTML = require('./utils/escapeHTML');
var Node = require('./Node').Node;
var Comment = function($__super) {
  "use strict";
  function Comment(comment) {
    this._value = comment;
  }
  Comment.__proto__ = ($__super !== null ? $__super : Function.prototype);
  Comment.prototype = $__Object$create(($__super !== null ? $__super.prototype : null));
  $__Object$defineProperty(Comment.prototype, "constructor", {value: Comment});
  $__Object$defineProperty(Comment.prototype, "innerHTML", {
    get: function() {
      return '';
    },
    enumerable: true,
    configurable: true
  });
  $__Object$defineProperty(Comment.prototype, "outerHTML", {
    get: function() {
      return '<!--' + escapeHTML(this._value) + '-->';
    },
    enumerable: true,
    configurable: true
  });
  $__Object$defineProperty(Comment.prototype, "data", {
    get: function() {
      return this._value;
    },
    set: function(data) {
      this._value = data;
    },
    enumerable: true,
    configurable: true
  });
  return Comment;
}(Node);
Object.defineProperty(Comment.prototype, 'nodeType', {value: Node.COMMENT_NODE});
Object.defineProperty(Comment.prototype, 'nodeName', {value: '#comment'});

//# sourceMappingURL=Comment.js.map