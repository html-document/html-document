"use strict";
Object.defineProperties(exports, {
  HTMLOptionElement: {get: function() {
      return HTMLOptionElement;
    }},
  __esModule: {value: true}
});
var $__Object$defineProperties = Object.defineProperties;
var $__Object$defineProperty = Object.defineProperty;
var $__Object$create = Object.create;
var $__Object$getPrototypeOf = Object.getPrototypeOf;
var HTMLElement = require('../../HTMLElement').HTMLElement;
var HTMLOptionElement = function($__super) {
  "use strict";
  function HTMLOptionElement() {
    $__Object$getPrototypeOf(HTMLOptionElement.prototype).constructor.call(this);
    this.nodeName = 'option';
  }
  HTMLOptionElement.__proto__ = ($__super !== null ? $__super : Function.prototype);
  HTMLOptionElement.prototype = $__Object$create(($__super !== null ? $__super.prototype : null));
  $__Object$defineProperty(HTMLOptionElement.prototype, "constructor", {value: HTMLOptionElement});
  $__Object$defineProperties(HTMLOptionElement.prototype, {
    defaultSelected: {
      get: function() {
        throw new Error('Unsuported');
      },
      set: function(selected) {
        throw new Error('Unsuported');
      },
      enumerable: true,
      configurable: true
    },
    disabled: {
      get: function() {
        return !!this.getAttribute('disabled') && (this.parentNode.nodeName !== 'optgroup' || !this.parentNode.disabled);
      },
      set: function(disabled) {
        if (disabled) {
          this.setAttribute('disabled', 'disabled');
        } else {
          this.removeAttribute('disabled');
        }
      },
      enumerable: true,
      configurable: true
    },
    form: {
      get: function() {
        throw new Error('Not implemented');
      },
      set: function(value) {
        throw new Error('form is read only');
      },
      enumerable: true,
      configurable: true
    },
    index: {
      get: function() {
        throw new Error('Not implemented');
      },
      set: function(value) {
        throw new Error('index is read only');
      },
      enumerable: true,
      configurable: true
    },
    label: {
      get: function() {
        throw new Error('Not implemented');
      },
      set: function(label) {
        throw new Error('Not implemented');
      },
      enumerable: true,
      configurable: true
    },
    _select: {
      get: function() {
        var node = this;
        while (node = node.parentNode) {
          if (node.nodeName === 'select') {
            return node;
          }
        }
        return null;
      },
      enumerable: true,
      configurable: true
    },
    selected: {
      get: function() {
        return !!this.getAttribute('selected');
      },
      set: function(selected) {
        if (selected) {
          var selectElement = this._select;
          if (!selectElement.multiple) {
            var selectedOption = selectElement.selectedOption;
            if (selectedOption) {
              selectedOption.selected = false;
            }
          }
          this.setAttribute('selected', 'selected');
        } else {
          this.removeAttribute('selected');
        }
      },
      enumerable: true,
      configurable: true
    },
    text: {
      get: function() {
        return this.textContent;
      },
      set: function(text) {
        while (this.firstChild) {
          this.removeChild(this.firstChild);
        }
        this.appendChild(this.ownerDocument.createTextNode(text));
      },
      enumerable: true,
      configurable: true
    },
    value: {
      get: function() {
        var value = this.getAttribute('value');
        return value === null ? this.textContent : value;
      },
      set: function(value) {
        if (value) {
          this.setAttribute('value', value);
        } else {
          this.removeAttribute('value');
        }
      },
      enumerable: true,
      configurable: true
    }
  });
  return HTMLOptionElement;
}(HTMLElement);

//# sourceMappingURL=../../HTMLElement/elements/HTMLOptionElement.js.map