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
 * The HTMLTable interface represents table
 * and inherits all classes and methods of the HTMLElement interface.
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
         * Method creates &lt;thead&gt; element for table and adds it in particular place
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
         * Method deletes first &lt;thead&gt; element found in table (if any)
         *
         * @see https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableElement/deleteTHead
         
        * @memberof HTMLTableElement 
        * @instance 
        * @method deleteTHead */
    }, {
        key: 'deleteTHead',
        value: function deleteTHead() {
            var thead = this.tHead;
            if (thead !== null) {
                this.removeChild(thead);
            }
        }

        /**
         * The HTMLTableElement.createCaption() method returns the caption for the table.
         * If no caption element exists on the table, this method creates it, then returns it.
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
         * Method deletes first found &lt;caption&gt; element if any
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
         * Method adds &lt;tfoot&gt; element to table
         *
         * @see https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableElement/createTFoot
         * @return {HTMLElement}
         
        * @memberof HTMLTableElement 
        * @instance 
        * @method createTFoot */
    }, {
        key: 'createTFoot',
        value: function createTFoot() {
            var tfoot = this.tFoot;

            if (tfoot !== null) {
                return tfoot;
            }

            tfoot = this.ownerDocument.createElement('tfoot');
            this.tFoot = tfoot;
            return tfoot;
        }

        /**
         * Method deletes first found &lt;tfoot&gt; element from table
         *
         * @see https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableElement/deleteTFoot
         
        * @memberof HTMLTableElement 
        * @instance 
        * @method deleteTFoot */
    }, {
        key: 'deleteTFoot',
        value: function deleteTFoot() {
            var tfoot = this.tFoot;
            if (tfoot !== null) {
                this.removeChild(tfoot);
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
            var tbody = this.ownerDocument.createElement('tbody');
            var tfoot = this.tFoot;
            if (tfoot) {
                this.insertBefore(tbody, tfoot);
            } else {
                this.appendChild(tbody);
            }

            return tbody;
        }

        /**
         * Method creates new &lt;tr&gt; element and adds it to table. If no &lt;tbody&gt; present in table
         * creates it and adds &lt;tr&gt; to it, elsewhere adds row to last &lt;tbody&gt; element
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
            var tbody = null;
            var tbodies = this.tBodies;

            if (tbodies.length === 0) {
                tbody = this._createTBody();
            } else {
                tbody = tbodies[tbodies.length - 1];
            }

            if (index === -1 || index === tbody.length) {
                tbody.appendChild(row);
            } else if (index < tbody.length - 1) {
                tbody.insertBefore(row, tbody.children[index]);
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
                var tbodies = this.tBodies;
                var tbody = null;
                if (tbodies.length === 0) {
                    tbody = this._createTBody();
                } else {
                    tbody = tbodies[tbodies.length - 1];
                }

                return tbody.appendChild(element);
            }

            return _get(Object.getPrototypeOf(HTMLTableElement.prototype), 'appendChild', this).call(this, element);
        }
    }, {
        key: 'caption',

        /**
         * Caption of element, HTMLElement &lt;caption&gt;
         *
         * @type {HTMLElement|null}
         
        * @memberof HTMLTableElement 
        * @instance 
        * @member caption */
        get: function get() {
            return this.querySelector('caption');
        },

        /**
         * Sets caption of element
         *
         * @param {HTMLElement|null} element - element with tagName caption
         * @ignore
         
        * @memberof HTMLTableElement 
        * @instance 
        * @param element */
        set: function set(element) {
            if (element.tagName !== 'caption') {
                throw new _DOMException2['default']('HierarchyRequestError');
            }

            var caption = this.caption;
            if (caption !== null) {
                this.replaceChild(element, caption);
            } else {
                if (this.firstChild) {
                    this.insertBefore(element, this.firstChild);
                } else {
                    this.appendChild(element);
                }
            }
        }

        /**
         * Table head
         *
         * @type {HTMLElement|null}
         
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
         * @param {HTMLElement|null} element
         
        * @memberof HTMLTableElement 
        * @instance 
        * @param element */
        set: function set(element) {
            var _this = this;

            if (element.tagName !== 'thead') {
                throw new _DOMException2['default']('HierarchyRequestError');
            }

            var tHead = this.tHead;

            if (tHead !== null) {
                this.replaceChild(element, tHead);
            } else {
                if (this.children.every(function (child) {
                    if (child.tagName !== 'caption' && child.tagName !== 'colgroup') {
                        _this.insertBefore(element, child);
                        return false;
                    }

                    return true;
                })) {
                    this.appendChild(element);
                }
            }
        }

        /**
         * tFoot element if any
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

            var tfoot = this.tFoot;
            if (tfoot !== null) {
                this.replaceChild(element, tfoot);
            } else {
                if (this.children.every(function (child) {
                    if (child.tagName !== 'caption' && child.tagName !== 'colgroup' && child !== 'thead') {
                        _this2.insertBefore(element, child);
                        return false;
                    }

                    return true;
                })) {
                    this.appendChild(element);
                }
            }
        }

        /**
         * All tr elements from table
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
         * Returns all tbody elements from table
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