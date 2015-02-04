"use strict";

var _classProps = function (child, staticProps, instanceProps) {
  if (staticProps) Object.defineProperties(child, staticProps);
  if (instanceProps) Object.defineProperties(child.prototype, instanceProps);
};

var ClassList = (function () {
  var ClassList =
  /**
   * @param {HTMLElement} element
   */
  function ClassList(element) {
    this._element = element;
    this.tokens = [];
  };

  ClassList.prototype._parse = function (tokens) {
    this.tokens = tokens.split(" ");
  };

  ClassList.prototype._stringify = function () {
    this._element._setAttribute("class", this.tokens.join(" "));
  };

  ClassList.prototype.add = function () {
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
  };

  ClassList.prototype.remove = function () {
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
  };

  ClassList.prototype.toggle = function (token, force) {
    var result = this.contains(token);
    var method = result ? force !== true && "remove" : force !== false && "add";

    if (method) {
      this[method](token);
    }
    return !result;
  };

  ClassList.prototype.contains = function (token) {
    return this.tokens.indexOf(token) !== -1;
  };

  _classProps(ClassList, null, {
    length: {
      /**
       * @return {Number}
       */
      get: function () {
        return this.tokens.length;
      }
    }
  });

  return ClassList;
})();

exports.ClassList = ClassList;
//# sourceMappingURL=../HTMLElement/ClassList.js.map