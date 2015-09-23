'use strict';

var _get = require('babel-runtime/helpers/get').default;

var _inherits = require('babel-runtime/helpers/inherits').default;

var _createClass = require('babel-runtime/helpers/create-class').default;

var _classCallCheck = require('babel-runtime/helpers/class-call-check').default;

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default').default;

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _HTMLElement2 = require('../../HTMLElement');

var _HTMLElement3 = _interopRequireDefault(_HTMLElement2);

/**
 * The HTMLTable interface represents table
 * and inherits all classes and methods of the HTMLElement interface.
 *
 * @see https://developer.mozilla.org/en/docs/Web/API/HTMLTableElement
 * @class HTMLTableElement
 */
/** @class HTMLTableElement */
let HTMLTableElement = (function (_HTMLElement) {
    _inherits(HTMLTableElement, _HTMLElement);

    function HTMLTableElement() {
        _classCallCheck(this, HTMLTableElement);

        _get(Object.getPrototypeOf(HTMLTableElement.prototype), 'constructor', this).call(this);
    }

    /**
     * @constant {string} HTMLTableElement#nodeName option
     */

    /**
     * Caption of element, returns HTMLElement &lt;caption&gt;
     * @member {HTMLElement} HTMLTableElement#caption
     * @return {HTMLElement}
     
    * @memberof HTMLTableElement 
    * @instance */

    _createClass(HTMLTableElement, [{
        key: 'createTHead',

        /**
         * Method creates <thead> element for table and adds it in particular place
         * @see https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableElement/createTHead
         * @returns {HTMLElement}
         
        * @memberof HTMLTableElement 
        * @instance 
        * @method createTHead */
        value: function createTHead() {
            let thead = this.tHead;
            if (thead !== null) {
                return thead;
            }

            thead = new _HTMLElement3.default();
            thead.nodeName = 'thead';
            thead._ownerDocument = this.ownerDocument;
            this.tHead = thead;
            return thead;
        }

        /**
         * Method deletes first <thead> element found in table (if any)
         * @see https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableElement/deleteTHead
         
        * @memberof HTMLTableElement 
        * @instance 
        * @method deleteTHead */
    }, {
        key: 'deleteTHead',
        value: function deleteTHead() {
            let thead = this.tHead;
            if (thead !== null) {
                this.removeChild(thead);
            }
        }

        /**
         * Method addes <caption> element to table
         * @see https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableElement/createCaption
         * @returns {HTMLElement}
         
        * @memberof HTMLTableElement 
        * @instance 
        * @method createCaption */
    }, {
        key: 'createCaption',
        value: function createCaption() {
            let caption = this.caption;
            if (caption !== null) {
                return caption;
            }

            caption = new _HTMLElement3.default();
            caption.nodeName = 'caption';
            caption._ownerDocument = this.ownerDocument;
            this.caption = caption;
            return caption;
        }

        /**
         * Method deletes first found <caption> element if any
         * @see https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableElement/deleteCaption
         
        * @memberof HTMLTableElement 
        * @instance 
        * @method deleteCaption */
    }, {
        key: 'deleteCaption',
        value: function deleteCaption() {
            let caption = this.caption;
            if (caption !== null) {
                this.removeChild(caption);
            }
        }

        /**
         * Method adds <tfoot> element to table
         * @see https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableElement/createTFoot
         * @returns {HTMLElement}
         
        * @memberof HTMLTableElement 
        * @instance 
        * @method createTFoot */
    }, {
        key: 'createTFoot',
        value: function createTFoot() {
            let tfoot = this.tFoot;
            if (tfoot !== null) {
                return tfoot;
            }

            tfoot = new _HTMLElement3.default();
            tfoot.nodeName = 'tfoot';
            tfoot._ownerDocument = this.ownerDocument;
            this.tFoot = tfoot;
            return tfoot;
        }

        /**
         * Method deletes first found <tfoot> element from table
         * @see https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableElement/deleteTFoot
         
        * @memberof HTMLTableElement 
        * @instance 
        * @method deleteTFoot */
    }, {
        key: 'deleteTFoot',
        value: function deleteTFoot() {
            let tfoot = this.tFoot;
            if (tfoot !== null) {
                this.removeChild(tfoot);
            }
        }

        /**
         * Method creates <tbody> element and puts it in particular place
         * @private
         
        * @memberof HTMLTableElement 
        * @instance 
        * @method _createTBody */
    }, {
        key: '_createTBody',
        value: function _createTBody() {
            let tbody = new _HTMLElement3.default();
            tbody.nodeName = 'tbody';
            tbody._ownerDocument = this.ownerDocument;
            let tfoot = this.tFoot;
            if (tfoot) {
                this.insertBefore(tbody, tfoot);
            } else {
                this.appendChild(tbody);
            }

            return tbody;
        }

        /**
         * Method creates new <tr> element and adds it to table. If no <tbody> present in table
         * creates it and adds <tr> to it, elsewhere adds row to last <tbody> element
         * @param index
         * @return {HTMLElement}
         
        * @memberof HTMLTableElement 
        * @instance 
        * @method insertRow 
        * @param [index=undefined] */
    }, {
        key: 'insertRow',
        value: function insertRow() {
            let index = arguments.length <= 0 || arguments[0] === undefined ? -1 : arguments[0];

            let row = new _HTMLElement3.default();
            let tbody = null;
            let tbodies = this.tBodies;
            row.nodeName = 'tr';
            row._ownerDocument = this.ownerDocument;
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
                throw new DOMException('IndexSizeError');
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
                let tbodies = this.tBodies;
                let tbody = null;
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
        get: function get() {
            return this.querySelector('caption');
        },

        /**
         * Sets caption of element
         * @param {HTMLElement} element - element with tagName caption
         
        * @memberof HTMLTableElement 
        * @instance 
        * @param element */
        set: function set(element) {
            if (element.tagName !== 'caption') {
                throw new DOMException('HierarchyRequestError');
            }

            let caption = this.querySelector('caption');
            if (caption !== null) {
                this.insertBefore(element, caption);
                this.removeChild(caption);
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
         * @member {HTMLElement} HTMLTableElement#tHead
         * @return {HTMLElement}
         
        * @memberof HTMLTableElement 
        * @instance */
    }, {
        key: 'tHead',
        get: function get() {
            return this.querySelector('thead');
        },

        /**
         * @ignore
         * @param {HTMLElement} element
         
        * @memberof HTMLTableElement 
        * @instance 
        * @param element */
        set: function set(element) {
            var _this = this;

            if (element.tagName !== 'thead') {
                throw new DOMException('HierarchyRequestError');
            }

            let thead = this.querySelector('thead');
            if (thead !== null) {
                this.insertBefore(element, thead);
                this.removeChild(thead);
            } else {
                if (this.children.every(function (child) {
                    if (child.tagName !== 'caption' && child.tagName !== 'colgroup') {
                        _this.insertBefore(element, child);
                        return false;
                    }

                    return true;
                })) {
                    if (this.firstChild) {
                        this.insertBefore(element, this.firstChild);
                    } else {
                        this.appendChild(element);
                    }
                }
            }
        }

        /**
         * Returns tFoot element if any
         * @member {HTMLElement} HTMLTableElement#tFoot
         * @return {HTMLElement}
         
        * @memberof HTMLTableElement 
        * @instance */
    }, {
        key: 'tFoot',
        get: function get() {
            return this.querySelector('tfoot');
        },

        /**
         * @ignore
         * @param {HTMLElement} element
         
        * @memberof HTMLTableElement 
        * @instance 
        * @param element */
        set: function set(element) {
            var _this2 = this;

            if (element.tagName !== 'tfoot') {
                throw new DOMException('HierarchyRequestError');
            }

            let tfoot = this.querySelector('tfoot');
            if (tfoot !== null) {
                this.insertBefore(element, thead);
                this.removeChild(thead);
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
         * Returns all tr elements from table
         * @member {HTMLElement} HTMLTableElement#rows
         * @readonly
         
        * @memberof HTMLTableElement 
        * @instance */
    }, {
        key: 'rows',
        get: function get() {
            let result = [];
            if (this.tHead !== null) {
                this.tHead.children.forEach(function (element) {
                    if (element.tagName === 'tr') {
                        result.push(element);
                    }
                });
            }

            if (this.tBodies.length > 0) {
                this.tBodies.forEach(function (body) {
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
         * @member {HTMLElement[]} HTMLTableElement#tBodies
         * @readonly
         
        * @memberof HTMLTableElement 
        * @instance */
    }, {
        key: 'tBodies',
        get: function get() {
            return this.children.filter(function (element) {
                return element.tagName === 'tbody';
            });
        }
    }]);

    return HTMLTableElement;
})(_HTMLElement3.default);

exports.default = HTMLTableElement;
Object.defineProperty(HTMLTableElement.prototype, 'nodeName', { value: 'table' });
module.exports = exports.default;
//# sourceMappingURL=HTMLTableElement.js.map