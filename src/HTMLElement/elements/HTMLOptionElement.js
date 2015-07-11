import HTMLElement from '../../HTMLElement';

/**
 * The HTMLOptionElement interface represents option elements
 * and inherits all classes and methods of the HTMLElement interface.
 *
 * @see https://developer.mozilla.org/en/docs/Web/API/HTMLOptionElement
 * @class HTMLOptionElement
 */
export default class HTMLOptionElement extends HTMLElement {
    constructor() {
        super();
    }

    /**
     * Contains the initial value of the selected HTML attribute,
     * indicating whether the option is selected by default or not.
     *
     * @member {Boolean} HTMLOptionElement#defaultSelected
     * @ignore Unsuported
     */
    get defaultSelected() {
        throw new Error('Unsuported');
    }

    /**
     * @ignore
     * @param {Boolean} selected
     */
    set defaultSelected(selected) {
        throw new Error('Unsuported');
    }

    /**
     * Reflects the value of the disabled HTML attribute, which indicates that the option is unavailable to be selected.
     * An option can also be disabled if it is a child of an optgroup element that is disabled.
     *
     * @member {Boolean} HTMLOptionElement#disabled
     */
    get disabled() {
        return !!this.getAttribute('disabled') &&
             (this.parentNode.nodeName !== 'optgroup' || !this.parentNode.disabled);
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
     * If the option is a descendent of a select element, then this property has the same value as
     * the form property of the corresponding HTMLSelectElement object; otherwise, it is null.
     *
     * @member {HTMLFormElement} HTMLOptionElement#form
     * @readonly
     */
    get form() {
        throw new Error('Not implemented');
    }

    /**
     * @ignore
     */
    set form(value) {
        throw new Error('form is read only');
    }

    /**
     * The position of the option within the list of options it belongs to, in tree-order.
     * If the option is not part of a list of options, like when it is part of the datalist element, the value is 0.
     *
     * @member {Number} HTMLOptionElement#index
     * @readonly
     * @ignore Unsuported
     */
    get index() {
        throw new Error('Not implemented');
    }

    /**
     * @ignore
     * @param {Number} value
     */
    set index(value) {
        throw new Error('index is read only');
    }

    /**
     * Reflects the value of the label HTML attribute, which provides a label for the option.
     * If this attribute isn't specifically set, reading it returns the element's text content.
     *
     * @member {String} HTMLOptionElement#label
     * @ignore Not implemented
     */
    get label() {
        throw new Error('Not implemented');
    }

    /**
     * @ignore
     * @param {String} label
     */
    set label(label) {
        throw new Error('Not implemented');
    }

    get _select() {
        // jscs:disable safeContextKeyword
        let node = this;

        // jscs:enable safeContextKeyword

        while (node = node.parentNode) {
            if (node.nodeName === 'select') {
                return node;
            }
        }

        return null;
    }

    /**
     * Indicates whether the option is currently selected.
     *
     * @member {Boolean} HTMLOptionElement#selected
     */
    get selected() {
        return !!this.getAttribute('selected');
    }

    /**
     * @ignore
     * @param {Boolean} selected
     */
    set selected(selected) {
        if (selected) {
            let selectElement = this._select;
            if (!selectElement.multiple) {
                let selectedOption = selectElement.selectedOption;
                if (selectedOption) {
                    selectedOption.selected = false;
                }
            }

            this.setAttribute('selected', 'selected');
        } else {
            this.removeAttribute('selected');
        }
    }

    /**
     * Contains the text content of the element.
     *
     * @member {String} HTMLOptionElement#text
     */
    get text() {
        return this.textContent;
    }

    /**
     * @ignore
     */
    set text(text) {
        while (this.firstChild) {
            this.removeChild(this.firstChild);
        }

        this.appendChild(this.ownerDocument.createTextNode(text));
    }

    /**
     * Reflects the value of the value HTML attribute, if it exists;
     * otherwise reflects value of the Node.textContent property.
     *
     * @member {String} HTMLOptionElement#value
     */
    get value() {
        const value = this.getAttribute('value');
        return value === null ? this.textContent : value;
    }

    /**
     * @ignore
     * @param {String} value
     */
    set value(value) {
        if (value) {
            this.setAttribute('value', value);
        } else {
            this.removeAttribute('value');
        }
    }

}

/**
 * @constant {string} HTMLOptionElement#nodeName option
 */
Object.defineProperty(HTMLOptionElement.prototype, 'nodeName', { value: 'option' });
