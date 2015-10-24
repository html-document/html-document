'use strict';

var _get = require('babel-runtime/helpers/get')['default'];

var _inherits = require('babel-runtime/helpers/inherits')['default'];

var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _HTMLElement2 = require('../../HTMLElement');

var _HTMLElement3 = _interopRequireDefault(_HTMLElement2);

var _DOMException = require('../../DOMException');

var _DOMException2 = _interopRequireDefault(_DOMException);

/**
 * &lt;table&gt; element.
 *
 * @see https://developer.mozilla.org/en/docs/Web/API/HTMLTableElement
 */
/** @class HTMLTableElement */
var HTMLTableElement = (function (_HTMLElement) {
    _inherits(HTMLTableElement, _HTMLElement);

    function HTMLTableElement() {
        _classCallCheck(this, HTMLTableElement);

        _get(Object.getPrototypeOf(HTMLTableElement.prototype), 'constructor', this).apply(this, arguments);
    }

    /**
     * @constant {string} HTMLTableElement#nodeName table
     */

    _createClass(HTMLTableElement, [{
        key: 'createTHead',

        /**
         * Returns an HTMLElement representing the first &lt;thead&gt; that is a child of the element.
         * If none is found, a new one is created and inserted in the tree immediately before the first element
         * that is neither a &lt;caption&gt;, nor a &lt;colgroup&gt;, or as the last child if there is no such element.
         *
         * @see https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableElement/createTHead
         * @return {HTMLElement}
         
        * @memberof HTMLTableElement 
        * @instance 
        * @method createTHead */
        value: function createTHead() {
            var tHead = this.tHead;

            if (tHead !== null) {
                return tHead;
            }

            tHead = this.ownerDocument.createElement('thead');
            this.tHead = tHead;
            return tHead;
        }

        /**
         * Removes the first &lt;thead&gt; that is a child of the element.
         *
         * @see https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableElement/deleteTHead
         
        * @memberof HTMLTableElement 
        * @instance 
        * @method deleteTHead */
    }, {
        key: 'deleteTHead',
        value: function deleteTHead() {
            var tHead = this.tHead;

            if (tHead !== null) {
                this.removeChild(tHead);
            }
        }

        /**
         * Returns an {@link HTMLElement} representing the first &lt;tfoot&gt; that is a child of the element.
         * If none is found, a new one is created and inserted in the tree immediately before the first element
         * that is neither a &lt;caption&gt;, a &lt;colgroup&gt;, nor a &lt;thead&gt;, or as the last child
         * if there is no such element.
         *
         * @see https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableElement/createTFoot
         * @return {HTMLElement}
         
        * @memberof HTMLTableElement 
        * @instance 
        * @method createTFoot */
    }, {
        key: 'createTFoot',
        value: function createTFoot() {
            var tFoot = this.tFoot;

            if (tFoot !== null) {
                return tFoot;
            }

            tFoot = this.ownerDocument.createElement('tfoot');
            this.tFoot = tFoot;
            return tFoot;
        }

        /**
         * Removes the first &lt;tfoot&gt; that is a child of the element.
         *
         * @see https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableElement/deleteTFoot
         
        * @memberof HTMLTableElement 
        * @instance 
        * @method deleteTFoot */
    }, {
        key: 'deleteTFoot',
        value: function deleteTFoot() {
            var tFoot = this.tFoot;

            if (tFoot !== null) {
                this.removeChild(tFoot);
            }
        }

        /**
         * Returns an {@link HTMLElement} representing the first &lt;caption&gt; that is a child of the element.
         * If none is found, a new one is created and inserted in the tree as the first child of the &lt;table&gt; element.
         *
         * @see https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableElement/createCaption
         * @return {HTMLElement}
         
        * @memberof HTMLTableElement 
        * @instance 
        * @method createCaption */
    }, {
        key: 'createCaption',
        value: function createCaption() {
            var caption = this.caption;

            if (caption !== null) {
                return caption;
            }

            caption = this.ownerDocument.createElement('caption');
            this.caption = caption;
            return caption;
        }

        /**
         * Removes the first &lt;caption&gt; that is a child of the element.
         *
         * @see https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableElement/deleteCaption
         
        * @memberof HTMLTableElement 
        * @instance 
        * @method deleteCaption */
    }, {
        key: 'deleteCaption',
        value: function deleteCaption() {
            var caption = this.caption;

            if (caption !== null) {
                this.removeChild(caption);
            }
        }

        /**
         * Method creates &lt;tbody&gt; element and puts it in particular place
         *
         * @private
         
        * @memberof HTMLTableElement 
        * @instance 
        * @method _createTBody */
    }, {
        key: '_createTBody',
        value: function _createTBody() {
            var tBody = this.ownerDocument.createElement('tbody');
            var tFoot = this.tFoot;

            if (tFoot) {
                this.insertBefore(tBody, tFoot);
            } else {
                this.appendChild(tBody);
            }

            return tBody;
        }

        /**
         * Returns an {@link HTMLElement} representing a new row of the table. It inserts it in the rows collection
         * immediately before the &lt;tr&gt; element at the given index position. If necessary a &lt;tbody&gt; is created.
         * If the index is -1, the new row is appended to the collection. If the index is smaller than -1 or greater than
         * the number of rows in the collection, a {@link DOMException} with the value IndexSizeError is raised.
          *
         * @param {number} [index=-1]
         * @return {HTMLElement}
         
        * @memberof HTMLTableElement 
        * @instance 
        * @method insertRow 
        * @param [index=undefined] */
    }, {
        key: 'insertRow',
        value: function insertRow() {
            var index = arguments.length <= 0 || arguments[0] === undefined ? -1 : arguments[0];

            var row = this.ownerDocument.createElement('tr');
            var tBody = null;
            var tBodies = this.tBodies;

            if (tBodies.length === 0) {
                tBody = this._createTBody();
            } else {
                tBody = tBodies[tBodies.length - 1];
            }

            if (index === -1 || index === tBody.length) {
                tBody.appendChild(row);
            } else if (index < tBody.length - 1) {
                tBody.insertBefore(row, tBody.children[index]);
            } else {
                throw new _DOMException2['default']('IndexSizeError');
            }

            return row;
        }

        /**
         * @inheritdoc
         
        * @memberof HTMLTableElement 
        * @instance 
        * @method appendChild 
        * @param element */
    }, {
        key: 'appendChild',
        value: function appendChild(element) {
            if (element.tagName === 'tr') {
                var tBodies = this.tBodies;
                var tBody = null;
                if (tBodies.length === 0) {
                    tBody = this._createTBody();
                } else {
                    tBody = tBodies[tBodies.length - 1];
                }

                return tBody.appendChild(element);
            }

            return _get(Object.getPrototypeOf(HTMLTableElement.prototype), 'appendChild', this).call(this, element);
        }
    }, {
        key: 'caption',

        /**
         * Is an {@link HTMLTableCaptionElement} representing the first &lt;caption&gt; that is a child of the element,
         * or null if none is found.
         * When set, if the object doesn't represent a &lt;caption&gt;,
         * a {@link DOMException} with the HierarchyRequestError name is thrown.
         * If a correct object is given, it is inserted in the tree as the first child of this element
         * and the first &lt;caption&gt; that is a child of this element is removed from the tree, if any.
         *
         * @type {HTMLTableCaptionElement|null}
         
        * @memberof HTMLTableElement 
        * @instance 
        * @member caption */
        get: function get() {
            return this._childNodeFind(function (child) {
                return child.tagName === 'caption';
            });
        },

        /**
         * @param {HTMLTableCaptionElement|null} element
         * @ignore
         
        * @memberof HTMLTableElement 
        * @instance 
        * @param element */
        set: function set(element) {
            if (element.tagName !== 'caption') {
                throw new _DOMException2['default']('HierarchyRequestError');
            }

            var previousCaption = this.caption;
            if (previousCaption) {
                this.removeChild(previousCaption);
            }

            if (this.firstChild) {
                this.insertBefore(element, this.firstChild);
            } else {
                this.appendChild(element);
            }
        }

        /**
         * Is an {@link HTMLTableSectionElement} representing the first &lt;thead&gt; that is a child of the element,
         * or null if none is found.
         * When set, if the object doesn't represent a &lt;thead&gt;,
         * a {@link DOMException} with the HierarchyRequestError name is thrown.
         * If a correct object is given, it is inserted in the tree immediately before the first element
         * that is neither a &lt;caption&gt;, nor a &lt;colgroup&gt;, or as the last child if there is no such element,
         * and the first &lt;thead&gt; that is a child of this element is removed from the tree, if any.
         *
         * @type {HTMLTableSectionElement|null}
         
        * @memberof HTMLTableElement 
        * @instance 
        * @member tHead */
    }, {
        key: 'tHead',
        get: function get() {
            return this._childNodeFind(function (child) {
                return child.tagName === 'thead';
            });
        },

        /**
         * @ignore
         * @param {HTMLTableSectionElement|null} element
         
        * @memberof HTMLTableElement 
        * @instance 
        * @param element */
        set: function set(element) {
            var _this = this;

            if (element.tagName !== 'thead') {
                throw new _DOMException2['default']('HierarchyRequestError');
            }

            var previousTHead = this.tHead;
            if (previousTHead) {
                this.removeChild(previousTHead);
            }

            if (!this.children.some(function (child) {
                if (child.tagName !== 'caption' && child.tagName !== 'colgroup') {
                    _this.insertBefore(element, child);
                    return true;
                }

                return false;
            })) {
                this.appendChild(element);
            }
        }

        /**
         * Is an {@link HTMLTableSectionElement} representing the first &lt;tfoot&gt; that is a child of the element,
         * or null if none is found.
         * When set, if the object doesn't represent a &lt;tfoot&gt;,
         * a {@link DOMException} with the HierarchyRequestError name is thrown.
         * If a correct object is given, it is inserted in the tree immediately before the first element
         * that is neither a &lt;caption&gt;, a &lt;colgroup&gt;, nor a &lt;thead&gt;, or as the last child
         * if there is no such element, and the first &lt;tfoot&gt; that is a child of this element is removed
         * from the tree, if any.
         *
         * @type {HTMLElement|null}
         
        * @memberof HTMLTableElement 
        * @instance 
        * @member tFoot */
    }, {
        key: 'tFoot',
        get: function get() {
            return this._childNodeFind(function (child) {
                return child.tagName === 'tfoot';
            });
        },

        /**
         * @ignore
         * @param {HTMLElement|null} element
         
        * @memberof HTMLTableElement 
        * @instance 
        * @param element */
        set: function set(element) {
            var _this2 = this;

            if (element.tagName !== 'tfoot') {
                throw new _DOMException2['default']('HierarchyRequestError');
            }

            var previousTFoot = this.tFoot;
            if (previousTFoot) {
                this.removeChild(previousTFoot);
            }

            if (!this.children.some(function (child) {
                if (child.tagName !== 'caption' && child.tagName !== 'colgroup' && child.tagName !== 'thead') {
                    _this2.insertBefore(element, child);
                    return true;
                }

                return false;
            })) {
                this.appendChild(element);
            }
        }

        /**
         * Returns a live {@link HTMLCollection} containing all the rows of the element,
         * that is all &lt;tr&gt; that are a child of the element,
         * or a child or one of its &lt;thead&gt;, &lt;tbody&gt; and &lt;tfoot&gt; children.
         * The rows members of a &lt;thead&gt; appear first, in tree order, and those members of a &lt;tbody&gt; last,
         * also in tree order. The HTMLCollection is live and is automatically updated when the HTMLTableElement changes.
         *
         * @type {HTMLElement[]}
         * @readonly
         
        * @memberof HTMLTableElement 
        * @instance 
        * @member rows */
    }, {
        key: 'rows',
        get: function get() {
            var result = [];
            if (this.tHead !== null) {
                this.tHead.children.forEach(function (element) {
                    if (element.tagName === 'tr') {
                        result.push(element);
                    }
                });
            }

            var tBodies = this.tBodies;
            if (tBodies.length !== 0) {
                tBodies.forEach(function (body) {
                    body.children.forEach(function (element) {
                        if (element.tagName === 'tr') {
                            result.push(element);
                        }
                    });
                });
            }

            if (this.tFoot !== null) {
                this.tFoot.children.forEach(function (element) {
                    if (element.tagName === 'tr') {
                        result.push(element);
                    }
                });
            }

            return result;
        }

        /**
         * Returns a live HTMLCollection containing all the &lt;tbody&gt; of the element. The HTMLCollection is live
         * and is automatically updated when the HTMLTableElement changes.
         *
         * @type {HTMLElement[]}
         * @readonly
         
        * @memberof HTMLTableElement 
        * @instance 
        * @member tBodies */
    }, {
        key: 'tBodies',
        get: function get() {
            return this.children.filter(function (element) {
                return element.tagName === 'tbody';
            });
        }
    }]);

    return HTMLTableElement;
})(_HTMLElement3['default']);

exports['default'] = HTMLTableElement;
Object.defineProperty(HTMLTableElement.prototype, 'nodeName', { value: 'table' });
module.exports = exports['default'];
//# sourceMappingURL=HTMLTableElement.js.map