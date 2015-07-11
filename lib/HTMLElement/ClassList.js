// TODO : DOMTokenList, unit tests

/**
 * @see https://developer.mozilla.org/fr/docs/Web/API/Element/classList
 * @class ClassList
 * @param {HTMLElement} element
 */
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var ClassList = (function () {
    /**
     * @param {HTMLElement} element
     */

    function ClassList(element) {
        _classCallCheck(this, ClassList);

        this._element = element;
        this.tokens = [];
    }

    _createClass(ClassList, [{
        key: '_parse',

        /**
         *
         */
        value: function _parse(tokens) {
            this.tokens = tokens.split(' ');
        }
    }, {
        key: '_stringify',

        /**
         *
         */
        value: function _stringify() {
            this._element._setAttribute('class', this.tokens.join(' '));
        }
    }, {
        key: 'add',

        /**
         * Adds a class to an element's list of classes
         *
         * @method ClassList#add
         * @param {...string} className
         *
         */
        value: function add() {
            var _this = this;

            var updated = false;
            Array.prototype.forEach.call(arguments, function (token) {
                token = String(token);
                if (_this.tokens.indexOf(token) === -1) {
                    _this.tokens.push(token);
                    updated = true;
                }
            });
            if (updated) {
                this._stringify();
            }
        }
    }, {
        key: 'remove',

        /**
         * Removes a class from an element's list of classes
         *
         * @method ClassList#remove
         * @param {...string} token
         */
        value: function remove() {
            var _this2 = this;

            var updated = false;
            Array.prototype.forEach.call(arguments, function (token) {
                var index = _this2.tokens.indexOf(token);
                if (index !== -1) {
                    _this2.tokens.splice(index, 1);
                    updated = true;
                }
            });
            if (updated) {
                this._stringify();
            }
        }
    }, {
        key: 'toggle',

        /**
         * Toggles the existence of a class in an element's list of classes
         *
         * @method ClassList#toggle
         * @param {String} token
         * @param {Boolean} force
         * @return {Boolean} if the token was added
         *
         */
        value: function toggle(token, force) {
            var result = this.contains(token);
            var method = result ? force !== true && 'remove' : force !== false && 'add';

            if (method) {
                this[method](token);
            }

            return !result;
        }
    }, {
        key: 'contains',

        /**
         * Checks if an element's list of classes contains a specific class
         *
         * @method ClassList#contains
         * @param {String} token
         * @return {Boolean} if the token is present
         */
        value: function contains(token) {
            return this.tokens.indexOf(token) !== -1;
        }
    }, {
        key: 'length',

        /**
         * @member {Number} ClassList#length
         * @readonly
         */
        get: function get() {
            return this.tokens.length;
        }
    }]);

    return ClassList;
})();

exports['default'] = ClassList;
module.exports = exports['default'];
//# sourceMappingURL=ClassList.js.map