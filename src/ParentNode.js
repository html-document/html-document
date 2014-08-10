var Node = require('./Node').Node;

/**
 * The ParentNode interface contains methods that are particular to Node objects that can have children.
 *
 * {@link https://developer.mozilla.org/en-US/docs/Web/API/ParentNode}
 */
export class ParentNode extends Node {
    constructor() {
        super();
        this._childNodes = [];
    }

    /**
     * @return {HTMLCollection}
     */
    get childNodes() {
        return this._childNodes;
    }

    /**
     * @return {Node|null}
     */
    get firstChild() {
        return this._childNodes[0] || null;
    }

    /**
     * @return {Node|null}
     */
    get lastChild() {
        return this._childNodes[this._childNodes.length -1] || null;
    }

    /**
     * @param {Node}
     * @return {Node}
     */
    appendChild(child) {
        if (child.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
            var childNode;
            while (childNode = child.firstChild) {
                child.removeChild(childNode);
                this.appendChild(childNode);
            }
            return child;
        }
        if (this._childNodes.indexOf(child) !== -1) {
            return child;
        }
        child._parentNode = this;
        this._childNodes.push(child);
        return child;
    }

    /**
     * @param {Node}
     * @param {Node}
     * @return {Node}
     */
    replaceChild(newChild, oldChild) {
        var index = this._childNodes.indexOf(oldChild);
        if (index === -1) {
            throw new Error('Node was not found');
        }
        if (newChild.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
            var newChildren = [], childNode;
            while (childNode = newChild.firstChild) {
                newChild.removeChild(childNode);
                childNode._parentNode = this;
                newChildren.push(childNode);
            }
            this._childNodes.splice.bind(this._childNodes, index, 1).apply(null, newChildren);
        } else {
            newChild._parentNode = this;
            this._childNodes[index] = newChild;
        }
        delete oldChild._parentNode;
        return oldChild;
    }

    /**
     * @param {Node}
     * @return {Node}
     */
    removeChild(toRemoveChild) {
        var index = this._childNodes.indexOf(toRemoveChild);
        if (index === -1) {
            throw new Error('Node was not found');
        }
        this._childNodes.splice(index, 1);
        delete toRemoveChild._parentNode;
        return toRemoveChild;
    }

    /**
     * @param {Node}
     * @param {Node}
     * @return {Node}
     */
    insertBefore(child, existingChild) {
        var index = this._childNodes.indexOf(existingChild);
        if (index === -1) {
            throw new Error('Node was not found');
        }
        if (child.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
            var children = [], childNode;
            while (childNode = child.firstChild) {
                child.removeChild(childNode);
                childNode._parentNode = this;
                children.push(childNode);
            }
            this._childNodes.splice.bind(this._childNodes, index, 0).apply(null, children);
        } else {
            child._parentNode = this;
            this._childNodes.splice(index, 0, child);
        }
        return child;
    }


    /**
     * @return {String}
     */
    get innerHTML() {
        return this._childNodes.reduce(function(value, node) {
            return value + node._toHTML();
        }, '');
    }

    /**
     * @return {String}
     */
    get textContent() {
        return this._childNodes.reduce(function(value, node) {
            return value + node.textContent;
        }, '');
    }
}
