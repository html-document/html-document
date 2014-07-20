"use strict";
Object.defineProperties(exports, {
  ParentNode: {get: function() {
      return ParentNode;
    }},
  __esModule: {value: true}
});
var $__Object$getPrototypeOf = Object.getPrototypeOf;
var $__Object$defineProperty = Object.defineProperty;
var $__Object$create = Object.create;
var Node = require('./Node').Node;
var ParentNode = function($__super) {
  "use strict";
  function ParentNode() {
    $__Object$getPrototypeOf(ParentNode.prototype).constructor.call(this);
    this._childNodes = [];
  }
  ParentNode.__proto__ = ($__super !== null ? $__super : Function.prototype);
  ParentNode.prototype = $__Object$create(($__super !== null ? $__super.prototype : null));
  $__Object$defineProperty(ParentNode.prototype, "constructor", {value: ParentNode});
  $__Object$defineProperty(ParentNode.prototype, "childNodes", {
    get: function() {
      return this._childNodes;
    },
    enumerable: true,
    configurable: true
  });
  $__Object$defineProperty(ParentNode.prototype, "firstChild", {
    get: function() {
      return this._childNodes[0] || null;
    },
    enumerable: true,
    configurable: true
  });
  $__Object$defineProperty(ParentNode.prototype, "lastChild", {
    get: function() {
      return this._childNodes[this._childNodes.length - 1] || null;
    },
    enumerable: true,
    configurable: true
  });
  $__Object$defineProperty(ParentNode.prototype, "appendChild", {
    value: function(child) {
      if (this._childNodes.indexOf(child) !== -1) {
        return child;
      }
      child._parentNode = this;
      this._childNodes.push(child);
      return child;
    },
    enumerable: false,
    writable: true
  });
  $__Object$defineProperty(ParentNode.prototype, "replaceChild", {
    value: function(newChild, oldChild) {
      var index = this._childNodes.indexOf(oldChild);
      if (index === -1) {
        throw new Error('Node was not found');
      }
      newChild._parentNode = this;
      this._childNodes[index] = newChild;
      delete oldChild._parentNode;
      return oldChild;
    },
    enumerable: false,
    writable: true
  });
  $__Object$defineProperty(ParentNode.prototype, "removeChild", {
    value: function(toRemoveChild) {
      var index = this._childNodes.indexOf(toRemoveChild);
      if (index === -1) {
        throw new Error('Node was not found');
      }
      this._childNodes.splice(index, 1);
      delete toRemoveChild._parentNode;
      return toRemoveChild;
    },
    enumerable: false,
    writable: true
  });
  $__Object$defineProperty(ParentNode.prototype, "insertBefore", {
    value: function(child, existingChild) {
      var index = this._childNodes.indexOf(existingChild);
      if (index === -1) {
        throw new Error('Node was not found');
      }
      child._parentNode = this;
      if (index === 0) {
        this._childNodes.unshift(child);
      } else {
        this._childNodes.splice(index, 0, child);
      }
      return child;
    },
    enumerable: false,
    writable: true
  });
  $__Object$defineProperty(ParentNode.prototype, "innerHTML", {
    get: function() {
      return this._childNodes.reduce(function(value, node) {
        return value + node._toHTML();
      }, '');
    },
    enumerable: true,
    configurable: true
  });
  $__Object$defineProperty(ParentNode.prototype, "textContent", {
    get: function() {
      return this._childNodes.reduce(function(value, node) {
        return value + node.textContent;
      }, '');
    },
    enumerable: true,
    configurable: true
  });
  return ParentNode;
}(Node);

//# sourceMappingURL=ParentNode.js.map