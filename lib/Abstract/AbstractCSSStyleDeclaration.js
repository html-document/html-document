"use strict";
Object.defineProperties(exports, {
  AbstractCSSStyleDeclaration: {get: function() {
      return AbstractCSSStyleDeclaration;
    }},
  __esModule: {value: true}
});
var $__Object$defineProperties = Object.defineProperties;
var CSSStyleRule = function() {
  "use strict";
  function CSSStyleRule(propertyName, value, important) {
    this.name = propertyName;
    this.value = value;
    this.important = important;
  }
  return CSSStyleRule;
}();
var AbstractCSSStyleDeclaration = function() {
  "use strict";
  function AbstractCSSStyleDeclaration() {
    throw new Error('Abstract class');
  }
  $__Object$defineProperties(AbstractCSSStyleDeclaration.prototype, {
    cssText: {
      get: function() {
        return this._value;
      },
      set: function(style) {
        this._parse(style);
      },
      enumerable: true,
      configurable: true
    },
    _parse: {
      value: function(style) {
        this._properties = [];
        this._propertiesMap = {};
        style.split(';').forEach(function(part) {
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
            this._setProperty(key, value, important && 'important');
          }
        }.bind(this));
        this._stringify();
      },
      enumerable: false,
      writable: true
    },
    _stringify: {
      value: function() {
        var stylified = '';
        this._properties.forEach(function(s) {
          stylified += s.name + ':' + s.value + (s.important && '!important' || '') + ';';
        });
        this._value = stylified;
      },
      enumerable: false,
      writable: true
    },
    getPropertyPriority: {
      value: function(propertyName) {
        return this._propertiesMap[propertyName] && this._propertiesMap[propertyName].important && 'important';
      },
      enumerable: false,
      writable: true
    },
    getPropertyValue: {
      value: function(propertyName) {
        return this._propertiesMap[propertyName] && this._propertiesMap[propertyName].value;
      },
      enumerable: false,
      writable: true
    },
    item: {
      value: function(index) {
        return this._properties[index] && this._properties[index].name;
      },
      enumerable: false,
      writable: true
    },
    removeProperty: {
      value: function(propertyName) {
        if (this._propertiesMap[propertyName]) {
          var value = this._propertiesMap[propertyName];
          this._properties.splice(this._properties.indexOf(value), 1);
          delete this._propertiesMap[propertyName];
          this._stringify();
          return value.value;
        }
      },
      enumerable: false,
      writable: true
    },
    setProperty: {
      value: function(propertyName, value, important) {
        this._setProperty(propertyName, value, important);
        this._stringify();
      },
      enumerable: false,
      writable: true
    },
    _setProperty: {
      value: function(propertyName, value, important) {
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
      },
      enumerable: false,
      writable: true
    }
  });
  return AbstractCSSStyleDeclaration;
}();

//# sourceMappingURL=../Abstract/AbstractCSSStyleDeclaration.js.map