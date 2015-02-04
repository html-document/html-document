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
var ParentNode = require("./ParentNode").ParentNode;

var Element = (function (ParentNode) {
  var Element = function Element() {
    ParentNode.apply(this, arguments);
  };

  _extends(Element, ParentNode);

  Element.prototype.getElementById = function (id) {
    return this._childNodesRecursiveFind(function (e) {
      if (e instanceof Element && e.getAttribute("id") === id) {
        return true;
      }
    }) || null;
  };

  Element.prototype.getElementsByTagName = function (tagName, _array) {
    if (!tagName) {
      return !_array ? this.children.slice() : _array.push.apply(_array, this.children);
    }
    _array = _array || [];
    tagName = tagName.toLowerCase();
    this.children.forEach(function (e) {
      if (e.nodeName.toLowerCase() === tagName) {
        _array.push(e);
      }
    });
    return _array;
  };

  _classProps(Element, null, {
    id: {
      /**
       * Gets the id of the element.
       *
       * @return {String}
       */
      get: function () {
        return this.getAttribute("id");
      },


      /**
       * Sets the id of the element.
       *
       * @param {String} id
       */
      set: function (id) {
        this.setAttribute("id", id);
      }
    },
    tagName: {
      /**
       * Gets the tagName of the element.
       *
       * @return {String}
       */
      get: function () {
        return this.nodeName;
      }
    },
    children: {
      /**
       * Returns a live {@link HTMLCollection} containing all objects of type {@link Element}
       * that are children of this ParentNode.
       *
       * Note: this currently returns a non-live array.
       *
       * @return {HTMLCollection}
       */
      get: function () {
        return this._childNodes.filter(function (n) {
          return n instanceof Element;
        });
      }
    },
    firstElementChild: {
      /**
       * Returns the {@link Element} that is the first child of this ParentNode, or null if there is none.
       *
       * @return {Element}
       */
      get: function () {
        return this._childNodes[0] || null;
      }
    },
    lastElementChild: {
      /**
       * Returns the {@link Element} that is the first child of this ParentNode, or null if there is none.
       *
       * @return {Element}
       */
      get: function () {
        return this._childNodes.length === 0 ? null : this._childNodes[this._childNodes.length - 1];
      }
    },
    childElementCount: {
      /**
       * Returns an unsigned long giving the amount of children that the object has.
       *
       * @return {Number}
       */
      get: function () {
        return this._childNodes.length;
      }
    }
  });

  return Element;
})(ParentNode);

exports.Element = Element;


Object.defineProperty(Element.prototype, "nodeType", { value: Node.ELEMENT_NODE });
//# sourceMappingURL=Element.js.map