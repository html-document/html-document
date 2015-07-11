'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _Node2 = require('./Node');

var _Node3 = _interopRequireDefault(_Node2);

var _parse = require('./parse');

var _parse2 = _interopRequireDefault(_parse);

/**
 * The ParentNode interface contains methods that are particular to Node objects that can have children.
 *
 * @see https://developer.mozilla.org/en/docs/Web/API/ParentNode
 * @class ParentNode
 * @extends Node
 */

var ParentNode = (function (_Node) {
    function ParentNode() {
        _classCallCheck(this, ParentNode);

        _get(Object.getPrototypeOf(ParentNode.prototype), 'constructor', this).call(this);
        this._childNodes = [];
    }

    _inherits(ParentNode, _Node);

    _createClass(ParentNode, [{
        key: '_childNodesRecursiveForEach',
        value: function _childNodesRecursiveForEach(callback) {
            this._childNodes.forEach(function (node) {
                callback(node);
                if (node instanceof ParentNode) {
                    node._childNodesRecursiveForEach(callback);
                }
            });
        }
    }, {
        key: '_childNodesRecursiveFind',
        value: function _childNodesRecursiveFind(callback) {
            var result = undefined;
            this._childNodes.some(function (node) {
                if (callback(node)) {
                    result = node;
                    return true;
                }

                if (node instanceof ParentNode) {
                    result = node._childNodesRecursiveFind(callback);
                    if (result !== undefined) {
                        return true;
                    }
                }
            });
            return result;
        }
    }, {
        key: 'appendChild',

        /**
         * @method ParentNode#appendChild
         * @param {Node} child
         * @return {Node}
         */
        value: function appendChild(child) {
            if (!(child instanceof _Node3['default'])) {
                throw new Error('Trying to add non node element');
            }

            if (child._parentNode) {
                child._parentNode.removeChild(child);
            }

            if (child.nodeType === _Node3['default'].DOCUMENT_FRAGMENT_NODE) {
                var childNode = undefined;

                while (childNode = child.firstChild) {
                    child.removeChild(childNode);
                    this.appendChild(childNode);
                }

                return child;
            }

            child._parentNode = this;
            this._childNodes.push(child);
            return child;
        }
    }, {
        key: 'replaceChild',

        /**
         * @method ParentNode#replaceChild
         * @param {Node} newChild
         * @param {Node} oldChild
         * @return {Node}
         */
        value: function replaceChild(newChild, oldChild) {
            var index = this._childNodes.indexOf(oldChild);
            if (index === -1) {
                throw new Error('Node was not found');
            }

            if (newChild._parentNode) {
                newChild._parentNode.removeChild(newChild);
            }

            if (newChild.nodeType === _Node3['default'].DOCUMENT_FRAGMENT_NODE) {
                var newChildren = [];
                var childNode = undefined;

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
    }, {
        key: 'removeChild',

        /**
         * @method ParentNode#removeChild
         * @param {Node} toRemoveChild
         * @return {Node}
         */
        value: function removeChild(toRemoveChild) {
            var index = this._childNodes.indexOf(toRemoveChild);
            if (index === -1) {
                throw new Error('Node was not found');
            }

            this._childNodes.splice(index, 1);
            delete toRemoveChild._parentNode;
            return toRemoveChild;
        }
    }, {
        key: 'insertBefore',

        /**
         * @method ParentNode#insertBefore
         * @param {Node} child
         * @param {Node} existingChild
         * @return {Node}
         */
        value: function insertBefore(child, existingChild) {
            var index = this._childNodes.indexOf(existingChild);
            if (index === -1) {
                throw new Error('Node was not found');
            }

            if (child._parentNode) {
                child._parentNode.removeChild(child);
            }

            if (child.nodeType === _Node3['default'].DOCUMENT_FRAGMENT_NODE) {
                var children = [];
                var childNode = undefined;

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
    }, {
        key: 'childNodes',

        /**
         * TODO return {HTMLCollection}
         * @member {String} ParentNode#childNodes
         * @readonly
         */
        get: function get() {
            return this._childNodes;
        }
    }, {
        key: 'parentNode',

        /**
         * @member {Node|null} ParentNode#parentNode
         * @readonly
         */
        get: function get() {
            return this._parentNode || null;
        }
    }, {
        key: 'firstChild',

        /**
         * @member {Node|null} ParentNode#firstChild
         * @readonly
         */
        get: function get() {
            return this._childNodes[0] || null;
        }
    }, {
        key: 'lastChild',

        /**
         * @member {Node|null} ParentNode#lastChild
         * @readonly
         */
        get: function get() {
            return this._childNodes[this._childNodes.length - 1] || null;
        }
    }, {
        key: 'previousSibling',

        /**
         * @member {Node|null} ParentNode#previousSibling
         * @readonly
         */
        get: function get() {
            var indexInParent = this.parentNode._childNodes.indexOf(this);
            if (indexInParent === -1) {
                throw new Error('Unexpected state: this node is not in the parent');
            }

            return indexInParent !== 0 && this.parentNode._childNodes[indexInParent - 1] || null;
        }
    }, {
        key: 'nextSibling',

        /**
         * @member {Node|null} ParentNode#nextSibling
         * @readonly
         */
        get: function get() {
            var indexInParent = this.parentNode._childNodes.indexOf(this);
            if (indexInParent === -1) {
                throw new Error('Unexpected state: this node is not in the parent');
            }

            return this.parentNode._childNodes[indexInParent + 1] || null;
        }
    }, {
        key: 'innerHTML',

        /**
         * @ignore
         * @return {String}
         */
        get: function get() {
            return this._childNodes.reduce(function (value, node) {
                return value + node._toHTML();
            }, '');
        },

        /**
         * @ignore
         * @param {String} html
         */
        set: function set(html) {
            this._childNodes = [];
            (0, _parse2['default'])(html, this);
        }
    }, {
        key: 'textContent',

        /**
         * @ignore
         * @return {String}
         */
        get: function get() {
            return this._childNodes.reduce(function (value, node) {
                return value + node.textContent;
            }, '');
        }
    }]);

    return ParentNode;
})(_Node3['default']);

exports['default'] = ParentNode;
module.exports = exports['default'];
//# sourceMappingURL=ParentNode.js.map