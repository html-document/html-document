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

var HTMLElement = require("../../HTMLElement").HTMLElement;

var HTMLSelectElement = (function (HTMLElement) {
  var HTMLSelectElement = function HTMLSelectElement() {
    HTMLElement.call(this);
    this.nodeName = "select";
  };

  _extends(HTMLSelectElement, HTMLElement);

  HTMLSelectElement.prototype.item = function (index) {
    throw new Error("Not implemented");
  };

  HTMLSelectElement.prototype.namedItem = function (name) {
    throw new Error("Not implemented");
  };

  HTMLSelectElement.prototype.remove = function (index) {
    throw new Error("Not implemented");
  };

  _classProps(HTMLSelectElement, null, {
    autoFocus: {
      get: function () {
        throw new Error("Not implemented");
      },
      set: function (value) {
        throw new Error("Not implemented");
      }
    },
    form: {
      /**
       * The form that this element is associated with. If this element is a descendant of a form element,
       * then this attribute is the ID of that form element.
       * If the element is not a descendant of a form element, then:
       * The attribute can be the ID of any form element in the same document.
       *
       * @return {HTMLFormElement}
       */
      get: function () {
        throw new Error("Not implemented");
      },
      set: function (value) {
        throw new Error("form is read only");
      }
    },
    labels: {
      get: function () {
        throw new Error("Not implemented");
      }
    },
    disabled: {
      /**
       * Reflects the disabled HTML attribute, which indicates whether the control is disabled.
       * If it is disabled, it does not accept clicks.
       *
       * @return {Boolean}
       */
      get: function () {
        return !!this.getAttribute("disabled");
      },


      /**
       * Reflects the disabled HTML attribute, which indicates whether the control is disabled.
       * If it is disabled, it does not accept clicks.
       *
       * @param {Boolean} disabled
       */
      set: function (disabled) {
        if (disabled) {
          this.setAttribute("disabled", "disabled");
        } else {
          this.removeAttribute("disabled");
        }
      }
    },
    length: {
      /**
       * The number of <option> elements in this select element.
       *
       * @return {Number}
       */
      get: function () {
        return this.options.length;
      },
      set: function (value) {
        throw new Error("Length is read only");
      }
    },
    multiple: {
      /**
       * Reflects the multiple HTML attribute, whichindicates whether multiple items can be selected.
       *
       * @return {Boolean}
       */
      get: function () {
        return !!this.getAttribute("multiple");
      },


      /**
       * Reflects the multiple HTML attribute, whichindicates whether multiple items can be selected.
       *
       * @param {Boolean} multiple
       */
      set: function (multiple) {
        if (multiple) {
          this.setAttribute("multiple", "multiple");
        } else {
          this.removeAttribute("multiple");
        }
      }
    },
    name: {
      /**
       * Reflects the name HTML attribute, containing the name of this control used by servers and DOM search functions.
       */
      get: function () {
        return this.getAttribute("name");
      },


      /**
       * Reflects the name HTML attribute, containing the name of this control used by servers and DOM search functions.
       *
       * @param {String} name
       */
      set: function (name) {
        this.setAttribute("name", name);
      }
    },
    options: {
      /**
       * The set of <option> elements contained by this element. Read only.
       */
      get: function () {
        return this.getElementsByTagName("option");
      },
      set: function (value) {
        throw new Error("options is read only");
      }
    },
    required: {
      /**
       * Reflects the required HTML attribute, which indicates whether the user is required
       * to select a value before submitting the form
       *
       * @return {Boolean}
       */
      get: function () {
        return !!this.getAttribute("required");
      },


      /**
       * Reflects the required HTML attribute, which indicates whether the user is required
       * to select a value before submitting the form
       *
       * @param {Boolean} required
       */
      set: function (required) {
        if (required) {
          this.setAttribute("required", "required");
        } else {
          this.removeAttribute("required");
        }
      }
    },
    selectedIndex: {
      /**
       * The index of the first selected <option> element. The value -1 is returned if no element is selected.
       *
       * @return {Number}
       */
      get: function () {
        var index = -1;
        var options = this.options;
        if (!options.length) {
          return index;
        }
        options.some(function (option, i) {
          if (option.selected) {
            index = i;
            return true;
          }
        });
        if (index === -1 && !this.multiple) {
          options.some(function (option, i) {
            if (option.value === "") {
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


      /**
       * The index of the first selected <option> element. The value -1 is returned if no element is selected.
       *
       * @return {Number}
       */
      set: function (index) {
        throw new Error("Not implemented");
      }
    },
    selectedOptions: {
      /**
       * The set of options that are selected.
       *
       * @return {HTMLCollection}
       */
      get: function () {
        return this.options.filter(function (option) {
          return option.selected;
        });
      }
    },
    selectedOption: {
      /**
       * The first selected option.
       *
       * @return HTMLOptionElement
       */
      get: function () {
        var selectedOption;
        this.options.some(function (option) {
          if (option.selected) {
            selectedOption = option;
            return true;
          }
        });
        return selectedOption;
      }
    },
    size: {
      /**
       * Reflects the size HTML attribute, which contains the number of visible items in the control.
       * The default is 1, unless multiple is true, in which case it is 4.
       *
       * @return {Number}
       */
      get: function () {
        return Number(this.getAttribute("size")) || (this.multiple ? 4 : 1);
      },


      /**
       * Reflects the size HTML attribute, which contains the number of visible items in the control.
       *
       * @param {String} name
       */
      set: function (size) {
        this.setAttribute("size", size);
      }
    },
    tabIndex: {
      get: function () {
        throw new Error("Obsolete since HTML5");
      }
    },
    type: {
      /**
       * The form control's type. When multiple is true, it returns select-multiple; otherwise, it returns select-one.
       * Read only.
       *
       * @return {String}
       */
      get: function () {
        return this.multiple ? "select-multiple" : "select-one";
      },
      set: function (value) {
        throw new Error("type is read only");
      }
    },
    validationMessage: {
      get: function () {
        throw new Error("Not implemented");
      },
      set: function (value) {
        throw new Error("validationMessage is read only");
      }
    },
    validity: {
      get: function () {
        throw new Error("Not implemented");
      },
      set: function (value) {
        throw new Error("validity is read only");
      }
    },
    value: {
      /**
       * The value of this form control, that is, of the first selected option.
       *
       * @return {String}
       */
      get: function () {
        return this.selectedOption && this.selectedOption.value;
      },


      /**
       * The value of this form control, that is, of the first selected option.
       *
       * @param {String} value
       */
      set: function (value) {
        return this.selectedOption.value = value;
      }
    },
    willValidate: {
      get: function () {
        throw new Error("Not implemented");
      },
      set: function (value) {
        throw new Error("willValidate is read only");
      }
    }
  });

  return HTMLSelectElement;
})(HTMLElement);

exports.HTMLSelectElement = HTMLSelectElement;
//# sourceMappingURL=../../HTMLElement/elements/HTMLSelectElement.js.map