'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var CSSStyleRule = function CSSStyleRule(propertyName /*: string*/, value /*: string*/, important /*: boolean*/) {
    _classCallCheck(this, CSSStyleRule);

    this.name = propertyName;
    this.value = value;
    this.important = important;
};

/**
 * CSSStyleDeclaration represents a collection of CSS property-value pairs. It is used in a few APIs
 *
 * - HTMLElement.style - to manipulate the style of a single element (<elem style="...">);
 * - (TODO: reword) is an interface to the declaration block returned by the style
 * property of a cssRule in a stylesheet, when the rule is a CSSStyleRule.
 * - CSSStyleDeclaration is also a read-only interface to the result of window.getComputedStyle().
 */

var AbstractCSSStyleDeclaration = (function () {
    function AbstractCSSStyleDeclaration() {
        _classCallCheck(this, AbstractCSSStyleDeclaration);
    }

    _createClass(AbstractCSSStyleDeclaration, [{
        key: '_parse',

        /**
         * Parse style
         *
         * @internal
         * @param {String} style
         */
        value: function _parse(style) {
            var _this = this;

            this._properties = [];
            this._propertiesMap = {};
            style.split(';').forEach(function (part) {
                part = part.trim();
                if (!part) {
                    return;
                }

                var important = !!part.match(/!important$/);
                if (important) {
                    part = part.slice(0, -'!important'.length);
                }

                var splitPoint = part.indexOf(':');
                if (splitPoint) {
                    var key = part.slice(0, splitPoint).trim();
                    var value = part.slice(splitPoint + 1).trim();
                    _this._setProperty(key, value, important && 'important');
                }
            });
            this._stringify();
        }
    }, {
        key: '_stringify',

        /**
         * Parse style
         *
         * @internal
         */
        value: function _stringify() {
            var stylified = '';
            this._properties.forEach(function (s) {
                stylified += s.name + ':' + s.value + (s.important && '!important' || '') + ';';
            });
            this._value = stylified;
        }
    }, {
        key: 'getPropertyPriority',

        /**
         * Returns the optional priority, "important". Example: priString= styleObj.getPropertyPriority('color')
         *
         * @param {String} propertyName
         * @param {String|undefined|false} important
         */
        value: function getPropertyPriority(propertyName) {
            return this._propertiesMap[propertyName] && this._propertiesMap[propertyName].important && 'important';
        }
    }, {
        key: 'getPropertyValue',

        /**
         * Returns the optional priority, "important". Example: priString= styleObj.getPropertyPriority('color')
         *
         * @param {String} propertyName
         * @return {*} propertyValue
         */
        value: function getPropertyValue(propertyName) {
            return this._propertiesMap[propertyName] && this._propertiesMap[propertyName].value;
        }
    }, {
        key: 'item',

        /**
         * Returns a property name. Example: nameString= styleObj.item(0) Alternative: nameString= styleObj[0]
         *
         * @param {Number} index
         * @return {String} propertyName
         */
        value: function item(index) {
            return this._properties[index] && this._properties[index].name;
        }
    }, {
        key: 'removeProperty',

        /**
         * Returns the value deleted. Example: valString= styleObj.removeProperty('color')
         *
         * @param {String} propertyName
         * @return {*} propertyValue
         */
        value: function removeProperty(propertyName) {
            if (this._propertiesMap[propertyName]) {
                var value = this._propertiesMap[propertyName];
                this._properties.splice(this._properties.indexOf(value), 1);
                delete this._propertiesMap[propertyName];
                this._stringify();
                return value.value;
            }
        }
    }, {
        key: 'setProperty',

        /**
         * No return. Example: styleObj.setProperty('color', 'red', 'important')
         *
         * @param {String} propertyName
         * @param {String} value
         * @param {String} important
         */
        value: function setProperty(propertyName, value, important) {
            this._setProperty(propertyName, value, important);
            this._stringify();
        }
    }, {
        key: '_setProperty',

        /**
         * No return. Example: styleObj.setProperty('color', 'red', 'important')
         *
         * @param {String} propertyName
         * @param {String} value
         * @param {String} important
         */
        value: function _setProperty(propertyName, value, important) {
            if (!propertyName.match(/^[a-z\-]+$/)) {
                throw new Error('Not valid property name: ' + propertyName);
            }

            var cssRule = new CSSStyleRule(propertyName, value, important === 'important');
            if (this._propertiesMap[propertyName]) {
                this._properties.splice(this._properties.indexOf(this._propertiesMap[propertyName]), 1, cssRule);
            } else {
                this._properties.push(cssRule);
            }

            this._propertiesMap[propertyName] = cssRule;
        }
    }, {
        key: 'cssText',

        /**
         * @type {String}
         */
        get: function get() {
            return this._value;
        },

        /**
         * @param {String} style
         */
        set: function set(style) {
            this._parse(style);
        }
    }]);

    return AbstractCSSStyleDeclaration;
})();

exports['default'] = AbstractCSSStyleDeclaration;
module.exports = exports['default'];
//# sourceMappingURL=AbstractCSSStyleDeclaration.js.map