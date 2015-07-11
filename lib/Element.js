'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _Node = require('./Node');

var _Node2 = _interopRequireDefault(_Node);

var _ParentNode2 = require('./ParentNode');

var _ParentNode3 = _interopRequireDefault(_ParentNode2);

/**
 * The Element interface represents an object within a DOM document.
 * This interface describes methods and properties common to all kinds of elements.
 * Specific behaviors are described in interfaces which inherit from Element but add additional functionality.
 *
 * @see https://developer.mozilla.org/en/docs/Web/API/Element
 * @class Element
 * @extends ParentNode
 */
/**
 * The Element.innerHTML property sets or gets the HTML syntax describing the element's descendants.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML
 * @member {String} Element#innerHTML
 */
/**
 * The outerHTML attribute of the element DOM interface gets the serialized HTML fragment
 * describing the element including its descendants.
 * It can be set to replace the element with nodes parsed from the given string.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Element/outerHTML
 * @member {String} Element#outerHTML
 */

var Element = (function (_ParentNode) {
    function Element() {
        _classCallCheck(this, Element);

        _get(Object.getPrototypeOf(Element.prototype), 'constructor', this).apply(this, arguments);
    }

    _inherits(Element, _ParentNode);

    _createClass(Element, [{
        key: 'getElementById',

        /**
         * Returns a reference to the element by its ID.
         *
         * @method Element#getElementById
         * @param {String} id case-sensitive string representing the unique ID of the element being sought
         * @return {Element} reference to an Element, or null if an element with the specified ID is not in the document.
         */
        value: function getElementById(id) {
            return this._childNodesRecursiveFind(function (e) {
                return e instanceof Element && e.getAttribute('id') === id;
            }) || null;
        }
    }, {
        key: 'getElementsByTagName',

        /**
         * Returns an HTMLCollection of elements with the given tag name.
         * The complete document is searched, including the root node.
         * The returned HTMLCollection is live, meaning that it updates itself automatically to stay in sync
         * with the DOM treewithout having to call document.getElementsByTagName() again.
         *
         * @method Element#getElementsByTagName
         * @param {String} tagName
         * @return {HTMLCollection}
         */
        value: function getElementsByTagName(tagName, _array) {
            if (!tagName) {
                return !_array ? this.children.slice() : _array.push.apply(_array, this.children);
            }

            _array = _array || [];
            tagName = tagName.toLowerCase();
            this.children.forEach(function (e) {
                if (e.nodeName.toLowerCase() === tagName) {
                    _array.push(e);
                }
            });
            return _array;
        }
    }, {
        key: 'id',

        /**
         * The id of the element.
         *
         * @member {String} Element#id
         */
        get: function get() {
            return this.getAttribute('id');
        },

        /**
         * @ignore
         * @param {String} id
         */
        set: function set(id) {
            this.setAttribute('id', id);
        }
    }, {
        key: 'tagName',

        /**
         * The tag name of the element.
         *
         * @member {String} Element#tagName
         * @readonly
         */
        get: function get() {
            return this.nodeName;
        }
    }, {
        key: 'children',

        /**
         * Returns a live {@link HTMLCollection} containing all objects of type {@link Element}
         * that are children of this ParentNode.
         *
         * Note: this currently returns a non-live array.
         *
         * later type {HTMLCollection}
         *
         * @member {Array.<Element>} Element#children
         * @readonly
         */
        get: function get() {
            return this._childNodes.filter(function (n) {
                return n instanceof Element;
            });
        }
    }, {
        key: 'firstElementChild',

        /**
         * Returns the {@link Element} that is the first child of this ParentNode, or null if there is none.
         *
         * @member {Element} Element#firstElementChild
         * @readonly
         */
        get: function get() {
            return this._childNodes[0] || null;
        }
    }, {
        key: 'lastElementChild',

        /**
         * Returns the {@link Element} that is the first child of this ParentNode, or null if there is none.
         *
         * @member {Element} Element#lastElementChild
         * @readonly
         */
        get: function get() {
            return this._childNodes.length === 0 ? null : this._childNodes[this._childNodes.length - 1];
        }
    }, {
        key: 'childElementCount',

        /**
         * Returns an unsigned long giving the amount of children that the object has.
         *
         * @member {Number} Element#childElementCount
         * @readonly
         */
        get: function get() {
            return this._childNodes.length;
        }
    }]);

    return Element;
})(_ParentNode3['default']);

exports['default'] = Element;

/**
 * @constant {string} Comment#nodeType
 */
Object.defineProperty(Element.prototype, 'nodeType', { value: _Node2['default'].ELEMENT_NODE });
module.exports = exports['default'];
//# sourceMappingURL=Element.js.map