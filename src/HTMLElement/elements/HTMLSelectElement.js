import HTMLElement from '../../HTMLElement';

/**
 * HTML select elements share all of the properties and methods
 * of other HTML elements described in the element section.
 * They also have the specialized interface HTMLSelectElement.
 *
 * @see https://developer.mozilla.org/en/docs/Web/API/HTMLSelectElement
 * @class HTMLSelectElement
 *
 */
export default class HTMLSelectElement extends HTMLElement {
    constructor() {
        super();
    }

    get autoFocus() {
        throw new Error('Not implemented');
    }

    set autoFocus(value) {
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
     */
    get form() {
        throw new Error('Not implemented');
    }

    set form(value) {
        throw new Error('form is read only');
    }

    get labels() {
        throw new Error('Not implemented');
    }

    /**
     * Reflects the disabled HTML attribute, which indicates whether the control is disabled.
     * If it is disabled, it does not accept clicks.
     *
     * @member {Boolean} HTMLSelectElement#disabled
     */
    get disabled() {
        return !!this.getAttribute('disabled');
    }

    /**
     * @ignore
     * @param {Boolean} disabled
     */
    set disabled(disabled) {
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
     */
    get length() {
        return this.options.length;
    }

    set length(value) {
        throw new Error('Length is read only');
    }

    /**
     * Reflects the multiple HTML attribute, whichindicates whether multiple items can be selected.
     *
     * @member {Boolean} HTMLSelectElement#multiple
     */
    get multiple() {
        return !!this.getAttribute('multiple');
    }

    /**
     * @ignore
     * @param {Boolean} multiple
     */
    set multiple(multiple) {
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
     */
    get name() {
        return this.getAttribute('name');
    }

    /**
     * @ignore
     * @param {String} name
     */
    set name(name) {
        this.setAttribute('name', name);
    }

    /**
     * The set of option elements contained by this element.
     *
     * @member {Array.<Element>} HTMLSelectElement#options
     * @readonly
     */
    get options() {
        return this.getElementsByTagName('option');
    }

    set options(value) {
        throw new Error('options is read only');
    }

    /**
     * Reflects the required HTML attribute, which indicates whether the user is required
     * to select a value before submitting the form
     *
     * @member {Boolean} HTMLSelectElement#required
     */
    get required() {
        return !!this.getAttribute('required');
    }

    /**
     * @ignore
     * @param {Boolean} required
     */
    set required(required) {
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
     */
    get selectedIndex() {
        let index = -1;
        const options = this.options;

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
    }

    /**
     * @ignore
     * @param {Number} index
     */
    set selectedIndex(index) {
        throw new Error('Not implemented');
    }

    /**
     * The set of options that are selected.
     *
     * @member {Array.<Element>} HTMLSelectElement#selectedOptions
     * @readonly
     */
    get selectedOptions() {
        return this.options.filter(function(option) {
            return option.selected;
        });
    }

    /**
     * The first selected option.
     *
     * @member {Array.<Element>} HTMLSelectElement#selectedOptions
     * @readonly
     */
    get selectedOption() {
        let selectedOption;
        this.options.some(function(option) {
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
     */
    get size() {
        return Number(this.getAttribute('size')) || (this.multiple ? 4 : 1);
    }

    /**
     * @ignore
     * @param {String} size
     */
    set size(size) {
        this.setAttribute('size', size);
    }

    get tabIndex() {
        throw new Error('Obsolete since HTML5');
    }

    /**
     * The form control's type. When multiple is true, it returns select-multiple; otherwise, it returns select-one.
     * Read only.
     *
     * @member {Number} HTMLSelectElement#size
     * @readonly
     */
    get type() {
        return this.multiple ? 'select-multiple' : 'select-one';
    }

    set type(value) {
        throw new Error('type is read only');
    }

    get validationMessage() {
        throw new Error('Not implemented');
    }

    set validationMessage(value) {
        throw new Error('validationMessage is read only');
    }

    get validity() {
        throw new Error('Not implemented');
    }

    set validity(value) {
        throw new Error('validity is read only');
    }

    /**
     * The value of this form control, that is, of the first selected option.
     *
     * @member {String} HTMLSelectElement#value
     */
    get value() {
        return this.selectedOption && this.selectedOption.value;
    }

    /**
     * @ignore
     * @param {String} value
     */
    set value(value) {
        this.selectedOption.value = value;
        return value;
    }

    get willValidate() {
        throw new Error('Not implemented');
    }

    set willValidate(value) {
        throw new Error('willValidate is read only');
    }

    /**
     * Gets an item from the options collection for this select element.
     *
     * @param {Number} index
     * @ return {HTMLSelectElement}
     */
    item(index) {
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
     */
    namedItem(name) {
        throw new Error('Not implemented');
    }

    /**
     * Removes the element at the specified index from the options collection for this select element.
     *
     * @ignore Not implemented
     * @method HTMLSelectElement#remove
     * @param {Number} index
     */
    remove(index) {
        throw new Error('Not implemented');
    }
}

/**
 * @constant {string} HTMLSelectElement#nodeName option
 */
Object.defineProperty(HTMLSelectElement.prototype, 'nodeName', { value: 'select' });
