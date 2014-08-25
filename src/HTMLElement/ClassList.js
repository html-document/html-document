// TODO : DOMTokenList, unit tests

export class ClassList {
    /**
     * @param {HTMLElement} element
     */
    constructor(element) {
        this._element = element;
        this.tokens = [];
    }

    /**
     * @return {Number}
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
     * @param {String...} className
     *
     */
    add() {
        var updated = false;
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
     * @param {String...} token
     */
    remove() {
        var updated = false;
        Array.prototype.forEach.call(arguments, (token) => {
            var index = this.tokens.indexOf(token);
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
     * @param {String} token
     * @param {Boolean} force
     * @return {Boolean} if the token was added
     *
     */
    toggle(token, force) {
        var result = this.contains(token);
        var method = result ? force !== true && 'remove'
                        : force !== false && 'add';

        if (method) {
            this[method](token);
        }
        return !result;
    }


    /**
     * Checks if an element's list of classes contains a specific class
     *
     * @param {String} token
     * @return {Boolean} if the token is present
     */
    contains(token) {
        return this.tokens.indexOf(token) !== -1;
    }
}