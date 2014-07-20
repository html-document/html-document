var Element = require('./Element').Element;
var CSSStyleDeclaration = require('./HTMLElement/CSSStyleDeclaration').CSSStyleDeclaration;
var escapeAttribute = require('./utils/escapeAttribute');

/**
 * The HTMLElement interface represents any HTML element.
 *
 * {@link https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement}
 */
export class HTMLElement extends Element {
    constructor() {
        super();
        this.style = new CSSStyleDeclaration(this);
        //TODO : classList
    }

    _updatedAttribute(attributeName, value) {
        if (attributeName === 'style') {
            this.style.cssText = value || '';
        }
    }


    /**
     * @return {String}
     */
    get outerHTML() {
        return '<' + this.nodeName + Object.keys(this._attributes).reduce((value, attributeName) => {
            return value + ' ' + attributeName + '="' + escapeAttribute(this._attributes[attributeName]) + '"';
        }, '') + '>' + this.innerHTML + '</' + this.nodeName + '>';
    }

}
