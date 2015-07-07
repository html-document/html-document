'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var Node = require('./Node');
var Comment = require('./Comment');
var DocumentFragment = require('./DocumentFragment');
var HTMLElement = require('./HTMLElement');
var Text = require('./Text');

// HTML Elements
var HTMLOptionElement = require('./HTMLElement/elements/HTMLOptionElement');
var HTMLSelectElement = require('./HTMLElement/elements/HTMLSelectElement');

var Document = (function (_Node) {
    function Document() {
        _classCallCheck(this, Document);

        _get(Object.getPrototypeOf(Document.prototype), 'constructor', this).call(this);
        this.documentElement = this.createElement('html');
        this.head = this.createElement('head');
        this.documentElement.appendChild(this.head);
        this.body = this.createElement('body');
        this.documentElement.appendChild(this.body);
    }

    _inherits(Document, _Node);

    _createClass(Document, [{
        key: 'createComment',

        /**
         * Creates a new {@link Comment}.
         *
         * {@link https://developer.mozilla.org/en-US/docs/Web/API/Document.createDocumentFragment}
         *
         * @param {string} data
         * @return {Comment}
        */
        value: function createComment(data /* : String*/) {
            var comment = new Comment(data);
            comment.ownerDocument = this;
            return comment;
        }
    }, {
        key: 'createDocumentFragment',

        /**
         * Creates a new empty {@link DocumentFragment}.
         *
         * {@link https://developer.mozilla.org/en-US/docs/Web/API/Document.createDocumentFragment}
         *
         * @return {DocumentFragment}
        */
        value: function createDocumentFragment() {
            var fragment = new DocumentFragment();
            fragment.ownerDocument = this;
            return fragment;
        }
    }, {
        key: 'createElement',

        /**
         * Creates a new element with the given tag name.
         *
         * @param {string} name
         * @return {HTMLElement}
        */
        value: function createElement(name) {
            var element;
            switch (name.toLowerCase()) {
                case 'select':
                    element = new HTMLSelectElement();
                    break;
                case 'option':
                    element = new HTMLOptionElement();
                    break;
                default:
                    element = new HTMLElement();
                    element.nodeName = name;
            }
            element.ownerDocument = this;
            return element;
        }
    }, {
        key: 'createTextNode',

        /**
         * Creates a text node.
         *
         * @param {string} textContent
         * @return {Text}
        */
        value: function createTextNode(textContent) {
            var text = new Text(textContent);
            text.ownerDocument = this;
            return text;
        }
    }, {
        key: 'getElementById',

        /**
         * Returns a reference to the element by its ID.
         *
         * @param {string} id case-sensitive string representing the unique ID of the element being sought
         * @return {Element} reference to an Element, or null if an element with the specified ID is not in the document.
         */
        value: function getElementById(id) {
            return this.documentElement.getElementById(id);
        }
    }, {
        key: 'getElementsByTagName',

        /**
         * Returns an HTMLCollection of elements with the given tag name.
         * The complete document is searched, including the root node.
         * The returned HTMLCollection is live, meaning that it updates itself automatically to stay in sync
         * with the DOM treewithout having to call document.getElementsByTagName() again.
         *
         * @param {string} tagName
         * @return {HTMLCollection}
         */
        value: function getElementsByTagName(tagName, _array) {
            return this.documentElement.getElementsByTagName(tagName, _array);
        }
    }, {
        key: 'getElementsByClassName',
        value: function getElementsByClassName(className) {
            throw new Error('Not implemented');
        }
    }, {
        key: 'querySelector',
        value: function querySelector() {
            throw new Error('Not implemented');
        }
    }, {
        key: 'querySelectorAll',
        value: function querySelectorAll() {
            throw new Error('Not implemented');
        }
    }]);

    return Document;
})(Node);

exports['default'] = Document;

Object.defineProperty(Document.prototype, 'nodeType', { value: Node.DOCUMENT_NODE });
module.exports = exports['default'];
//# sourceMappingURL=Document.js.map