var Node = require('./Node').Node;
var ParentNode = require('./ParentNode').ParentNode;

/**
 * The Element interface represents an object within a DOM document.
 * This interface describes methods and properties common to all kinds of elements.
 * Specific behaviors are described in interfaces which inherit from Element but add additional functionality.
 */
export class Element extends ParentNode {

    /**
     * Returns a live {@link HTMLCollection} containing all objects of type {@link Element}
     * that are children of this ParentNode.
     *
     * @return {HTMLCollection}
     */
    get children() {
        return this._childNodes;
    }

    /**
     * Returns the {@link Element} that is the first child of this ParentNode, or null if there is none.
     *
     * @return {Element}
     */
    get firstElementChild() {
        return this._childNodes[0] || null;
    }

    /**
     * Returns the {@link Element} that is the first child of this ParentNode, or null if there is none.
     *
     * @return {Element}
     */
    get lastElementChild() {
        return this._childNodes.length === 0 ? null : this._childNodes[this._childNodes.length -1];
    }

    /**
     * Returns an unsigned long giving the amount of children that the object has.
     *
     * @return {Number}
     */
    get childElementCount() {
        return this._childNodes.length;
    }

}

Object.defineProperty(Element.prototype, 'nodeType', { value: Node.ELEMENT_NODE });
