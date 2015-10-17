import Node from './Node';
import ParentNode from './ParentNode';
import { querySelector as _querySelector, querySelectorAll as _querySelectorAll } from './utils/querySelectorHelper';

/**
 * The Element interface represents an object within a DOM document.
 * This interface describes methods and properties common to all kinds of elements.
 * Specific behaviors are described in interfaces which inherit from Element but add additional functionality.
 *
 * @see https://developer.mozilla.org/en/docs/Web/API/Element
 */
/**
 * The Element.innerHTML property sets or gets the HTML syntax describing the element's descendants.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML
 * @member {string} Element#innerHTML
 */
/**
 * The outerHTML attribute of the element DOM interface gets the serialized HTML fragment
 * describing the element including its descendants.
 * It can be set to replace the element with nodes parsed from the given string.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Element/outerHTML
 * @member {string} Element#outerHTML
 */

export default class Element extends ParentNode {
    /**
     * The id of the element.
     *
     * @type {string}
     */
    get id() {
        return this.getAttribute('id');
    }

    /**
     * @param {string} id
     */
    set id(id) {
        this.setAttribute('id', id);
    }

    /**
     * The tag name of the element.
     *
     * @type {string}
     * @readonly
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
     * later type {HTMLCollection}
     *
     * @type {Element[]}
     * @readonly
     */
    get children() {
        return this._childNodes.filter(node => node instanceof Element);
    }

    /**
     * Returns the {@link Element} that is the first child of this ParentNode, or null if there is none.
     *
     * @type {Element}
     * @readonly
     */
    get firstElementChild() {
        return this._childNodes[0] || null;
    }

    /**
     * Returns the {@link Element} that is the first child of this ParentNode, or null if there is none.
     *
     * @type {Element}
     * @readonly
     */
    get lastElementChild() {
        return this._childNodes.length === 0 ? null : this._childNodes[this._childNodes.length - 1];
    }

    /**
     * Returns an unsigned long giving the amount of children that the object has.
     *
     * @type {number}
     * @readonly
     */
    get childElementCount() {
        return this._childNodes.length;
    }

    /**
     * Returns a reference to the element by its ID.
     *
     * @param {string} id case-sensitive string representing the unique ID of the element being sought
     * @return {Element} reference to an Element, or null if an element with the specified ID is not in the document.
     */
    getElementById(id) {
        return this._childNodesRecursiveFind(node => {
            return node instanceof Element && node.getAttribute('id') === id;
        }) || null;
    }

    /**
     * Returns an HTMLCollection of elements with the given tag name.
     * The complete document is searched, including the root node.
     * The returned HTMLCollection is live, meaning that it updates itself automatically to stay in sync
     * with the DOM treewithout having to call document.getElementsByTagName() again.
     *
     * @param {string} tagName
     * @return {HTMLCollection}
     */
    getElementsByTagName(tagName, _array) {
        if (!tagName) {
            return !_array ? this.children.slice() : _array.push(...this.children);
        }

        _array = _array || [];
        tagName = tagName.toLowerCase();
        this.children.forEach(child => {
            if (child.nodeName.toLowerCase() === tagName) {
                _array.push(child);
            }
        });
        return _array;
    }

    /**
     * Returns the first element that is a descendant of the element on which it is invoked that matches the
     * specified group of selectors.
     *
     * @param {string} query CSS query for selecting element
     * @return {Element|null}
     */
    querySelector(query) {
        return _querySelector(this, query);
    }

    /**
     * Returns a non-live NodeList of all elements descended from the element on which it is invoked that match the
     * specified group of CSS selectors.
     *
     * @param {string} query
     * @return {Element[]}
     */
    querySelectorAll(query) {
        return _querySelectorAll(this, query);
    }

    get attributes() {
        return this._attributes;
    }
}

/**
 * @constant {string} Comment#nodeType
 */
Object.defineProperty(Element.prototype, 'nodeType', { value: Node.ELEMENT_NODE });
