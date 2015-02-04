"use strict";

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

var AbstractCSSStyleDeclaration = require("../Abstract/AbstractCSSStyleDeclaration").AbstractCSSStyleDeclaration;

var CSSStyleDeclaration = (function (AbstractCSSStyleDeclaration) {
  var CSSStyleDeclaration =
  /**
   * @param {HTMLElement} element
   */
  function CSSStyleDeclaration(element) {
    this._element = element;
  };

  _extends(CSSStyleDeclaration, AbstractCSSStyleDeclaration);

  CSSStyleDeclaration.prototype._stringify = function () {
    AbstractCSSStyleDeclaration.prototype._stringify.call(this);
    this._element._setAttribute("style", this.cssText);
  };

  return CSSStyleDeclaration;
})(AbstractCSSStyleDeclaration);

exports.CSSStyleDeclaration = CSSStyleDeclaration;
//# sourceMappingURL=../HTMLElement/CSSStyleDeclaration.js.map