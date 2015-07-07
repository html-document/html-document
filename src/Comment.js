var escapeHTML = require('./utils/escapeHTML');
var Node = require('./Node');

/**
 * Comment Node
 */
export default class Comment extends Node {
    /**
     * @param {string}
     */
    constructor(comment) {
        super();
        this._value = comment;
    }

    /**
     * @return {string}
     */
    get innerHTML() {
        return '' ;
    }

    /**
     * @return {string}
     */
    get outerHTML() {
        return '<!--' + escapeHTML(this._value) + '-->' ;
    }

    /**
     * Returns comment's value
     *
     * @return {string}
     */
    get data() {
        return this._value;
    }

    /**
     * Set comment's value
     *
     * @param {string} data
     * @return {string}
     */
    set data(data) {
        this._value = data;
    }
}
Object.defineProperty(Comment.prototype, 'nodeType', { value: Node.COMMENT_NODE });
Object.defineProperty(Comment.prototype, 'nodeName', { value: '#comment' });
