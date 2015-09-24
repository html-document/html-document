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
 * @class HTMLSelectElement
 *
 */
/** @class HTMLSelectElement */
var HTMLSelectElement = (function (_HTMLElement) {
    _inherits(HTMLSelectElement, _HTMLElement);

    function HTMLSelectElement() {
        _classCallCheck(this, HTMLSelectElement);

        _get(Object.getPrototypeOf(HTMLSelectElement.prototype), 'constructor', this).call(this);
    }

    /**
     * @constant {string} HTMLSelectElement#nodeName option
     */

    _createClass(HTMLSelectElement, [{
        key: 'item',

        /**
         * Gets an item from the options collection for this select element.
         *
         * @param {Number} index
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
         * @method HTMLSelectElement#namedItem
         * @param {String} name
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
         * @method HTMLSelectElement#remove
         * @param {Number} index
         
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
        /** @memberof HTMLSelectElement 
        * @instance 
        * @member autoFocus */get: function get() {
            throw new Error('Not implemented');
        },
        /** @memberof HTMLSelectElement 
        * @instance 
        * @param value */set: function set(value) {
            throw new Error('Not implemented');
        }

        /**
         * The form that this element is associated with. If this element is a descendant of a form element,
         * then this attribute is the ID of that form element.
         * If the element is not a descendant of a form element, then:
         * The attribute can be the ID of any form element in the same document.
         *
         * @type {HTMLFormElement}
         * @ignore Not implemented
         
        * @memberof HTMLSelectElement 
        * @instance 
        * @member form */
    }, {
        key: 'form',
        get: function get() {
            throw new Error('Not implemented');
        },
        /** @memberof HTMLSelectElement 
        * @instance 
        * @param value */set: function set(value) {
            throw new Error('form is read only');
        }
    }, {
        key: 'labels',
        /** @memberof HTMLSelectElement 
        * @instance 
        * @member labels */get: function get() {
            throw new Error('Not implemented');
        }

        /**
         * Reflects the disabled HTML attribute, which indicates whether the control is disabled.
         * If it is disabled, it does not accept clicks.
         *
         * @member {Boolean} HTMLSelectElement#disabled
         
        * @memberof HTMLSelectElement 
        * @instance */
    }, {
        key: 'disabled',
        get: function get() {
            return !!this.getAttribute('disabled');
        },

        /**
         * @ignore
         * @param {Boolean} disabled
         
        * @memberof HTMLSelectElement 
        * @instance 
        * @param disabled */
        set: function set(disabled) {
            if (disabled) {
                this.setAttribute('disabled', 'disabled');
            } else {
                this.removeAttribute('disabled');
            }
        }

        /**
         * The number of option elements in this select element.
         *
         * @member {Number} HTMLSelectElement#length
         * @readonly
         
        * @memberof HTMLSelectElement 
        * @instance */
    }, {
        key: 'length',
        get: function get() {
            return this.options.length;
        },
        /** @memberof HTMLSelectElement 
        * @instance 
        * @param value */set: function set(value) {
            throw new Error('Length is read only');
        }

        /**
         * Reflects the multiple HTML attribute, whichindicates whether multiple items can be selected.
         *
         * @member {Boolean} HTMLSelectElement#multiple
         
        * @memberof HTMLSelectElement 
        * @instance */
    }, {
        key: 'multiple',
        get: function get() {
            return !!this.getAttribute('multiple');
        },

        /**
         * @ignore
         * @param {Boolean} multiple
         
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
         * Reflects the name HTML attribute, containing the name of this control used by servers and DOM search functions.
         *
         * @member {String} HTMLSelectElement#name
         
        * @memberof HTMLSelectElement 
        * @instance */
    }, {
        key: 'name',
        get: function get() {
            return this.getAttribute('name');
        },

        /**
         * @ignore
         * @param {String} name
         
        * @memberof HTMLSelectElement 
        * @instance 
        * @param name */
        set: function set(name) {
            this.setAttribute('name', name);
        }

        /**
         * The set of option elements contained by this element.
         *
         * @member {Array.<Element>} HTMLSelectElement#options
         * @readonly
         
        * @memberof HTMLSelectElement 
        * @instance */
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
         * @member {Boolean} HTMLSelectElement#required
         
        * @memberof HTMLSelectElement 
        * @instance */
    }, {
        key: 'required',
        get: function get() {
            return !!this.getAttribute('required');
        },

        /**
         * @ignore
         * @param {Boolean} required
         
        * @memberof HTMLSelectElement 
        * @instance 
        * @param required */
        set: function set(required) {
            if (required) {
                this.setAttribute('required', 'required');
            } else {
                this.removeAttribute('required');
            }
        }

        /**
         * The index of the first selected option element. The value -1 is returned if no element is selected.
         *
         * @member {Number} HTMLSelectElement#selectedIndex
         
        * @memberof HTMLSelectElement 
        * @instance */
    }, {
        key: 'selectedIndex',
        get: function get() {
            var index = -1;
            var options = this.options;

            if (!options.length) {
                return index;
            }

            options.some( /** @function 
                          * @param option 
                          * @param i */function (option, i) {
                if (option.selected) {
                    index = i;
                    return true;
                }
            });

            if (index === -1 && !this.multiple) {
                options.some( /** @function 
                              * @param option 
                              * @param i */function (option, i) {
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

        /**
         * @ignore
         * @param {Number} index
         
        * @memberof HTMLSelectElement 
        * @instance 
        * @param index */
        set: function set(index) {
            throw new Error('Not implemented');
        }

        /**
         * The set of options that are selected.
         *
         * @member {Array.<Element>} HTMLSelectElement#selectedOptions
         * @readonly
         
        * @memberof HTMLSelectElement 
        * @instance */
    }, {
        key: 'selectedOptions',
        get: function get() {
            return this.options.filter( /** @function 
                                        * @param option */function (option) {
                return option.selected;
            });
        }

        /**
         * The first selected option.
         *
         * @member {Array.<Element>} HTMLSelectElement#selectedOptions
         * @readonly
         
        * @memberof HTMLSelectElement 
        * @instance */
    }, {
        key: 'selectedOption',
        get: function get() {
            var selectedOption = undefined;
            this.options.some( /** @function 
                               * @param option */function (option) {
                if (option.selected) {
                    selectedOption = option;
                    return true;
                }
            });
            return selectedOption;
        }

        /**
         * Reflects the size HTML attribute, which contains the number of visible items in the control.
         * The default is 1, unless multiple is true, in which case it is 4.
         *
         * @member {Number} HTMLSelectElement#size
         
        * @memberof HTMLSelectElement 
        * @instance */
    }, {
        key: 'size',
        get: function get() {
            return Number(this.getAttribute('size')) || (this.multiple ? 4 : 1);
        },

        /**
         * @ignore
         * @param {String} size
         
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
         * @member {Number} HTMLSelectElement#size
         * @readonly
         
        * @memberof HTMLSelectElement 
        * @instance */
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
         * @member {String} HTMLSelectElement#value
         
        * @memberof HTMLSelectElement 
        * @instance */
    }, {
        key: 'value',
        get: function get() {
            return this.selectedOption && this.selectedOption.value;
        },

        /**
         * @ignore
         * @param {String} value
         
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