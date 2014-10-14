"use strict";
Object.defineProperties(exports, {
  DocumentFragment: {get: function() {
      return DocumentFragment;
    }},
  __esModule: {value: true}
});
var $__Object$defineProperties = Object.defineProperties;
var $__Object$defineProperty = Object.defineProperty;
var $__Object$create = Object.create;
var $__Object$getPrototypeOf = Object.getPrototypeOf;
var Node = require('./Node').Node;
var ParentNode = require('./ParentNode').ParentNode;
var DocumentFragment = function($__super) {
  "use strict";
  function DocumentFragment() {
    var $__arguments = arguments;
    var $__0 = $__Object$getPrototypeOf(DocumentFragment.prototype);
    if ($__0 !== null)
      $__0.constructor.apply(this, $__arguments);
  }
  DocumentFragment.__proto__ = ($__super !== null ? $__super : Function.prototype);
  DocumentFragment.prototype = $__Object$create(($__super !== null ? $__super.prototype : null));
  $__Object$defineProperty(DocumentFragment.prototype, "constructor", {value: DocumentFragment});
  $__Object$defineProperties(DocumentFragment.prototype, {outerHTML: {
      get: function() {
        return this.innerHTML;
      },
      enumerable: true,
      configurable: true
    }});
  return DocumentFragment;
}(ParentNode);
Object.defineProperty(DocumentFragment.prototype, 'nodeType', {value: Node.DOCUMENT_FRAGMENT_NODE});

//# sourceMappingURL=DocumentFragment.js.map