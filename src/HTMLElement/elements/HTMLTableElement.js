import HTMLElement from '../../HTMLElement';

/**
 * The HTMLTable interface represents table
 * and inherits all classes and methods of the HTMLElement interface.
 *
 * @see https://developer.mozilla.org/en/docs/Web/API/HTMLTableElement
 * @class HTMLTableElement
 */
export default class HTMLTableElement extends HTMLElement {
    constructor() {
        super();
    }

    /**
     * Caption of element, returns HTMLElement <caption>
     * @member {HTMLElement} HTMLTableElement#caption
     * @return {HTMLElement}
     */
    get caption() {
        return this.querySelector('caption');
    }

    /**
     * Sets caption of element
     * @param {HTMLElement} element element with tagName caption
     * @member {HTMLElement} HTMLTableElement#caption
     */
    set caption(element) {
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
     */
    get tHead() {
        return this.querySelector('thead');
    }

    /**
     * @ignore
     * @param {HTMLElement} element
     */
    set tHead(element) {
        if (element.tagName !== 'thead') {
            throw new DOMException('HierarchyRequestError');
        }

        let thead = this.querySelector('thead');
        if (thead !== null) {
            this.insertBefore(element, thead);
            this.removeChild(thead);
        } else {
            if (this.children.every((child) => {
                if (child.tagName !== 'caption' && child.tagName !== 'colgroup') {
                    this.insertBefore(element, child);
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
     */
    get tFoot() {
        return this.querySelector('tfoot');
    }

    /**
     * @ignore
     * @param {HTMLElement} element
     */
    set tFoot(element) {
        if (element.tagName !== 'tfoot') {
            throw new DOMException('HierarchyRequestError');
        }

        let tfoot = this.querySelector('tfoot');
        if (tfoot !== null) {
            this.insertBefore(element, thead);
            this.removeChild(thead);
        } else {
            if (this.children.every((child) => {
                if (child.tagName !== 'caption' && child.tagName !== 'colgroup' && child !== 'thead') {
                    this.insertBefore(element, child);
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
     */
    get rows() {
        let result = [];
        if (this.tHead !== null) {
            this.tHead.children.forEach((element) => {
                if (element.tagName === 'tr') {
                    result.push(element);
                }
            });
        }

        if (this.tBodies.length > 0) {
            this.tBodies.forEach((body) => {
                body.children.forEach((element) => {
                    if (element.tagName === 'tr') {
                        result.push(element);
                    }
                });
            });
        }

        if (this.tFoot !== null) {
            this.tFoot.children.forEach((element) => {
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
     */
    get tBodies() {
        return this.children.filter((element) => element.tagName === 'tbody');
    }

    /**
     * Method creates <thead> element for table and adds it in particular place
     * @see https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableElement/createTHead
     * @returns {HTMLElement}
     */
    createTHead() {
        let thead = this.tHead;
        if (thead !== null) {
            return thead;
        }

        thead = new HTMLElement();
        thead.nodeName = 'thead';
        thead._ownerDocument = this.ownerDocument;
        this.tHead = thead;
        return thead;
    }

    /**
     * Method deletes first <thead> element found in table (if any)
     * @see https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableElement/deleteTHead
     */
    deleteTHead() {
        let thead = this.tHead;
        if (thead !== null) {
            this.removeChild(thead);
        }
    }

    /**
     * Method addes <caption> element to table
     * @see https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableElement/createCaption
     * @returns {HTMLElement}
     */
    createCaption() {
        let caption = this.caption;
        if (caption !== null) {
            return caption;
        }

        caption = new HTMLElement();
        caption.nodeName = 'caption';
        caption._ownerDocument = this.ownerDocument;
        this.caption = caption;
        return caption;
    }

    /**
     * Method deletes first found <caption> element if any
     * @see https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableElement/deleteCaption
     */
    deleteCaption() {
        let caption = this.caption;
        if (caption !== null) {
            this.removeChild(caption);
        }
    }

    /**
     * Method adds <tfoot> element to table
     * @see https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableElement/createTFoot
     * @returns {HTMLElement}
     */
    createTFoot() {
        let tfoot = this.tFoot;
        if (tfoot !== null) {
            return tfoot;
        }

        tfoot = new HTMLElement();
        tfoot.nodeName = 'tfoot';
        tfoot._ownerDocument = this.ownerDocument;
        this.tFoot = tfoot;
        return tfoot;
    }

    /**
     * Method deletes first found <tfoot> element from table
     * @see https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableElement/deleteTFoot
     */
    deleteTFoot() {
        let tfoot = this.tFoot;
        if (tfoot !== null) {
            this.removeChild(tfoot);
        }
    }

    /**
     * Method creates <tbody> element and puts it in particular place
     * @private
     */
    _createTBody() {
        let tbody = new HTMLElement();
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
     */
    insertRow(index = -1) {
        let row = new HTMLElement();
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
     */
    appendChild(element) {
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

        return super.appendChild(element);
    }
}

/**
 * @constant {string} HTMLTableElement#nodeName option
 */
Object.defineProperty(HTMLTableElement.prototype, 'nodeName', { value: 'table' });
