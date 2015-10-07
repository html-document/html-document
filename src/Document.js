import Node from './Node';
import Comment from './Comment';
import DocumentFragment from './DocumentFragment';
import HTMLElement from './HTMLElement';
import Text from './Text';

// HTML Elements
import HTMLOptionElement from './HTMLElement/elements/HTMLOptionElement';
import HTMLSelectElement from './HTMLElement/elements/HTMLSelectElement';
import HTMLTableElement from './HTMLElement/elements/HTMLTableElement';
import HTMLTableSectionElement from './HTMLElement/elements/HTMLTableSectionElement';
import HTMLTableRowElement from './HTMLElement/elements/HTMLTableRowElement';

/**
 * @see https://developer.mozilla.org/en/docs/Web/API/Document
 * @class Document
 * @extends Node
 */
export default class Document extends Node {
    /*
     * @constructs Document
     */
    constructor() {
        super();
        this.documentElement = this.createElement('html');
        this.head = this.createElement('head');
        this.documentElement.appendChild(this.head);
        this.body = this.createElement('body');
        this.documentElement.appendChild(this.body);
    }

    /**
     * Creates a new {@link Comment}.
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/API/Document.createComment
     *
     * @method Document#createComment
     * @param {String} data
     * @return {Comment}
    */
    createComment(data) {
        let comment = new Comment(data);
        comment._ownerDocument = this;
        return comment;
    }

    /**
     * Creates a new empty {@link DocumentFragment}.
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/API/Document.createDocumentFragment
     *
     * @method Document#createDocumentFragment
     * @return {DocumentFragment}
    */
    createDocumentFragment() {
        let fragment = new DocumentFragment();
        fragment._ownerDocument = this;
        return fragment;
    }

    /**
     * Creates a new element with the given tag name.
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/API/Document.createElement
     *
     * @method Document#createElement
     * @param {String} name
     * @return {HTMLElement}
    */
    createElement(name) {
        let element;
        switch (name.toLowerCase()) {
            case 'select':
                element = new HTMLSelectElement();
                break;
            case 'option':
                element = new HTMLOptionElement();
                break;
            case 'table':
                element = new HTMLTableElement();
                break;
            case 'thead':
            case 'tfoot':
            case 'tbody':
                element = new HTMLTableSectionElement();
                element.nodeName = name;
                break;
            case 'tr':
                element = new HTMLTableRowElement();
                break;
            default:
                element = new HTMLElement();
                element.nodeName = name;
        }
        element._ownerDocument = this;
        return element;
    }

    /**
     * Creates a text node.
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/API/Document.createTextNode
     *
     * @method Document#createTextNode
     * @param {String} textContent
     * @return {Text}
    */
    createTextNode(textContent) {
        let text = new Text(textContent);
        text._ownerDocument = this;
        return text;
    }

    /**
     * Returns a reference to the element by its ID.
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/API/Document.getElementById
     *
     * @method Document#getElementById
     * @param {String} id case-sensitive string representing the unique ID of the element being sought
     * @return {Element} reference to an Element, or null if an element with the specified ID is not in the document.
     */
    getElementById(id) {
        return this.documentElement.getElementById(id);
    }

    /**
     * Returns an HTMLCollection of elements with the given tag name.
     * The complete document is searched, including the root node.
     * The returned HTMLCollection is live, meaning that it updates itself automatically to stay in sync
     * with the DOM treewithout having to call document.getElementsByTagName() again.
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/API/Document.getElementsByTagName
     *
     * @method Document#getElementsByTagName
     * @param {String} tagName
     * @return {HTMLCollection}
     */
    getElementsByTagName(tagName, _array) {
        return this.documentElement.getElementsByTagName(tagName, _array);
    }

    getElementsByClassName(className) {
        throw new Error('Not implemented');
    }

    /**
     * Returns the first element within the document (using depth-first pre-order traversal of the document's nodes|by
     * first element in document markup and iterating through sequential nodes by order of amount of child nodes)
     * that matches the specified group of selectors.
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector
     *
     * @method Document#querySelector
     * @param {string} selector
     * @returns {Element}
     */
    querySelector(selector) {
        return this.documentElement.querySelector(selector);
    }

    /**
     * Returns a list of the elements within the document (using depth-first pre-order traversal of the document's
     * nodes) that match the specified group of selectors. The object returned is a NodeList.
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll
     *
     * @method Document#querySelectorAll
     * @param {string} selector
     * @returns {NodeList}
     */
    querySelectorAll(selector) {
        return this.documentElement.querySelectorAll(selector);
    }
}

/**
 * @constant {number} Comment#nodeType
 */
Object.defineProperty(Document.prototype, 'nodeType', { value: Node.DOCUMENT_NODE });
