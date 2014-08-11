var Node = require('./Node').Node;
var Comment = require('./Comment').Comment;
var DocumentFragment = require('./DocumentFragment').DocumentFragment;
var HTMLElement = require('./HTMLElement').HTMLElement;
var Text = require('./Text').Text;

export class Document {
    constructor() {
        this.documentElement = this.createElement('html');
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
        var element = new HTMLElement();
        element.nodeName = name;
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
}

Object.defineProperty(Document.prototype, 'nodeType', { value: Node.DOCUMENT_NODE });
