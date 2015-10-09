import HTMLElement from '../../HTMLElement';
import DOMException from '../../DOMException';

/**
 * The HTMLTable interface represents table
 * and inherits all classes and methods of the HTMLElement interface.
 *
 * @see https://developer.mozilla.org/en/docs/Web/API/HTMLTableElement
 */
export default class HTMLTableElement extends HTMLElement {
    /**
     * Caption of element, HTMLElement &lt;caption&gt;
     *
     * @type {HTMLElement|null}
     */
    get caption() {
        return this.querySelector('caption');
    }

    /**
     * Sets caption of element
     *
     * @param {HTMLElement|null} element - element with tagName caption
     * @ignore
     */
    set caption(element) {
        if (element.tagName !== 'caption') {
            throw new DOMException('HierarchyRequestError');
        }

        let caption = this.caption;
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
     */
    get tHead() {
        return this._childNodeFind(child => child.tagName === 'thead');
    }

    /**
     * @ignore
     * @param {HTMLElement|null} element
     */
    set tHead(element) {
        if (element.tagName !== 'thead') {
            throw new DOMException('HierarchyRequestError');
        }

        let tHead = this.tHead;

        if (tHead !== null) {
            this.replaceChild(element, tHead);
        } else {
            if (this.children.every((child) => {
                if (child.tagName !== 'caption' && child.tagName !== 'colgroup') {
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
     * tFoot element if any
     *
     * @type {HTMLElement|null}
     */
    get tFoot() {
        return this._childNodeFind(child => child.tagName === 'tfoot');
    }

    /**
     * @ignore
     * @param {HTMLElement|null} element
     */
    set tFoot(element) {
        if (element.tagName !== 'tfoot') {
            throw new DOMException('HierarchyRequestError');
        }

        let tfoot = this.tFoot;
        if (tfoot !== null) {
            this.replaceChild(element, tfoot);
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
     * All tr elements from table
     *
     * @type {HTMLElement[]}
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

        const tBodies = this.tBodies;
        if (tBodies.length !== 0) {
            tBodies.forEach((body) => {
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
     *
     * @type {HTMLElement[]}
     * @readonly
     */
    get tBodies() {
        return this.children.filter(element => element.tagName === 'tbody');
    }

    /**
     * Method creates &lt;thead&gt; element for table and adds it in particular place
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableElement/createTHead
     * @return {HTMLElement}
     */
    createTHead() {
        let tHead = this.tHead;
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
     */
    deleteTHead() {
        let thead = this.tHead;
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
     */
    createCaption() {
        let caption = this.caption;

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
     */
    deleteCaption() {
        let caption = this.caption;

        if (caption !== null) {
            this.removeChild(caption);
        }
    }

    /**
     * Method adds &lt;tfoot&gt; element to table
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableElement/createTFoot
     * @return {HTMLElement}
     */
    createTFoot() {
        let tfoot = this.tFoot;

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
     */
    deleteTFoot() {
        let tfoot = this.tFoot;
        if (tfoot !== null) {
            this.removeChild(tfoot);
        }
    }

    /**
     * Method creates &lt;tbody&gt; element and puts it in particular place
     *
     * @private
     */
    _createTBody() {
        let tbody = this.ownerDocument.createElement('tbody');
        let tfoot = this.tFoot;
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
     */
    insertRow(index = -1) {
        let row = this.ownerDocument.createElement('tr');
        let tbody = null;
        let tbodies = this.tBodies;

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
 * @constant {string} HTMLTableElement#nodeName table
 */
Object.defineProperty(HTMLTableElement.prototype, 'nodeName', { value: 'table' });
