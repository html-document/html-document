'use strict';

var _get = require('babel-runtime/helpers/get').default;

var _inherits = require('babel-runtime/helpers/inherits').default;

var _createClass = require('babel-runtime/helpers/create-class').default;

var _classCallCheck = require('babel-runtime/helpers/class-call-check').default;

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default').default;

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _Node2 = require('./Node');

var _Node3 = _interopRequireDefault(_Node2);

var _Comment = require('./Comment');

var _Comment2 = _interopRequireDefault(_Comment);

var _DocumentFragment = require('./DocumentFragment');

var _DocumentFragment2 = _interopRequireDefault(_DocumentFragment);

var _HTMLElement = require('./HTMLElement');

var _HTMLElement2 = _interopRequireDefault(_HTMLElement);

var _Text = require('./Text');

var _Text2 = _interopRequireDefault(_Text);

// HTML Elements

var _HTMLElementElementsHTMLOptionElement = require('./HTMLElement/elements/HTMLOptionElement');

var _HTMLElementElementsHTMLOptionElement2 = _interopRequireDefault(_HTMLElementElementsHTMLOptionElement);

var _HTMLElementElementsHTMLSelectElement = require('./HTMLElement/elements/HTMLSelectElement');

var _HTMLElementElementsHTMLSelectElement2 = _interopRequireDefault(_HTMLElementElementsHTMLSelectElement);

var _HTMLElementElementsHTMLTableElement = require('./HTMLElement/elements/HTMLTableElement');

var _HTMLElementElementsHTMLTableElement2 = _interopRequireDefault(_HTMLElementElementsHTMLTableElement);

/**
 * @see https://developer.mozilla.org/en/docs/Web/API/Document
 * @class Document
 * @extends Node
 */
/** @class Document */
let Document = (function (_Node) {
    _inherits(Document, _Node);

    /*
     * @constructs Document
     */

    function Document() {
        _classCallCheck(this, Document);

        _get(Object.getPrototypeOf(Document.prototype), 'constructor', this).call(this);
        this.documentElement = this.createElement('html');
        this.head = this.createElement('head');
        this.documentElement.appendChild(this.head);
        this.body = this.createElement('body');
        this.documentElement.appendChild(this.body);
    }

    /**
     * @constant {number} Comment#nodeType
     */

    /**
     * Creates a new {@link Comment}.
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/API/Document.createComment
     *
     * @method Document#createComment
     * @param {String} data
     * @return {Comment}
    
    * @memberof Document 
    * @instance 
    * @method createComment 
    * @param data */

    _createClass(Document, [{
        key: 'createComment',
        value: function createComment(data) {
            let comment = new _Comment2.default(data);
            comment.ownerDocument = this;
            return comment;
        }

        /**
         * Creates a new empty {@link DocumentFragment}.
         *
         * @see https://developer.mozilla.org/en-US/docs/Web/API/Document.createDocumentFragment
         *
         * @method Document#createDocumentFragment
         * @return {DocumentFragment}
        
        * @memberof Document 
        * @instance 
        * @method createDocumentFragment */
    }, {
        key: 'createDocumentFragment',
        value: function createDocumentFragment() {
            let fragment = new _DocumentFragment2.default();
            fragment._ownerDocument = this;
            return fragment;
        }

        /**
         * Creates a new element with the given tag name.
         *
         * @see https://developer.mozilla.org/en-US/docs/Web/API/Document.createElement
         *
         * @method Document#createElement
         * @param {String} name
         * @return {HTMLElement}
        
        * @memberof Document 
        * @instance 
        * @method createElement 
        * @param name */
    }, {
        key: 'createElement',
        value: function createElement(name) {
            let element;
            switch (name.toLowerCase()) {
                case 'select':
                    element = new _HTMLElementElementsHTMLSelectElement2.default();
                    break;
                case 'option':
                    element = new _HTMLElementElementsHTMLOptionElement2.default();
                    break;
                case 'table':
                    element = new _HTMLElementElementsHTMLTableElement2.default();
                    break;
                default:
                    element = new _HTMLElement2.default();
                    element.nodeName = name;
            }
            element._ownerDocument = this;
            return element;
        }

        /**
         * Creates a text node.
         *
         * @see https://developer.mozilla.org/en-US/docs/Web/API/Document.createTextNode
         *
         * @method Document#createTextNode
         * @param {String} textContent
         * @return {Text}
        
        * @memberof Document 
        * @instance 
        * @method createTextNode 
        * @param textContent */
    }, {
        key: 'createTextNode',
        value: function createTextNode(textContent) {
            let text = new _Text2.default(textContent);
            text._ownerDocument = this;
            return text;
        }

        /**
         * Returns a reference to the element by its ID.
         *
         * @see https://developer.mozilla.org/en-US/docs/Web/API/Document.getElementById
         *
         * @method Document#getElementById
         * @param {String} id case-sensitive string representing the unique ID of the element being sought
         * @return {Element} reference to an Element, or null if an element with the specified ID is not in the document.
         
        * @memberof Document 
        * @instance 
        * @method getElementById 
        * @param id */
    }, {
        key: 'getElementById',
        value: function getElementById(id) {
            return this.documentElement.getElementById(id);
        }

        /**
         * Returns an HTMLCollection of elements with the given tag name.
         * The complete document is searched, including the root node.
         * The returned HTMLCollection is live, meaning that it updates itself automatically to stay in sync
         * with the DOM treewithout having to call document.getElementsByTagName() again.
         *
         * @see https://developer.mozilla.org/en-US/docs/Web/API/Document.getElementsByTagName
         *
         * @method Document#getElementsByTagName
         * @param {String} tagName
         * @return {HTMLCollection}
         
        * @memberof Document 
        * @instance 
        * @method getElementsByTagName 
        * @param tagName 
        * @param _array */
    }, {
        key: 'getElementsByTagName',
        value: function getElementsByTagName(tagName, _array) {
            return this.documentElement.getElementsByTagName(tagName, _array);
        }
    }, {
        key: 'getElementsByClassName',
        /** @memberof Document 
        * @instance 
        * @method getElementsByClassName 
        * @param className */value: function getElementsByClassName(className) {
            throw new Error('Not implemented');
        }
    }, {
        key: 'querySelector',
        /** @memberof Document 
        * @instance 
        * @method querySelector */value: function querySelector() {
            throw new Error('Not implemented');
        }
    }, {
        key: 'querySelectorAll',
        /** @memberof Document 
        * @instance 
        * @method querySelectorAll */value: function querySelectorAll() {
            throw new Error('Not implemented');
        }
    }]);

    return Document;
})(_Node3.default);

exports.default = Document;
Object.defineProperty(Document.prototype, 'nodeType', { value: _Node3.default.DOCUMENT_NODE });
module.exports = exports.default;
//# sourceMappingURL=Document.js.map