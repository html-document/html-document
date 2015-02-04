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

var escapeHTML = require("./utils/escapeHTML");
var Node = require("./Node").Node;

var Text = (function (Node) {
  var Text = function Text(textContent) {
    this.value = textContent;
  };

  _extends(Text, Node);

  Text.prototype._toHTML = function () {
    return escapeHTML(this.value);
  };

  _classProps(Text, null, {
    textContent: {
      get: function () {
        return this.value;
      },
      set: function (textContent) {
        this.value = textContent;
      }
    }
  });

  return Text;
})(Node);

exports.Text = Text;
Object.defineProperty(Text.prototype, "nodeType", { value: Node.TEXT_NODE });
Object.defineProperty(Text.prototype, "nodeName", { value: "#text" });
//# sourceMappingURL=Text.js.map