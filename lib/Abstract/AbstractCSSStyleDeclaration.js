"use strict";

var _classProps = function (child, staticProps, instanceProps) {
  if (staticProps) Object.defineProperties(child, staticProps);
  if (instanceProps) Object.defineProperties(child.prototype, instanceProps);
};

var CSSStyleRule = function CSSStyleRule(propertyName, value, important) {
  this.name = propertyName;
  this.value = value;
  this.important = important;
};

var AbstractCSSStyleDeclaration = (function () {
  var AbstractCSSStyleDeclaration =
  /**
   */
  function AbstractCSSStyleDeclaration() {
    throw new Error("Abstract class");
  };

  AbstractCSSStyleDeclaration.prototype._parse = function (style) {
    var _this = this;
    this._properties = [];
    this._propertiesMap = {};
    style.split(";").forEach(function (part) {
      part = part.trim();
      if (!part) {
        return;
      }
      var important = !!part.match(/!important$/);
      if (important) {
        part = part.slice(0, -"!important".length);
      }
      var splitPoint = part.indexOf(":");
      if (splitPoint) {
        var key = part.slice(0, splitPoint).trim();
        var value = part.slice(splitPoint + 1).trim();
        _this._setProperty(key, value, important && "important");
      }
    });
    this._stringify();
  };

  AbstractCSSStyleDeclaration.prototype._stringify = function () {
    var stylified = "";
    this._properties.forEach(function (s) {
      stylified += s.name + ":" + s.value + (s.important && "!important" || "") + ";";
    });
    this._value = stylified;
  };

  AbstractCSSStyleDeclaration.prototype.getPropertyPriority = function (propertyName) {
    return this._propertiesMap[propertyName] && this._propertiesMap[propertyName].important && "important";
  };

  AbstractCSSStyleDeclaration.prototype.getPropertyValue = function (propertyName) {
    return this._propertiesMap[propertyName] && this._propertiesMap[propertyName].value;
  };

  AbstractCSSStyleDeclaration.prototype.item = function (index) {
    return this._properties[index] && this._properties[index].name;
  };

  AbstractCSSStyleDeclaration.prototype.removeProperty = function (propertyName) {
    if (this._propertiesMap[propertyName]) {
      var value = this._propertiesMap[propertyName];
      this._properties.splice(this._properties.indexOf(value), 1);
      delete this._propertiesMap[propertyName];
      this._stringify();
      return value.value;
    }
  };

  AbstractCSSStyleDeclaration.prototype.setProperty = function (propertyName, value, important) {
    this._setProperty(propertyName, value, important);
    this._stringify();
  };

  AbstractCSSStyleDeclaration.prototype._setProperty = function (propertyName, value, important) {
    if (!propertyName.match(/^[a-z\-]+$/)) {
      throw new Error("Not valid property name: " + propertyName);
    }
    var cssRule = new CSSStyleRule(propertyName, value, important === "important");
    if (this._propertiesMap[propertyName]) {
      this._properties.splice(this._properties.indexOf(this._propertiesMap[propertyName]), 1, cssRule);
    } else {
      this._properties.push(cssRule);
    }
    this._propertiesMap[propertyName] = cssRule;
  };

  _classProps(AbstractCSSStyleDeclaration, null, {
    cssText: {
      /**
       * @return {String}
       */
      get: function () {
        return this._value;
      },


      /**
       * @param {String} style
       * @return {String}
       */
      set: function (style) {
        this._parse(style);
      }
    }
  });

  return AbstractCSSStyleDeclaration;
})();

exports.AbstractCSSStyleDeclaration = AbstractCSSStyleDeclaration;
//# sourceMappingURL=../Abstract/AbstractCSSStyleDeclaration.js.map