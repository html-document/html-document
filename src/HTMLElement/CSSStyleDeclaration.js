var AbstractCSSStyleDeclaration = require('../Abstract/AbstractCSSStyleDeclaration')
                                                            .AbstractCSSStyleDeclaration;

export class CSSStyleDeclaration extends AbstractCSSStyleDeclaration {
    /**
     * @param {HTMLElement} element
     */
    constructor(element) {
        this._element = element;
    }

    /**
     *
     */
    _stringify() {
        super._stringify();
        this._element._setAttribute('style', this.cssText);
    }
}