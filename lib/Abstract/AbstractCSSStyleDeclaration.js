/** @class CSSStyleRule 
* @param propertyName 
* @param value 
* @param important */'use strict';

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _createClass = require('babel-runtime/helpers/create-class')['default'];

Object.defineProperty(exports, '__esModule', {
    value: true
});

var CSSStyleRule = function CSSStyleRule(propertyName, value, important) {
    _classCallCheck(this, CSSStyleRule);

    this.name = propertyName;
    this.value = value;
    this.important = important;
}

/**
 * CSSStyleDeclaration represents a collection of CSS property-value pairs. It is used in a few APIs
 *
 * - HTMLElement.style - to manipulate the style of a single element (<elem style="...">);
 * - (TODO: reword) is an interface to the declaration block returned by the style
 * property of a cssRule in a stylesheet, when the rule is a CSSStyleRule.
 * - CSSStyleDeclaration is also a read-only interface to the result of window.getComputedStyle().
 */
;

/** @class AbstractCSSStyleDeclaration */
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
         * @param {string} style
         
        * @memberof AbstractCSSStyleDeclaration 
        * @instance 
        * @method _parse 
        * @param style */
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

        /**
         * Parse style
         *
         * @internal
         
        * @memberof AbstractCSSStyleDeclaration 
        * @instance 
        * @method _stringify */
    }, {
        key: '_stringify',
        value: function _stringify() {
            var stylified = '';
            this._properties.forEach(function (prop) {
                stylified += prop.name + ':' + prop.value + (prop.important && '!important' || '') + ';';
            });
            this._value = stylified;
        }

        /**
         * Returns the optional priority, "important". Example: priString= styleObj.getPropertyPriority('color')
         *
         * @param {string} propertyName
         * @param {String|undefined|false} important
         
        * @memberof AbstractCSSStyleDeclaration 
        * @instance 
        * @method getPropertyPriority 
        * @param propertyName */
    }, {
        key: 'getPropertyPriority',
        value: function getPropertyPriority(propertyName) {
            return this._propertiesMap[propertyName] && this._propertiesMap[propertyName].important && 'important';
        }

        /**
         * Returns the optional priority, "important". Example: priString= styleObj.getPropertyPriority('color')
         *
         * @param {string} propertyName
         * @return {*} propertyValue
         
        * @memberof AbstractCSSStyleDeclaration 
        * @instance 
        * @method getPropertyValue 
        * @param propertyName */
    }, {
        key: 'getPropertyValue',
        value: function getPropertyValue(propertyName) {
            return this._propertiesMap[propertyName] && this._propertiesMap[propertyName].value;
        }

        /**
         * Returns a property name. Example: nameString= styleObj.item(0) Alternative: nameString= styleObj[0]
         *
         * @param {number} index
         * @return {string} propertyName
         
        * @memberof AbstractCSSStyleDeclaration 
        * @instance 
        * @method item 
        * @param index */
    }, {
        key: 'item',
        value: function item(index) {
            return this._properties[index] && this._properties[index].name;
        }

        /**
         * Returns the value deleted. Example: valString= styleObj.removeProperty('color')
         *
         * @param {string} propertyName
         * @return {*} propertyValue
         
        * @memberof AbstractCSSStyleDeclaration 
        * @instance 
        * @method removeProperty 
        * @param propertyName */
    }, {
        key: 'removeProperty',
        value: function removeProperty(propertyName) {
            if (this._propertiesMap[propertyName]) {
                var value = this._propertiesMap[propertyName];
                this._properties.splice(this._properties.indexOf(value), 1);
                delete this._propertiesMap[propertyName];
                this._stringify();
                return value.value;
            }
        }

        /**
         * No return. Example: styleObj.setProperty('color', 'red', 'important')
         *
         * @param {string} propertyName
         * @param {string} value
         * @param {string} important
         
        * @memberof AbstractCSSStyleDeclaration 
        * @instance 
        * @method setProperty 
        * @param propertyName 
        * @param value 
        * @param important */
    }, {
        key: 'setProperty',
        value: function setProperty(propertyName, value, important) {
            this._setProperty(propertyName, value, important);
            this._stringify();
        }

        /**
         * No return. Example: styleObj.setProperty('color', 'red', 'important')
         *
         * @param {string} propertyName
         * @param {string} value
         * @param {string} important
         
        * @memberof AbstractCSSStyleDeclaration 
        * @instance 
        * @method _setProperty 
        * @param propertyName 
        * @param value 
        * @param important */
    }, {
        key: '_setProperty',
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
         * @type {string}
         
        * @memberof AbstractCSSStyleDeclaration 
        * @instance 
        * @member cssText */
        get: function get() {
            return this._value;
        },

        /**
         * @param {string} style
         
        * @memberof AbstractCSSStyleDeclaration 
        * @instance 
        * @param style */
        set: function set(style) {
            this._parse(style);
        }
    }]);

    return AbstractCSSStyleDeclaration;
})();

exports['default'] = AbstractCSSStyleDeclaration;
module.exports = exports['default'];
//# sourceMappingURL=AbstractCSSStyleDeclaration.js.map