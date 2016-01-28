'use strict';

var _get = require('babel-runtime/helpers/get')['default'];

var _inherits = require('babel-runtime/helpers/inherits')['default'];

var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _HTMLElement2 = require('../../HTMLElement');

var _HTMLElement3 = _interopRequireDefault(_HTMLElement2);

/**
 * HTML select elements share all of the properties and methods
 * of other HTML elements described in the element section.
 * They also have the specialized interface HTMLSelectElement.
 *
 * @see https://developer.mozilla.org/en/docs/Web/API/HTMLSelectElement
 *
 */
/** @class HTMLSelectElement */
var HTMLSelectElement = (function (_HTMLElement) {
    _inherits(HTMLSelectElement, _HTMLElement);

    function HTMLSelectElement() {
        _classCallCheck(this, HTMLSelectElement);

        _get(Object.getPrototypeOf(HTMLSelectElement.prototype), 'constructor', this).apply(this, arguments);
    }

    /**
     * @constant {string} HTMLSelectElement#nodeName option
     */

    _createClass(HTMLSelectElement, [{
        key: 'item',

        /**
         * Gets an item from the options collection for this select element.
         *
         * @param {number} index
         * @ return {HTMLSelectElement}
         
        * @memberof HTMLSelectElement 
        * @instance 
        * @method item 
        * @param index */
        value: function item(index) {
            throw new Error('Not implemented');
        }

        /**
         * Gets the item in the options collection with the specified name.
         * The name string can match either the id or the name attribute of an option node
         *
         * @ignore Not implemented
         * @param {string} name
         * @ return {HTMLSelectElement}
         
        * @memberof HTMLSelectElement 
        * @instance 
        * @method namedItem 
        * @param name */
    }, {
        key: 'namedItem',
        value: function namedItem(name) {
            throw new Error('Not implemented');
        }

        /**
         * Removes the element at the specified index from the options collection for this select element.
         *
         * @ignore Not implemented
         * @param {number} index
         
        * @memberof HTMLSelectElement 
        * @instance 
        * @method remove 
        * @param index */
    }, {
        key: 'remove',
        value: function remove(index) {
            throw new Error('Not implemented');
        }
    }, {
        key: 'autoFocus',

        /**
         * Is a Boolean that reflects the autofocus HTML attribute,
         * which indicates whether the control should have input focus when the page loads,
         * unless the user overrides it, for example by typing in a different control.
         * Only one form-associated element in a document can have this attribute specified
         *
         * @type {boolean}
         
        * @memberof HTMLSelectElement 
        * @instance 
        * @member autoFocus */
        get: function get() {
            return this.hasAttribute('autofocus');
        },

        /**
         * @param {boolean} value
         
        * @memberof HTMLSelectElement 
        * @instance 
        * @param value */
        set: function set(value) {
            if (value) {
                this.setAttribute('autofocus', '');
            } else {
                this.removeAttribute('autofocus');
            }
        }

        /**
         * Is a Boolean that reflects the disabled HTML attribute,
         * which indicates whether the control is disabled.
         * If it is disabled, it does not accept clicks.
         *
         * @type {boolean}
         
        * @memberof HTMLSelectElement 
        * @instance 
        * @member disabled */
    }, {
        key: 'disabled',
        get: function get() {
            return this.hasAttribute('disabled');
        },

        /**
         * @param {boolean} value
         
        * @memberof HTMLSelectElement 
        * @instance 
        * @param value */
        set: function set(value) {
            if (value) {
                this.setAttribute('disabled', 'disabled');
            } else {
                this.removeAttribute('disabled');
            }
        }

        /**
         * The form that this element is associated with. If this element is a descendant of a form element,
         * then this attribute is the ID of that form element.
         * If the element is not a descendant of a form element, then:
         * The attribute can be the ID of any form element in the same document.
         *
         * @type {HTMLFormElement}
         * @readonly
         
        * @memberof HTMLSelectElement 
        * @instance 
        * @member form */
    }, {
        key: 'form',
        get: function get() {
            return this._closestParent('form') || null;
        },
        /** @memberof HTMLSelectElement 
        * @instance 
        * @param value */set: function set(value) {
            throw new Error('form is read only');
        }

        /**
         * Returns a NodeList containing the list of label elements associated with this select element.
         *
         * @type {HTMLLabelElement[]}
         * @readonly
         
        * @memberof HTMLSelectElement 
        * @instance 
        * @member labels */
    }, {
        key: 'labels',
        get: function get() {
            if (!this.hasAttribute('id')) {
                return [];
            }

            var id = this.getAttribute('id');
            var highestParent = this._highestParent();

            if (!highestParent) {
                return [];
            }

            return highestParent._filterDescendantNodes(function (node) {
                return node.tagName === 'label' && node.getAttribute('for') === id;
            });
        }

        /**
         * The number of option elements in this select element.
         *
         * @type {number}
         * @readonly
         
        * @memberof HTMLSelectElement 
        * @instance 
        * @member length */
    }, {
        key: 'length',
        get: function get() {
            return this.options.length;
        },
        /** @memberof HTMLSelectElement 
        * @instance 
        * @param value */set: function set(value) {
            throw new Error('length is read only');
        }

        /**
         * Reflects the multiple HTML attribute, which indicates whether multiple items can be selected.
         *
         * @type {boolean}
         
        * @memberof HTMLSelectElement 
        * @instance 
        * @member multiple */
    }, {
        key: 'multiple',
        get: function get() {
            return this.hasAttribute('multiple');
        },

        /**
         * @param {boolean} multiple
         
        * @memberof HTMLSelectElement 
        * @instance 
        * @param multiple */
        set: function set(multiple) {
            if (multiple) {
                this.setAttribute('multiple', 'multiple');
            } else {
                this.removeAttribute('multiple');
            }
        }

        /**
         * Reflects the name HTML attribute, containing the name of this control
         * used by servers and DOM search functions.
         *
         * @type {string}
         
        * @memberof HTMLSelectElement 
        * @instance 
        * @member name */
    }, {
        key: 'name',
        get: function get() {
            return this.getAttribute('name');
        },

        /**
         * @param {string} name
         
        * @memberof HTMLSelectElement 
        * @instance 
        * @param name */
        set: function set(name) {
            this.setAttribute('name', name);
        }

        /**
         * The set of option elements contained by this element.
         *
         * @type {Array.<Element>}
         * @readonly
         
        * @memberof HTMLSelectElement 
        * @instance 
        * @member options */
    }, {
        key: 'options',
        get: function get() {
            return this.getElementsByTagName('option');
        },
        /** @memberof HTMLSelectElement 
        * @instance 
        * @param value */set: function set(value) {
            throw new Error('options is read only');
        }

        /**
         * Reflects the required HTML attribute, which indicates whether the user is required
         * to select a value before submitting the form
         *
         * @type {boolean}
         
        * @memberof HTMLSelectElement 
        * @instance 
        * @member required */
    }, {
        key: 'required',
        get: function get() {
            return this.hasAttribute('required');
        },
        /** @memberof HTMLSelectElement 
        * @instance 
        * @param required */set: function set(required) {
            if (required) {
                this.setAttribute('required', 'required');
            } else {
                this.removeAttribute('required');
            }
        }

        /**
         * The index of the first selected option element.
         * The value -1 is returned if no element is selected.
         *
         * @type {number}
         
        * @memberof HTMLSelectElement 
        * @instance 
        * @member selectedIndex */
    }, {
        key: 'selectedIndex',
        get: function get() {
            var index = -1;
            var emptyIndex = -1;
            var options = this.options;

            if (!options.length) {
                return index;
            }

            options.some( /** @function 
                          * @param option 
                          * @param idx */function (option, idx) {
                if (option.selected) {
                    index = idx;
                    return true;
                }

                if (emptyIndex === -1 && option.value === '') {
                    emptyIndex = idx;
                }
            });

            if (index === -1 && !this.multiple) {
                index = emptyIndex;

                if (index === -1) {
                    return 0;
                }
            }

            return index;
        },

        /**
         * @param {number} index
         
        * @memberof HTMLSelectElement 
        * @instance 
        * @param index */
        set: function set(index) {
            this.selectedOptions.forEach(function (option) {
                return option.selected = false;
            });
            this.options[index].selected = true;
        }

        /**
         * The set of options that are selected.
         *
         * @type {Element[]}
         * @readonly
         
        * @memberof HTMLSelectElement 
        * @instance 
        * @member selectedOptions */
    }, {
        key: 'selectedOptions',
        get: function get() {
            return this.options.filter(function (option) {
                return option.selected;
            });
        }

        /**
         * The first selected option.
         *
         * @type {HtmlOptionElement|null}
         * @readonly
         
        * @memberof HTMLSelectElement 
        * @instance 
        * @member selectedOption */
    }, {
        key: 'selectedOption',
        get: function get() {
            var selectedIndex = this.selectedIndex;

            if (selectedIndex === -1) {
                return null;
            }

            return this.options[selectedIndex];
        }

        /**
         * Reflects the size HTML attribute, which contains the number of visible items in the control.
         * The default is 1, unless multiple is true, in which case it is 4.
         *
         * @type {number}
         
        * @memberof HTMLSelectElement 
        * @instance 
        * @member size */
    }, {
        key: 'size',
        get: function get() {
            return Number(this.getAttribute('size')) || (this.multiple ? 4 : 1);
        },

        /**
         * @param {number} size
         
        * @memberof HTMLSelectElement 
        * @instance 
        * @param size */
        set: function set(size) {
            this.setAttribute('size', size);
        }
    }, {
        key: 'tabIndex',
        /** @memberof HTMLSelectElement 
        * @instance 
        * @member tabIndex */get: function get() {
            throw new Error('Obsolete since HTML5');
        }

        /**
         * The form control's type. When multiple is true, it returns select-multiple; otherwise, it returns select-one.
         * Read only.
         *
         * @type {string}
         * @readonly
         
        * @memberof HTMLSelectElement 
        * @instance 
        * @member type */
    }, {
        key: 'type',
        get: function get() {
            return this.multiple ? 'select-multiple' : 'select-one';
        },
        /** @memberof HTMLSelectElement 
        * @instance 
        * @param value */set: function set(value) {
            throw new Error('type is read only');
        }
    }, {
        key: 'validationMessage',
        /** @memberof HTMLSelectElement 
        * @instance 
        * @member validationMessage */get: function get() {
            throw new Error('Not implemented');
        },
        /** @memberof HTMLSelectElement 
        * @instance 
        * @param value */set: function set(value) {
            throw new Error('validationMessage is read only');
        }
    }, {
        key: 'validity',
        /** @memberof HTMLSelectElement 
        * @instance 
        * @member validity */get: function get() {
            throw new Error('Not implemented');
        },
        /** @memberof HTMLSelectElement 
        * @instance 
        * @param value */set: function set(value) {
            throw new Error('validity is read only');
        }

        /**
         * The value of this form control, that is, of the first selected option.
         *
         * @type {string}
         
        * @memberof HTMLSelectElement 
        * @instance 
        * @member value */
    }, {
        key: 'value',
        get: function get() {
            return this.selectedOption && this.selectedOption.value;
        },

        /**
         * @ignore
         * @param {string} value
         
        * @memberof HTMLSelectElement 
        * @instance 
        * @param value */
        set: function set(value) {
            this.selectedOption.value = value;
            return value;
        }
    }, {
        key: 'willValidate',
        /** @memberof HTMLSelectElement 
        * @instance 
        * @member willValidate */get: function get() {
            throw new Error('Not implemented');
        },
        /** @memberof HTMLSelectElement 
        * @instance 
        * @param value */set: function set(value) {
            throw new Error('willValidate is read only');
        }
    }]);

    return HTMLSelectElement;
})(_HTMLElement3['default']);

exports['default'] = HTMLSelectElement;
Object.defineProperty(HTMLSelectElement.prototype, 'nodeName', { value: 'select' });
module.exports = exports['default'];
//# sourceMappingURL=HTMLSelectElement.js.map