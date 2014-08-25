"use strict";
Object.defineProperties(exports, {
  Element: {get: function() {
      return Element;
    }},
  __esModule: {value: true}
});
var $__Object$defineProperty = Object.defineProperty;
var $__Object$create = Object.create;
var $__Object$getPrototypeOf = Object.getPrototypeOf;
var Node = require('./Node').Node;
var ParentNode = require('./ParentNode').ParentNode;
var Element = function($__super) {
  "use strict";
  function Element() {
    var $__0 = $__Object$getPrototypeOf(Element.prototype);
    if ($__0 !== null)
      $__0.constructor.apply(this, arguments);
  }
  Element.__proto__ = ($__super !== null ? $__super : Function.prototype);
  Element.prototype = $__Object$create(($__super !== null ? $__super.prototype : null));
  $__Object$defineProperty(Element.prototype, "constructor", {value: Element});
  $__Object$defineProperty(Element.prototype, "id", {
    get: function() {
      return this.getAttribute('id');
    },
    set: function(id) {
      this.setAttribute('id', id);
    },
    enumerable: true,
    configurable: true
  });
  $__Object$defineProperty(Element.prototype, "tagName", {
    get: function() {
      return this.nodeName;
    },
    enumerable: true,
    configurable: true
  });
  $__Object$defineProperty(Element.prototype, "children", {
    get: function() {
      return this._childNodes.filter(function(n) {
        return n instanceof Element;
      });
    },
    enumerable: true,
    configurable: true
  });
  $__Object$defineProperty(Element.prototype, "firstElementChild", {
    get: function() {
      return this._childNodes[0] || null;
    },
    enumerable: true,
    configurable: true
  });
  $__Object$defineProperty(Element.prototype, "lastElementChild", {
    get: function() {
      return this._childNodes.length === 0 ? null : this._childNodes[this._childNodes.length - 1];
    },
    enumerable: true,
    configurable: true
  });
  $__Object$defineProperty(Element.prototype, "childElementCount", {
    get: function() {
      return this._childNodes.length;
    },
    enumerable: true,
    configurable: true
  });
  $__Object$defineProperty(Element.prototype, "getElementById", {
    value: function(id) {
      return this._childNodesRecursiveFind(function(e) {
        if (e instanceof Element && e.getAttribute('id') === id) {
          return true;
        }
      }) || null;
    },
    enumerable: false,
    writable: true
  });
  $__Object$defineProperty(Element.prototype, "getElementsByTagName", {
    value: function(tagName, _array) {
      if (!tagName) {
        return !_array ? this.children.slice() : _array.push.apply(_array, this.children);
      }
      _array = _array || [];
      tagName = tagName.toLowerCase();
      this.children.forEach(function(e) {
        if (e.nodeName.toLowerCase() === tagName) {
          _array.push(e);
        }
      });
      return _array;
    },
    enumerable: false,
    writable: true
  });
  return Element;
}(ParentNode);
Object.defineProperty(Element.prototype, 'nodeType', {value: Node.ELEMENT_NODE});

//# sourceMappingURL=Element.js.map