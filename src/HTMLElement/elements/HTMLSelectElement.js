var HTMLElement = require('../../HTMLElement').HTMLElement;

/**
 * HTML <select> elements share all of the properties and methods
 * of other HTML elements described in the element section.
 * They also have the specialized interface HTMLSelectElement.
 */
export class HTMLSelectElement extends HTMLElement {
    constructor() {
        super();
        this.nodeName = 'select';
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
     * @return {HTMLFormElement}
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
     * @return {Boolean}
     */
    get disabled() {
        return !!this.getAttribute('disabled');
    }

    /**
     * Reflects the disabled HTML attribute, which indicates whether the control is disabled.
     * If it is disabled, it does not accept clicks.
     *
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
     * The number of <option> elements in this select element.
     *
     * @return {Number}
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
     * @return {Boolean}
     */
    get multiple() {
        return !!this.getAttribute('multiple');
    }

    /**
     * Reflects the multiple HTML attribute, whichindicates whether multiple items can be selected.
     *
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
     */
    get name() {
        return this.getAttribute('name');
    }

    /**
     * Reflects the name HTML attribute, containing the name of this control used by servers and DOM search functions.
     *
     * @param {String} name
     */
    set name(name) {
        this.setAttribute('name', name);
    }

    /**
     * The set of <option> elements contained by this element. Read only.
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
     * @return {Boolean}
     */
    get required() {
        return !!this.getAttribute('required');
    }

    /**
     * Reflects the required HTML attribute, which indicates whether the user is required
     * to select a value before submitting the form
     *
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
     * The index of the first selected <option> element. The value -1 is returned if no element is selected.
     *
     * @return {Number}
     */
    get selectedIndex() {
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
    }

    /**
     * The index of the first selected <option> element. The value -1 is returned if no element is selected.
     *
     * @return {Number}
     */
    set selectedIndex(index) {
        throw new Error('Not implemented');
    }

    /**
     * The set of options that are selected.
     *
     * @return {HTMLCollection}
     */
    get selectedOptions() {
        return this.options.filter(function(option) {
            return option.selected;
        });
    }

    /**
     * The first selected option.
     *
     * @return HTMLOptionElement
     */
    get selectedOption() {
        var selectedOption;
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
     * @return {Number}
     */
    get size() {
        return Number(this.getAttribute('size')) || (this.multiple ? 4 : 1);
    }

    /**
     * Reflects the size HTML attribute, which contains the number of visible items in the control.
     *
     * @param {String} name
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
     * @return {String}
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
     * @return {String}
     */
    get value() {
        return this.selectedOption && this.selectedOption.value;
    }

    /**
     * The value of this form control, that is, of the first selected option.
     *
     * @param {String} value
     */
    set value(value) {
        return this.selectedOption.value = value;
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
     * @return {HTMLOptionElement}
     */
    item(index) {
        throw new Error('Not implemented');
    }

    /**
     * Gets the item in the options collection with the specified name.
     * The name string can match either the id or the name attribute of an option node
     *
     * @param {String} name
     * @return {HTMLOptionElement}
     */
    namedItem(name) {
        throw new Error('Not implemented');
    }

    /**
     * Removes the element at the specified index from the options collection for this select element.
     *
     * @param {Number} index
     */
    remove(index) {
        throw new Error('Not implemented');
    }
}
