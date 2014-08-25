"use strict";
Object.defineProperties(exports, {
  HTMLSelectElement: {get: function() {
      return HTMLSelectElement;
    }},
  __esModule: {value: true}
});
var $__Object$getPrototypeOf = Object.getPrototypeOf;
var $__Object$defineProperty = Object.defineProperty;
var $__Object$create = Object.create;
var HTMLElement = require('../../HTMLElement').HTMLElement;
var HTMLSelectElement = function($__super) {
  "use strict";
  function HTMLSelectElement() {
    $__Object$getPrototypeOf(HTMLSelectElement.prototype).constructor.call(this);
    this.nodeName = 'select';
  }
  HTMLSelectElement.__proto__ = ($__super !== null ? $__super : Function.prototype);
  HTMLSelectElement.prototype = $__Object$create(($__super !== null ? $__super.prototype : null));
  $__Object$defineProperty(HTMLSelectElement.prototype, "constructor", {value: HTMLSelectElement});
  $__Object$defineProperty(HTMLSelectElement.prototype, "autoFocus", {
    get: function() {
      throw new Error('Not implemented');
    },
    set: function(value) {
      throw new Error('Not implemented');
    },
    enumerable: true,
    configurable: true
  });
  $__Object$defineProperty(HTMLSelectElement.prototype, "form", {
    get: function() {
      throw new Error('Not implemented');
    },
    set: function(value) {
      throw new Error('form is read only');
    },
    enumerable: true,
    configurable: true
  });
  $__Object$defineProperty(HTMLSelectElement.prototype, "labels", {
    get: function() {
      throw new Error('Not implemented');
    },
    enumerable: true,
    configurable: true
  });
  $__Object$defineProperty(HTMLSelectElement.prototype, "disabled", {
    get: function() {
      return !!this.getAttribute('disabled');
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
  });
  $__Object$defineProperty(HTMLSelectElement.prototype, "length", {
    get: function() {
      return this.options.length;
    },
    set: function(value) {
      throw new Error('Length is read only');
    },
    enumerable: true,
    configurable: true
  });
  $__Object$defineProperty(HTMLSelectElement.prototype, "multiple", {
    get: function() {
      return !!this.getAttribute('multiple');
    },
    set: function(multiple) {
      if (multiple) {
        this.setAttribute('multiple', 'multiple');
      } else {
        this.removeAttribute('multiple');
      }
    },
    enumerable: true,
    configurable: true
  });
  $__Object$defineProperty(HTMLSelectElement.prototype, "name", {
    get: function() {
      return this.getAttribute('name');
    },
    set: function(name) {
      this.setAttribute('name', name);
    },
    enumerable: true,
    configurable: true
  });
  $__Object$defineProperty(HTMLSelectElement.prototype, "options", {
    get: function() {
      return this.getElementsByTagName('option');
    },
    set: function(value) {
      throw new Error('options is read only');
    },
    enumerable: true,
    configurable: true
  });
  $__Object$defineProperty(HTMLSelectElement.prototype, "required", {
    get: function() {
      return !!this.getAttribute('required');
    },
    set: function(required) {
      if (required) {
        this.setAttribute('required', 'required');
      } else {
        this.removeAttribute('required');
      }
    },
    enumerable: true,
    configurable: true
  });
  $__Object$defineProperty(HTMLSelectElement.prototype, "selectedIndex", {
    get: function() {
      var index = -1;
      var options = this.options;
      if (!options.length) {
        return index;
      }
      options.some(function(option, i) {
        if (option.selected) {
          index = i;
          return true;
        }
      });
      if (index === -1 && !this.multiple) {
        options.some(function(option, i) {
          if (option.value === '') {
            index = i;
            return true;
          }
        });
        if (index === -1) {
          return 0;
        }
      }
      return index;
    },
    set: function(index) {
      throw new Error('Not implemented');
    },
    enumerable: true,
    configurable: true
  });
  $__Object$defineProperty(HTMLSelectElement.prototype, "selectedOptions", {
    get: function() {
      return this.options.filter(function(option) {
        return option.selected;
      });
    },
    enumerable: true,
    configurable: true
  });
  $__Object$defineProperty(HTMLSelectElement.prototype, "selectedOption", {
    get: function() {
      var selectedOption;
      this.options.some(function(option) {
        if (option.selected) {
          selectedOption = option;
          return true;
        }
      });
      return selectedOption;
    },
    enumerable: true,
    configurable: true
  });
  $__Object$defineProperty(HTMLSelectElement.prototype, "size", {
    get: function() {
      return Number(this.getAttribute('size')) || (this.multiple ? 4 : 1);
    },
    set: function(size) {
      this.setAttribute('size', size);
    },
    enumerable: true,
    configurable: true
  });
  $__Object$defineProperty(HTMLSelectElement.prototype, "tabIndex", {
    get: function() {
      throw new Error('Obsolete since HTML5');
    },
    enumerable: true,
    configurable: true
  });
  $__Object$defineProperty(HTMLSelectElement.prototype, "type", {
    get: function() {
      return this.multiple ? 'select-multiple' : 'select-one';
    },
    set: function(value) {
      throw new Error('type is read only');
    },
    enumerable: true,
    configurable: true
  });
  $__Object$defineProperty(HTMLSelectElement.prototype, "validationMessage", {
    get: function() {
      throw new Error('Not implemented');
    },
    set: function(value) {
      throw new Error('validationMessage is read only');
    },
    enumerable: true,
    configurable: true
  });
  $__Object$defineProperty(HTMLSelectElement.prototype, "validity", {
    get: function() {
      throw new Error('Not implemented');
    },
    set: function(value) {
      throw new Error('validity is read only');
    },
    enumerable: true,
    configurable: true
  });
  $__Object$defineProperty(HTMLSelectElement.prototype, "value", {
    get: function() {
      return this.selectedOption && this.selectedOption.value;
    },
    set: function(value) {
      return this.selectedOption.value = value;
    },
    enumerable: true,
    configurable: true
  });
  $__Object$defineProperty(HTMLSelectElement.prototype, "willValidate", {
    get: function() {
      throw new Error('Not implemented');
    },
    set: function(value) {
      throw new Error('willValidate is read only');
    },
    enumerable: true,
    configurable: true
  });
  $__Object$defineProperty(HTMLSelectElement.prototype, "item", {
    value: function(index) {
      throw new Error('Not implemented');
    },
    enumerable: false,
    writable: true
  });
  $__Object$defineProperty(HTMLSelectElement.prototype, "namedItem", {
    value: function(name) {
      throw new Error('Not implemented');
    },
    enumerable: false,
    writable: true
  });
  $__Object$defineProperty(HTMLSelectElement.prototype, "remove", {
    value: function(index) {
      throw new Error('Not implemented');
    },
    enumerable: false,
    writable: true
  });
  return HTMLSelectElement;
}(HTMLElement);

//# sourceMappingURL=../../HTMLElement/elements/HTMLSelectElement.js.map