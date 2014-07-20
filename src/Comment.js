var escapeHTML = require('./utils/escapeHTML');
var Node = require('./Node').Node;

/**
 * Comment Node
 */
export class Comment extends Node {
    /**
     * @param {String}
     */
    constructor(comment) {
        this._value = comment;
    }

    /**
     * @return {String}
     */
    get innerHTML() {
        return '' ;
    }

    /**
     * @return {String}
     */
    get outerHTML() {
        return '<!--' + escapeHTML(this._value) + '-->' ;
    }

    /**
     * Returns comment's value
     *
     * @return {String}
     */
    get data() {
        return this._value;
    }

    /**
     * Set comment's value
     *
     * @param {String} data
     * @return {String}
     */
    set data(data) {
        this._value = data;
    }
}
Object.defineProperty(Comment.prototype, 'nodeType', { value: Node.COMMENT_NODE });
Object.defineProperty(Comment.prototype, 'nodeName', { value: '#comment' });
