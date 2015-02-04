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

var HTMLOptionElement = (function (HTMLElement) {
  var HTMLOptionElement = function HTMLOptionElement() {
    HTMLElement.call(this);
    this.nodeName = "option";
  };

  _extends(HTMLOptionElement, HTMLElement);

  _classProps(HTMLOptionElement, null, {
    defaultSelected: {
      /**
       * Contains the initial value of the selected HTML attribute,
       * indicating whether the option is selected by default or not.
       *
       * @return {Boolean}
       */
      get: function () {
        throw new Error("Unsuported");
      },


      /**
       * Contains the initial value of the selected HTML attribute,
       * indicating whether the option is selected by default or not.
       *
       * @param {Boolean} selected
       */
      set: function (selected) {
        throw new Error("Unsuported");
      }
    },
    disabled: {
      /**
       * Reflects the value of the disabled HTML attribute, which indicates that the option is unavailable to be selected.
       * An option can also be disabled if it is a child of an <optgroup> element that is disabled.
       *
       * @return {Boolean}
       */
      get: function () {
        return !!this.getAttribute("disabled") && (this.parentNode.nodeName !== "optgroup" || !this.parentNode.disabled);
      },


      /**
       * Reflects the value of the disabled HTML attribute, which indicates that the option is unavailable to be selected.
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
    form: {
      /**
       * If the option is a descendent of a <select> element, then this property has the same value as
       * the form property of the corresponding HTMLSelectElement object; otherwise, it is null.
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
    index: {
      /**
       * The position of the option within the list of options it belongs to, in tree-order.
       * If the option is not part of a list of options, like when it is part of the <datalist> element, the value is 0.
       *
       * @return {Number}
       */
      get: function () {
        throw new Error("Not implemented");
      },


      /**
       * The position of the option within the list of options it belongs to, in tree-order.
       * If the option is not part of a list of options, like when it is part of the <datalist> element, the value is 0.
       *
       */
      set: function (value) {
        throw new Error("index is read only");
      }
    },
    label: {
      /**
       * Reflects the value of the label HTML attribute, which provides a label for the option.
       * If this attribute isn't specifically set, reading it returns the element's text content.
       *
       * @return {Number}
       */
      get: function () {
        throw new Error("Not implemented");
      },


      /**
       * Reflects the value of the label HTML attribute, which provides a label for the option.
       * If this attribute isn't specifically set, reading it returns the element's text content.
       *
       * @param {Number}
       */
      set: function (label) {
        throw new Error("Not implemented");
      }
    },
    _select: {
      get: function () {
        var node = this;
        while (node = node.parentNode) {
          if (node.nodeName === "select") {
            return node;
          }
        }
        return null;
      }
    },
    selected: {
      /**
       * Indicates whether the option is currently selected.
       *
       * @return {Boolean}
       */
      get: function () {
        return !!this.getAttribute("selected");
      },


      /**
       * Indicates whether the option is currently selected.
       *
       * @param {Boolean} selected
       */
      set: function (selected) {
        if (selected) {
          var selectElement = this._select;
          if (!selectElement.multiple) {
            var selectedOption = selectElement.selectedOption;
            if (selectedOption) {
              selectedOption.selected = false;
            }
          }
          this.setAttribute("selected", "selected");
        } else {
          this.removeAttribute("selected");
        }
      }
    },
    text: {
      /**
       * Contains the text content of the element.
       *
       * @return {String}
       */
      get: function () {
        return this.textContent;
      },


      /**
       * Contains the text content of the element.
       *
       * @param {String} text
       */
      set: function (text) {
        while (this.firstChild) {
          this.removeChild(this.firstChild);
        }
        this.appendChild(this.ownerDocument.createTextNode(text));
      }
    },
    value: {
      /**
       * Reflects the value of the value HTML attribute, if it exists;
       * otherwise reflects value of the Node.textContent property.
       *
       * @return {String}
       */
      get: function () {
        var value = this.getAttribute("value");
        return value === null ? this.textContent : value;
      },


      /**
       * Reflects the value of the value HTML attribute, if it exists;
       * otherwise reflects value of the Node.textContent property.
       *
       * @param {String} value
       */
      set: function (value) {
        if (value) {
          this.setAttribute("value", value);
        } else {
          this.removeAttribute("value");
        }
      }
    }
  });

  return HTMLOptionElement;
})(HTMLElement);

exports.HTMLOptionElement = HTMLOptionElement;
//# sourceMappingURL=../../HTMLElement/elements/HTMLOptionElement.js.map