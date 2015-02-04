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

var DocumentFragment = (function (ParentNode) {
  var DocumentFragment = function DocumentFragment() {
    ParentNode.apply(this, arguments);
  };

  _extends(DocumentFragment, ParentNode);

  _classProps(DocumentFragment, null, {
    outerHTML: {
      /**
       * @return {String}
       */
      get: function () {
        return this.innerHTML;
      }
    }
  });

  return DocumentFragment;
})(ParentNode);

exports.DocumentFragment = DocumentFragment;


Object.defineProperty(DocumentFragment.prototype, "nodeType", { value: Node.DOCUMENT_FRAGMENT_NODE });
//# sourceMappingURL=DocumentFragment.js.map