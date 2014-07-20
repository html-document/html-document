"use strict";
Object.defineProperties(exports, {
  Node: {get: function() {
      return Node;
    }},
  __esModule: {value: true}
});
var $__Object$defineProperty = Object.defineProperty;
var Node = function() {
  "use strict";
  function Node() {
    this._attributes = {};
  }
  $__Object$defineProperty(Node.prototype, "getAttribute", {
    value: function(attributeName) {
      return this._attributes[attributeName];
    },
    enumerable: false,
    writable: true
  });
  $__Object$defineProperty(Node.prototype, "setAttribute", {
    value: function(attributeName, attributeValue) {
      this._setAttribute(attributeName, attributeValue);
      this._updatedAttribute(attributeName, this._attributes[attributeName]);
    },
    enumerable: false,
    writable: true
  });
  $__Object$defineProperty(Node.prototype, "_setAttribute", {
    value: function(attributeName, attributeValue) {
      this._attributes[attributeName] = String(attributeValue);
    },
    enumerable: false,
    writable: true
  });
  $__Object$defineProperty(Node.prototype, "removeAttribute", {
    value: function(attributeName) {
      delete this._attributes[attributeName];
      this._updatedAttribute(attributeName);
    },
    enumerable: false,
    writable: true
  });
  $__Object$defineProperty(Node.prototype, "_updatedAttribute", {
    value: function(attributeName) {},
    enumerable: false,
    writable: true
  });
  $__Object$defineProperty(Node.prototype, "textContent", {
    get: function() {
      return '';
    },
    enumerable: true,
    configurable: true
  });
  $__Object$defineProperty(Node.prototype, "_toHTML", {
    value: function() {
      return this.outerHTML;
    },
    enumerable: false,
    writable: true
  });
  return Node;
}();
Object.defineProperty(Node, 'ELEMENT_NODE', {value: 1});
Object.defineProperty(Node, 'ATTRIBUTE_NODE', {value: 2});
Object.defineProperty(Node, 'TEXT_NODE', {value: 3});
Object.defineProperty(Node, 'CDATA_SECTION_NODE', {value: 4});
Object.defineProperty(Node, 'ENTITY_REFERENCE_NODE', {value: 5});
Object.defineProperty(Node, 'ENTITY_NODE', {value: 6});
Object.defineProperty(Node, 'PROCESSING_INSTRUCTION_NODE', {value: 7});
Object.defineProperty(Node, 'COMMENT_NODE', {value: 8});
Object.defineProperty(Node, 'DOCUMENT_NODE', {value: 9});
Object.defineProperty(Node, 'DOCUMENT_TYPE_NODE', {value: 10});
Object.defineProperty(Node, 'DOCUMENT_FRAGMENT_NODE', {value: 11});
Object.defineProperty(Node, 'NOTATION_NODE', {value: 12});

//# sourceMappingURL=Node.js.map