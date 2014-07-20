"use strict";
Object.defineProperties(exports, {
  CSSStyleDeclaration: {get: function() {
      return CSSStyleDeclaration;
    }},
  __esModule: {value: true}
});
var $__get = function get(object, property, receiver) {
  var desc = $__Object$getOwnPropertyDescriptor(object, property);
  if (desc === void 0) {
    var parent = $__Object$getPrototypeOf(object);
    if (parent === null)
      return void 0;
    else
      return get(parent, property, receiver);
  } else if ("value" in desc && "writable" in desc)
    return desc.value;
  else {
    var getter = desc.get;
    if (getter === void 0)
      return void 0;
    return getter.call(receiver);
  }
};
var $__Object$getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var $__Object$getPrototypeOf = Object.getPrototypeOf;
var $__Object$defineProperty = Object.defineProperty;
var $__Object$create = Object.create;
var AbstractCSSStyleDeclaration = require('../Abstract/AbstractCSSStyleDeclaration').AbstractCSSStyleDeclaration;
var CSSStyleDeclaration = function($__super) {
  "use strict";
  function CSSStyleDeclaration(element) {
    this._element = element;
  }
  CSSStyleDeclaration.__proto__ = ($__super !== null ? $__super : Function.prototype);
  CSSStyleDeclaration.prototype = $__Object$create(($__super !== null ? $__super.prototype : null));
  $__Object$defineProperty(CSSStyleDeclaration.prototype, "constructor", {value: CSSStyleDeclaration});
  $__Object$defineProperty(CSSStyleDeclaration.prototype, "_stringify", {
    value: function() {
      $__get($__Object$getPrototypeOf(CSSStyleDeclaration.prototype), "_stringify", this).call(this);
      this._element._setAttribute('style', this.cssText);
    },
    enumerable: false,
    writable: true
  });
  return CSSStyleDeclaration;
}(AbstractCSSStyleDeclaration);

//# sourceMappingURL=../HTMLElement/CSSStyleDeclaration.js.map