var HTMLElement = require('../../HTMLElement').HTMLElement;

/**
 * The HTMLOptionElement interface represents <option> elements
 * and inherits all classes and methods of the HTMLElement interface.
 */
export class HTMLOptionElement extends HTMLElement {
    constructor() {
        super();
        this.nodeName = 'option';
    }

    /**
     * Contains the initial value of the selected HTML attribute,
     * indicating whether the option is selected by default or not.
     *
     * @return {Boolean}
     */
    get defaultSelected() {
        throw new Error('Unsuported');
    }

    /**
     * Contains the initial value of the selected HTML attribute,
     * indicating whether the option is selected by default or not.
     *
     * @param {Boolean} selected
     */
    set defaultSelected(selected) {
        throw new Error('Unsuported');
    }

    /**
     * Reflects the value of the disabled HTML attribute, which indicates that the option is unavailable to be selected.
     * An option can also be disabled if it is a child of an <optgroup> element that is disabled.
     *
     * @return {Boolean}
     */
    get disabled() {
        return !!this.getAttribute('disabled')
             && (this.parentNode.nodeName !== 'optgroup' || !this.parentNode.disabled);
    }

    /**
     * Reflects the value of the disabled HTML attribute, which indicates that the option is unavailable to be selected.
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
     * If the option is a descendent of a <select> element, then this property has the same value as
     * the form property of the corresponding HTMLSelectElement object; otherwise, it is null.
     *
     * @return {HTMLFormElement}
     */
    get form() {
        throw new Error('Not implemented');
    }

    set form(value) {
        throw new Error('form is read only');
    }

    /**
     * The position of the option within the list of options it belongs to, in tree-order.
     * If the option is not part of a list of options, like when it is part of the <datalist> element, the value is 0.
     *
     * @return {Number}
     */
    get index() {
        throw new Error('Not implemented');
    }

    /**
     * The position of the option within the list of options it belongs to, in tree-order.
     * If the option is not part of a list of options, like when it is part of the <datalist> element, the value is 0.
     *
     */
    set index(value) {
        throw new Error('index is read only');
    }

    /**
     * Reflects the value of the label HTML attribute, which provides a label for the option.
     * If this attribute isn't specifically set, reading it returns the element's text content.
     *
     * @return {Number}
     */
    get label() {
        throw new Error('Not implemented');
    }

    /**
     * Reflects the value of the label HTML attribute, which provides a label for the option.
     * If this attribute isn't specifically set, reading it returns the element's text content.
     *
     * @param {Number}
     */
    set label(label) {
        throw new Error('Not implemented');
    }

    get _select() {
        var node = this;
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
     * @return {Boolean}
     */
    get selected() {
        return !!this.getAttribute('selected');
    }

    /**
     * Indicates whether the option is currently selected.
     *
     * @param {Boolean} selected
     */
    set selected(selected) {
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
    }

    /**
     * Contains the text content of the element.
     *
     * @return {String}
     */
    get text() {
        return this.textContent;
    }

    /**
     * Contains the text content of the element.
     *
     * @param {String} text
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
     * @return {String}
     */
    get value() {
        var value = this.getAttribute('value');
        return value === null ? this.textContent : value;
    }

    /**
     * Reflects the value of the value HTML attribute, if it exists;
     * otherwise reflects value of the Node.textContent property.
     *
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
