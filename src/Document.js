var Comment = require('./Comment').Comment;
var DocumentFragment = require('./DocumentFragment').DocumentFragment;
var HTMLElement = require('./HTMLElement').HTMLElement;
var Text = require('./Text').Text;

export class Document {
    /**
     * Creates a new {@link Comment}.
     *
     * {@link https://developer.mozilla.org/en-US/docs/Web/API/Document.createDocumentFragment}
     *
     * @param {String} data
     * @return {Comment}
    */
    createComment(data/* : String*/) {
        return new Comment(data);
    }

    /**
     * Creates a new empty {@link DocumentFragment}.
     *
     * {@link https://developer.mozilla.org/en-US/docs/Web/API/Document.createDocumentFragment}
     *
     * @return {DocumentFragment}
    */
    createDocumentFragment() {
        return new DocumentFragment();
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
        return element;
    }

    /**
     * Creates a text node.
     *
     * @param {String} textContent
     * @return {Text}
    */
    createTextNode(textContent) {
        return new Text(textContent);
    }
}
