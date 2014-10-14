var Element = require('./Element').Element;
var CSSStyleDeclaration = require('./HTMLElement/CSSStyleDeclaration').CSSStyleDeclaration;
var ClassList = require('./HTMLElement/ClassList').ClassList;
var escapeAttribute = require('./utils/escapeAttribute');

var voidElements = 'area base br col embed hr img input keygen link meta param source track wbr'.split(' ');

/**
 * The HTMLElement interface represents any HTML element.
 *
 * {@link https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement}
 */
export class HTMLElement extends Element {
    constructor() {
        super();
        this.style = new CSSStyleDeclaration(this);
        /**
         * returns a token list of the class attribute of the element
         * @type {ClassList}
         */
        this.classList = new ClassList(this);
    }


    /**
     * Gets the class of the element.
     *
     * @return {String}
     */
    get className() {
        return this.getAttribute('class');
    }

    /**
     * Sets the class of the element.
     *
     * @param {String} className
     */
    set className(className) {
        this.setAttribute('class', className);
    }



    _updatedAttribute(attributeName, value) {
        if (attributeName === 'style') {
            this.style.cssText = value || '';
        }
        if (attributeName === 'class') {
            this.classList._parse(value || '');
        }
    }


    /**
     * @return {String}
     */
    get outerHTML() {
        return '<' + this.nodeName + Object.keys(this._attributes).reduce((value, attributeName) => {
            return value + ' ' + attributeName + '="' + escapeAttribute(this._attributes[attributeName]) + '"';
        }, '') + '>' + (voidElements.indexOf(this.nodeName) !== -1 ? '' : this.innerHTML + '</' + this.nodeName + '>');
    }

}
