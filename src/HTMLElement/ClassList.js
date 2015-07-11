// TODO : DOMTokenList, unit tests

/**
 * @see https://developer.mozilla.org/fr/docs/Web/API/Element/classList
 * @class ClassList
 * @param {HTMLElement} element
 */
export default class ClassList {
    /**
     * @param {HTMLElement} element
     */
    constructor(element) {
        this._element = element;
        this.tokens = [];
    }

    /**
     * @member {Number} ClassList#length
     * @readonly
     */
    get length() {
        return this.tokens.length;
    }

    /**
     *
     */
    _parse(tokens) {
        this.tokens = tokens.split(' ');
    }

    /**
     *
     */
    _stringify() {
        this._element._setAttribute('class', this.tokens.join(' '));
    }

    /**
     * Adds a class to an element's list of classes
     *
     * @method ClassList#add
     * @param {...string} className
     *
     */
    add() {
        let updated = false;
        Array.prototype.forEach.call(arguments, (token) => {
            token = String(token);
            if (this.tokens.indexOf(token) === -1) {
                this.tokens.push(token);
                updated = true;
            }
        });
        if (updated) {
            this._stringify();
        }
    }

    /**
     * Removes a class from an element's list of classes
     *
     * @method ClassList#remove
     * @param {...string} token
     */
    remove() {
        let updated = false;
        Array.prototype.forEach.call(arguments, (token) => {
            const index = this.tokens.indexOf(token);
            if (index !== -1) {
                this.tokens.splice(index, 1);
                updated = true;
            }
        });
        if (updated) {
            this._stringify();
        }
    }

    /**
     * Toggles the existence of a class in an element's list of classes
     *
     * @method ClassList#toggle
     * @param {String} token
     * @param {Boolean} force
     * @return {Boolean} if the token was added
     *
     */
    toggle(token, force) {
        const result = this.contains(token);
        const method = result ? force !== true && 'remove'
                        : force !== false && 'add';

        if (method) {
            this[method](token);
        }

        return !result;
    }

    /**
     * Checks if an element's list of classes contains a specific class
     *
     * @method ClassList#contains
     * @param {String} token
     * @return {Boolean} if the token is present
     */
    contains(token) {
        return this.tokens.indexOf(token) !== -1;
    }
}
