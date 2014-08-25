var Node = require('./Node').Node;
var Comment = require('./Comment').Comment;
var DocumentFragment = require('./DocumentFragment').DocumentFragment;
var HTMLElement = require('./HTMLElement').HTMLElement;
var Text = require('./Text').Text;

// HTML Elements
var HTMLOptionElement = require('./HTMLElement/elements/HTMLOptionElement').HTMLOptionElement;
var HTMLSelectElement = require('./HTMLElement/elements/HTMLSelectElement').HTMLSelectElement;

export class Document extends Node {
    constructor() {
        this.documentElement = this.createElement('html');
        this.head = this.createElement('head');
        this.documentElement.appendChild(this.head);
        this.body = this.createElement('body');
        this.documentElement.appendChild(this.body);
    }

    /**
     * Creates a new {@link Comment}.
     *
     * {@link https://developer.mozilla.org/en-US/docs/Web/API/Document.createDocumentFragment}
     *
     * @param {String} data
     * @return {Comment}
    */
    createComment(data/* : String*/) {
        var comment = new Comment(data);
        comment.ownerDocument = this;
        return comment;
    }

    /**
     * Creates a new empty {@link DocumentFragment}.
     *
     * {@link https://developer.mozilla.org/en-US/docs/Web/API/Document.createDocumentFragment}
     *
     * @return {DocumentFragment}
    */
    createDocumentFragment() {
        var fragment = new DocumentFragment();
        fragment.ownerDocument = this;
        return fragment;
    }

    /**
     * Creates a new element with the given tag name.
     *
     * @param {String} name
     * @return {HTMLElement}
    */
    createElement(name) {
        var element;
        switch (name.toLowerCase()) {
            case 'select':
                element = new HTMLSelectElement();
                break;
            case 'option':
                element = new HTMLOptionElement();
                break;
            default:
                element = new HTMLElement();
                element.nodeName = name;
        }
        element.ownerDocument = this;
        return element;
    }

    /**
     * Creates a text node.
     *
     * @param {String} textContent
     * @return {Text}
    */
    createTextNode(textContent) {
        var text = new Text(textContent);
        text.ownerDocument = this;
        return text;
    }

    /**
     * Returns a reference to the element by its ID.
     *
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
     * @param {String} tagName
     * @return {HTMLCollection}
     */
    getElementsByTagName(tagName, _array) {
        return this.documentElement.getElementsByTagName(tagName, _array);
    }

    getElementsByClassName(className) {
        throw new Error('Not implemented');
    }

    querySelector() {
        throw new Error('Not implemented');
    }

    querySelectorAll() {
        throw new Error('Not implemented');
    }
}

Object.defineProperty(Document.prototype, 'nodeType', { value: Node.DOCUMENT_NODE });
