"use strict";
Object.defineProperties(exports, {
  Text: {get: function() {
      return Text;
    }},
  __esModule: {value: true}
});
var $__Object$defineProperty = Object.defineProperty;
var $__Object$create = Object.create;
var escapeHTML = require('./utils/escapeHTML');
var Node = require('./Node').Node;
var Text = function($__super) {
  "use strict";
  function Text(textContent) {
    this.value = textContent;
  }
  Text.__proto__ = ($__super !== null ? $__super : Function.prototype);
  Text.prototype = $__Object$create(($__super !== null ? $__super.prototype : null));
  $__Object$defineProperty(Text.prototype, "constructor", {value: Text});
  $__Object$defineProperty(Text.prototype, "_toHTML", {
    value: function() {
      return escapeHTML(this.value);
    },
    enumerable: false,
    writable: true
  });
  $__Object$defineProperty(Text.prototype, "textContent", {
    get: function() {
      return this.value;
    },
    set: function(textContent) {
      this.value = textContent;
    },
    enumerable: true,
    configurable: true
  });
  return Text;
}(Node);
Object.defineProperty(Text.prototype, 'nodeType', {value: Node.TEXT_NODE});
Object.defineProperty(Text.prototype, 'nodeName', {value: '#text'});

//# sourceMappingURL=Text.js.map