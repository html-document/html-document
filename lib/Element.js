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
  $__Object$defineProperty(Element.prototype, "children", {
    get: function() {
      return this._childNodes;
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
  return Element;
}(ParentNode);

//# sourceMappingURL=Element.js.map