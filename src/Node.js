/**
 * A Node is an interface from which a number of DOM types inherit,
 * and allows these various types to be treated (or tested) similarly.
 *
 * {@link https://developer.mozilla.org/en-US/docs/Web/API/Node}
 */
export class Node {
    constructor() {
        this._attributes = {};
    }

    /* ATTRIBUTES */

    /**
     * get attribute's value
     *
     * @param {String} attributeName
     * @return {String}
     */
    getAttribute(attributeName) {
        return this._attributes[attributeName];
    }

    /**
     * set attribute's value
     *
     * @param {String} attributeName
     * @param {String} attributeValue
     */
    setAttribute(attributeName, attributeValue) {
        this._setAttribute(attributeName, attributeValue);
        this._updatedAttribute(attributeName, this._attributes[attributeName]);
    }

    /**
     * set attribute's value
     *
     * @internal
     * @param {String} attributeName
     * @param {String} attributeValue
     */
    _setAttribute(attributeName, attributeValue) {
        this._attributes[attributeName] = String(attributeValue);
    }

    /**
     * remove attribute
     *
     * @param {String} attributeName
     */
    removeAttribute(attributeName) {
        delete this._attributes[attributeName];
        this._updatedAttribute(attributeName);
    }

    /**
     * @internal
     * @param {String} attributeName
     */
    _updatedAttribute(attributeName) {

    }

    /* CONTENT */

    /**
     * @return {String}
     */
    get textContent() {
        return '';
    }

    _toHTML() {
        return this.outerHTML;
    }

}

Object.defineProperty(Node, 'ELEMENT_NODE', { value: 1 });
Object.defineProperty(Node, 'ATTRIBUTE_NODE', { value: 2 });
Object.defineProperty(Node, 'TEXT_NODE', { value: 3 });
Object.defineProperty(Node, 'CDATA_SECTION_NODE', { value: 4 });
Object.defineProperty(Node, 'ENTITY_REFERENCE_NODE', { value: 5 });
Object.defineProperty(Node, 'ENTITY_NODE', { value: 6 });
Object.defineProperty(Node, 'PROCESSING_INSTRUCTION_NODE', { value: 7 });
Object.defineProperty(Node, 'COMMENT_NODE', { value: 8 });
Object.defineProperty(Node, 'DOCUMENT_NODE', { value: 9 });
Object.defineProperty(Node, 'DOCUMENT_TYPE_NODE', { value: 10 });
Object.defineProperty(Node, 'DOCUMENT_FRAGMENT_NODE', { value: 11 });
Object.defineProperty(Node, 'NOTATION_NODE', { value: 12 });
