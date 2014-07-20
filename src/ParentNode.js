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

    get childNodes() {
        return this._childNodes;
    }

    get firstChild() {
        return this._childNodes[0] || null;
    }

    get lastChild() {
        return this._childNodes[this._childNodes.length -1] || null;
    }

    appendChild(child) {
        if (this._childNodes.indexOf(child) !== -1) {
            return child;
        }
        child._parentNode = this;
        this._childNodes.push(child);
        return child;
    }

    replaceChild(newChild, oldChild) {
        var index = this._childNodes.indexOf(oldChild);
        if (index === -1) {
            throw new Error('Node was not found');
        }
        newChild._parentNode = this;
        this._childNodes[index] = newChild;
        delete oldChild._parentNode;
        return oldChild;
    }

    removeChild(toRemoveChild) {
        var index = this._childNodes.indexOf(toRemoveChild);
        if (index === -1) {
            throw new Error('Node was not found');
        }
        this._childNodes.splice(index, 1);
        delete toRemoveChild._parentNode;
        return toRemoveChild;
    }

    insertBefore(child, existingChild) {
        var index = this._childNodes.indexOf(existingChild);
        if (index === -1) {
            throw new Error('Node was not found');
        }
        child._parentNode = this;
        if (index === 0) {
            this._childNodes.unshift(child);
        } else {
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
