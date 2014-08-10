var Node = require('./Node').Node;
var ParentNode = require('./ParentNode').ParentNode;

/**
 * The DocumentFragment interface represents a minimal document object that has no parent. It is used as
 * a light-weight version of Document to store well-formed or potentially non-well-formed fragments of XML.
 */
export class DocumentFragment extends ParentNode {

    /**
     * @return {String}
     */
    get outerHTML() {
        return this.innerHTML;
    }
}

Object.defineProperty(DocumentFragment.prototype, 'nodeType', { value: Node.DOCUMENT_FRAGMENT_NODE });
