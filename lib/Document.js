"use strict";
Object.defineProperties(exports, {
  Document: {get: function() {
      return Document;
    }},
  __esModule: {value: true}
});
var $__Object$defineProperty = Object.defineProperty;
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
      return new Comment(data);
    },
    enumerable: false,
    writable: true
  });
  $__Object$defineProperty(Document.prototype, "createDocumentFragment", {
    value: function() {
      return new DocumentFragment();
    },
    enumerable: false,
    writable: true
  });
  $__Object$defineProperty(Document.prototype, "createElement", {
    value: function(name) {
      var element = new HTMLElement();
      element.nodeName = name;
      return element;
    },
    enumerable: false,
    writable: true
  });
  $__Object$defineProperty(Document.prototype, "createTextNode", {
    value: function(textContent) {
      return new Text(textContent);
    },
    enumerable: false,
    writable: true
  });
  return Document;
}();

//# sourceMappingURL=Document.js.map