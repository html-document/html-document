"use strict";
Object.defineProperties(exports, {
  HTMLElement: {get: function() {
      return HTMLElement;
    }},
  __esModule: {value: true}
});
var $__Object$getPrototypeOf = Object.getPrototypeOf;
var $__Object$defineProperty = Object.defineProperty;
var $__Object$create = Object.create;
var Element = require('./Element').Element;
var CSSStyleDeclaration = require('./HTMLElement/CSSStyleDeclaration').CSSStyleDeclaration;
var ClassList = require('./HTMLElement/ClassList').ClassList;
var escapeAttribute = require('./utils/escapeAttribute');
var HTMLElement = function($__super) {
  "use strict";
  function HTMLElement() {
    $__Object$getPrototypeOf(HTMLElement.prototype).constructor.call(this);
    this.style = new CSSStyleDeclaration(this);
    this.classList = new ClassList(this);
  }
  HTMLElement.__proto__ = ($__super !== null ? $__super : Function.prototype);
  HTMLElement.prototype = $__Object$create(($__super !== null ? $__super.prototype : null));
  $__Object$defineProperty(HTMLElement.prototype, "constructor", {value: HTMLElement});
  $__Object$defineProperty(HTMLElement.prototype, "className", {
    get: function() {
      return this.getAttribute('class');
    },
    set: function(className) {
      this.setAttribute('class', className);
    },
    enumerable: true,
    configurable: true
  });
  $__Object$defineProperty(HTMLElement.prototype, "_updatedAttribute", {
    value: function(attributeName, value) {
      if (attributeName === 'style') {
        this.style.cssText = value || '';
      }
      if (attributeName === 'class') {
        this.classList._parse(value || '');
      }
    },
    enumerable: false,
    writable: true
  });
  $__Object$defineProperty(HTMLElement.prototype, "outerHTML", {
    get: function() {
      return '<' + this.nodeName + Object.keys(this._attributes).reduce(function(value, attributeName) {
        return value + ' ' + attributeName + '="' + escapeAttribute(this._attributes[attributeName]) + '"';
      }.bind(this), '') + '>' + this.innerHTML + '</' + this.nodeName + '>';
    },
    enumerable: true,
    configurable: true
  });
  return HTMLElement;
}(Element);

//# sourceMappingURL=HTMLElement.js.map