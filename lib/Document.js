"use strict";
Object.defineProperties(exports, {
  Document: {get: function() {
      return Document;
    }},
  __esModule: {value: true}
});
var $__Object$defineProperty = Object.defineProperty;
var Node = require('./Node').Node;
var Comment = require('./Comment').Comment;
var DocumentFragment = require('./DocumentFragment').DocumentFragment;
var HTMLElement = require('./HTMLElement').HTMLElement;
var Text = require('./Text').Text;
var Document = function() {
  "use strict";
  function Document() {
    this.documentElement = this.createElement('html');
  }
  $__Object$defineProperty(Document.prototype, "createComment", {
    value: function(data) {
      var comment = new Comment(data);
      comment.ownerDocument = this;
      return comment;
    },
    enumerable: false,
    writable: true
  });
  $__Object$defineProperty(Document.prototype, "createDocumentFragment", {
    value: function() {
      var fragment = new DocumentFragment();
      fragment.ownerDocument = this;
      return fragment;
    },
    enumerable: false,
    writable: true
  });
  $__Object$defineProperty(Document.prototype, "createElement", {
    value: function(name) {
      var element = new HTMLElement();
      element.nodeName = name;
      element.ownerDocument = this;
      return element;
    },
    enumerable: false,
    writable: true
  });
  $__Object$defineProperty(Document.prototype, "createTextNode", {
    value: function(textContent) {
      var text = new Text(textContent);
      text.ownerDocument = this;
      return text;
    },
    enumerable: false,
    writable: true
  });
  return Document;
}();
Object.defineProperty(Document.prototype, 'nodeType', {value: Node.DOCUMENT_NODE});

//# sourceMappingURL=Document.js.map