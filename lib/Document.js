"use strict";
Object.defineProperties(exports, {
  Document: {get: function() {
      return Document;
    }},
  __esModule: {value: true}
});
var $__Object$defineProperty = Object.defineProperty;
var $__Object$create = Object.create;
var Node = require('./Node').Node;
var Comment = require('./Comment').Comment;
var DocumentFragment = require('./DocumentFragment').DocumentFragment;
var HTMLElement = require('./HTMLElement').HTMLElement;
var Text = require('./Text').Text;
var HTMLOptionElement = require('./HTMLElement/elements/HTMLOptionElement').HTMLOptionElement;
var HTMLSelectElement = require('./HTMLElement/elements/HTMLSelectElement').HTMLSelectElement;
var Document = function($__super) {
  "use strict";
  function Document() {
    this.documentElement = this.createElement('html');
    this.head = this.createElement('head');
    this.documentElement.appendChild(this.head);
    this.body = this.createElement('body');
    this.documentElement.appendChild(this.body);
  }
  Document.__proto__ = ($__super !== null ? $__super : Function.prototype);
  Document.prototype = $__Object$create(($__super !== null ? $__super.prototype : null));
  $__Object$defineProperty(Document.prototype, "constructor", {value: Document});
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
      var element;
      switch (name.toLowerCase()) {
        case 'select':
          element = new HTMLSelectElement();
          break;
        case 'option':
          element = new HTMLOptionElement();
          break;
        default:
          element = new HTMLElement();
          element.nodeName = name;
      }
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
  $__Object$defineProperty(Document.prototype, "getElementById", {
    value: function(id) {
      return this.documentElement.getElementById(id);
    },
    enumerable: false,
    writable: true
  });
  $__Object$defineProperty(Document.prototype, "getElementsByTagName", {
    value: function(tagName, _array) {
      return this.documentElement.getElementsByTagName(tagName, _array);
    },
    enumerable: false,
    writable: true
  });
  $__Object$defineProperty(Document.prototype, "getElementsByClassName", {
    value: function(className) {
      throw new Error('Not implemented');
    },
    enumerable: false,
    writable: true
  });
  $__Object$defineProperty(Document.prototype, "querySelector", {
    value: function() {
      throw new Error('Not implemented');
    },
    enumerable: false,
    writable: true
  });
  $__Object$defineProperty(Document.prototype, "querySelectorAll", {
    value: function() {
      throw new Error('Not implemented');
    },
    enumerable: false,
    writable: true
  });
  return Document;
}(Node);
Object.defineProperty(Document.prototype, 'nodeType', {value: Node.DOCUMENT_NODE});

//# sourceMappingURL=Document.js.map