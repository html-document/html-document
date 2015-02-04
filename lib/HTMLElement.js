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

var Element = require("./Element").Element;
var CSSStyleDeclaration = require("./HTMLElement/CSSStyleDeclaration").CSSStyleDeclaration;
var ClassList = require("./HTMLElement/ClassList").ClassList;
var escapeAttribute = require("./utils/escapeAttribute");

var voidElements = "area base br col embed hr img input keygen link meta param source track wbr".split(" ");

var HTMLElement = (function (Element) {
  var HTMLElement = function HTMLElement() {
    Element.call(this);
    this.style = new CSSStyleDeclaration(this);
    /**
     * returns a token list of the class attribute of the element
     * @type {ClassList}
     */
    this.classList = new ClassList(this);
  };

  _extends(HTMLElement, Element);

  HTMLElement.prototype._updatedAttribute = function (attributeName, value) {
    if (attributeName === "style") {
      this.style.cssText = value || "";
    }
    if (attributeName === "class") {
      this.classList._parse(value || "");
    }
  };

  _classProps(HTMLElement, null, {
    className: {
      /**
       * Gets the class of the element.
       *
       * @return {String}
       */
      get: function () {
        return this.getAttribute("class");
      },


      /**
       * Sets the class of the element.
       *
       * @param {String} className
       */
      set: function (className) {
        this.setAttribute("class", className);
      }
    },
    outerHTML: {
      /**
       * @return {String}
       */
      get: function () {
        var _this = this;
        return "<" + this.nodeName + Object.keys(this._attributes).reduce(function (value, attributeName) {
          return value + " " + attributeName + "=\"" + escapeAttribute(_this._attributes[attributeName]) + "\"";
        }, "") + ">" + (voidElements.indexOf(this.nodeName) !== -1 ? "" : this.innerHTML + "</" + this.nodeName + ">");
      }
    }
  });

  return HTMLElement;
})(Element);

exports.HTMLElement = HTMLElement;
//# sourceMappingURL=HTMLElement.js.map