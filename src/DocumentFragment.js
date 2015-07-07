var Node = require('./Node');
var ParentNode = require('./ParentNode');

/**
 * The DocumentFragment interface represents a minimal document object that has no parent. It is used as
 * a light-weight version of Document to store well-formed or potentially non-well-formed fragments of XML.
 */
export default class DocumentFragment extends ParentNode {

    /**
     * @return {string}
     */
    get outerHTML() {
        return this.innerHTML;
    }
}

Object.defineProperty(DocumentFragment.prototype, 'nodeType', { value: Node.DOCUMENT_FRAGMENT_NODE });
