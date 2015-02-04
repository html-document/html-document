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

var Node = require("./Node").Node;
var parser = require("./parser");

var ParentNode = (function (Node) {
  var ParentNode = function ParentNode() {
    Node.call(this);
    this._childNodes = [];
  };

  _extends(ParentNode, Node);

  ParentNode.prototype._childNodesRecursiveForEach = function (callback) {
    this._childNodes.forEach(function (node) {
      callback(node);
      if (node instanceof ParentNode) {
        node._childNodesRecursiveForEach(callback);
      }
    });
  };

  ParentNode.prototype._childNodesRecursiveFind = function (callback) {
    var result;
    this._childNodes.some(function (node) {
      if (callback(node)) {
        result = node;
        return true;
      }
      if (node instanceof ParentNode) {
        result = node._childNodesRecursiveFind(callback);
        if (result !== undefined) {
          return true;
        }
      }
    });
    return result;
  };

  ParentNode.prototype.appendChild = function (child) {
    if (!child instanceof Node) {
      throw new Error("Trying to add non node element");
    }
    if (child._parentNode) {
      child._parentNode.removeChild(child);
    }
    if (child.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
      var childNode;
      while (childNode = child.firstChild) {
        child.removeChild(childNode);
        this.appendChild(childNode);
      }
      return child;
    }
    child._parentNode = this;
    this._childNodes.push(child);
    return child;
  };

  ParentNode.prototype.replaceChild = function (newChild, oldChild) {
    var index = this._childNodes.indexOf(oldChild);
    if (index === -1) {
      throw new Error("Node was not found");
    }
    if (newChild._parentNode) {
      newChild._parentNode.removeChild(newChild);
    }
    if (newChild.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
      var newChildren = [], childNode;
      while (childNode = newChild.firstChild) {
        newChild.removeChild(childNode);
        childNode._parentNode = this;
        newChildren.push(childNode);
      }
      this._childNodes.splice.bind(this._childNodes, index, 1).apply(null, newChildren);
    } else {
      newChild._parentNode = this;
      this._childNodes[index] = newChild;
    }
    delete oldChild._parentNode;
    return oldChild;
  };

  ParentNode.prototype.removeChild = function (toRemoveChild) {
    var index = this._childNodes.indexOf(toRemoveChild);
    if (index === -1) {
      throw new Error("Node was not found");
    }
    this._childNodes.splice(index, 1);
    delete toRemoveChild._parentNode;
    return toRemoveChild;
  };

  ParentNode.prototype.insertBefore = function (child, existingChild) {
    var index = this._childNodes.indexOf(existingChild);
    if (index === -1) {
      throw new Error("Node was not found");
    }
    if (child._parentNode) {
      child._parentNode.removeChild(child);
    }
    if (child.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
      var children = [], childNode;
      while (childNode = child.firstChild) {
        child.removeChild(childNode);
        childNode._parentNode = this;
        children.push(childNode);
      }
      this._childNodes.splice.bind(this._childNodes, index, 0).apply(null, children);
    } else {
      child._parentNode = this;
      this._childNodes.splice(index, 0, child);
    }
    return child;
  };

  _classProps(ParentNode, null, {
    childNodes: {
      /**
       * @return {HTMLCollection}
       */
      get: function () {
        return this._childNodes;
      }
    },
    parentNode: {
      /**
       * @return {Node|null}
       */
      get: function () {
        return this._parentNode || null;
      }
    },
    firstChild: {
      /**
       * @return {Node|null}
       */
      get: function () {
        return this._childNodes[0] || null;
      }
    },
    lastChild: {
      /**
       * @return {Node|null}
       */
      get: function () {
        return this._childNodes[this._childNodes.length - 1] || null;
      }
    },
    previousSibling: {
      /**
       * @return {Node|null}
       */
      get: function () {
        var indexInParent = this.parentNode._childNodes.indexOf(this);
        if (indexInParent === -1) {
          throw new Error("Unexpected state: this node is not in the parent");
        }
        return indexInParent !== 0 && this.parentNode._childNodes[indexInParent - 1] || null;
      }
    },
    nextSibling: {
      /**
       * @return {Node|null}
       */
      get: function () {
        var indexInParent = this.parentNode._childNodes.indexOf(this);
        if (indexInParent === -1) {
          throw new Error("Unexpected state: this node is not in the parent");
        }
        return this.parentNode._childNodes[indexInParent + 1] || null;
      }
    },
    innerHTML: {
      /**
       * @return {String}
       */
      get: function () {
        return this._childNodes.reduce(function (value, node) {
          return value + node._toHTML();
        }, "");
      },
      set: function (html) {
        this._childNodes = [];
        parser.parse(html, this);
      }
    },
    textContent: {
      /**
       * @return {String}
       */
      get: function () {
        return this._childNodes.reduce(function (value, node) {
          return value + node.textContent;
        }, "");
      }
    }
  });

  return ParentNode;
})(Node);

exports.ParentNode = ParentNode;
//# sourceMappingURL=ParentNode.js.map