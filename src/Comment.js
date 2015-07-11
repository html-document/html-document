import escapeHTML from './utils/escapeHTML';
import Node from './Node';

/**
 * @see https://developer.mozilla.org/en/docs/Web/API/Comment
 * @class Comment
 * @extends Node
 * @param {String} comment
 */
export default class Comment extends Node {
    /*
     * @constructs Comment
     *
     * @param {String} comment
     */
    constructor(comment: string) {
        super();
        this._value = comment;
    }

    /**
     * @property Comment#innerHTML
     * @inheritdoc
     */
    get innerHTML() {
        return '';
    }

    /**
     * @inheritdoc
     */
    get outerHTML() {
        return '<!--' + escapeHTML(this._value) + '-->';
    }

    /**
     * Returns comment's value
     *
     * @type {String}
     */
    get data() {
        return this._value;
    }

    /**
     * Set comment's value
     *
     * @param {String} data
     */
    set data(data) {
        this._value = data;
    }
}

/**
 * @constant {number} Comment#nodeType
 */
Object.defineProperty(Comment.prototype, 'nodeType', { value: Node.COMMENT_NODE });

/**
 * @constant {string} Comment#nodeName
 */
Object.defineProperty(Comment.prototype, 'nodeName', { value: '#comment' });
