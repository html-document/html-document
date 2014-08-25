var Node = require('./Node').Node;
var ParentNode = require('./ParentNode').ParentNode;

/**
 * The Element interface represents an object within a DOM document.
 * This interface describes methods and properties common to all kinds of elements.
 * Specific behaviors are described in interfaces which inherit from Element but add additional functionality.
 */
export class Element extends ParentNode {


    /**
     * Gets the id of the element.
     *
     * @return {String}
     */
    get id() {
        return this.getAttribute('id');
    }

    /**
     * Sets the id of the element.
     *
     * @param {String} id
     */
    set id(id) {
        this.setAttribute('id', id);
    }

    /**
     * Gets the tagName of the element.
     *
     * @return {String}
     */
    get tagName() {
        return this.nodeName;
    }


    /**
     * Returns a live {@link HTMLCollection} containing all objects of type {@link Element}
     * that are children of this ParentNode.
     *
     * Note: this currently returns a non-live array.
     *
     * @return {HTMLCollection}
     */
    get children() {
        return this._childNodes.filter((n) => n instanceof Element);
    }

    /**
     * Returns the {@link Element} that is the first child of this ParentNode, or null if there is none.
     *
     * @return {Element}
     */
    get firstElementChild() {
        return this._childNodes[0] || null;
    }

    /**
     * Returns the {@link Element} that is the first child of this ParentNode, or null if there is none.
     *
     * @return {Element}
     */
    get lastElementChild() {
        return this._childNodes.length === 0 ? null : this._childNodes[this._childNodes.length -1];
    }

    /**
     * Returns an unsigned long giving the amount of children that the object has.
     *
     * @return {Number}
     */
    get childElementCount() {
        return this._childNodes.length;
    }

    /**
     * Returns a reference to the element by its ID.
     *
     * @param {String} id case-sensitive string representing the unique ID of the element being sought
     * @return {Element} reference to an Element, or null if an element with the specified ID is not in the document.
     */
    getElementById(id) {
        return this._childNodesRecursiveFind((e) => {
            if (e instanceof Element && e.getAttribute('id') === id) {
                return true;
            }
        }) || null;
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
        if (!tagName) {
            return !_array ? this.children.slice()
                         : _array.push.apply(_array, this.children);
        }
        _array = _array || [];
        tagName = tagName.toLowerCase();
        this.children.forEach((e) => {
            if (e.nodeName.toLowerCase() === tagName) {
                _array.push(e);
            }
        });
        return _array;
    }

}

Object.defineProperty(Element.prototype, 'nodeType', { value: Node.ELEMENT_NODE });
