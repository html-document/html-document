"use strict";
Object.defineProperties(exports, {
  ClassList: {get: function() {
      return ClassList;
    }},
  __esModule: {value: true}
});
var $__Object$defineProperty = Object.defineProperty;
var ClassList = function() {
  "use strict";
  function ClassList(element) {
    this._element = element;
    this.tokens = [];
  }
  $__Object$defineProperty(ClassList.prototype, "length", {
    get: function() {
      return this.tokens.length;
    },
    enumerable: true,
    configurable: true
  });
  $__Object$defineProperty(ClassList.prototype, "_parse", {
    value: function(tokens) {
      this.tokens = tokens.split(' ');
    },
    enumerable: false,
    writable: true
  });
  $__Object$defineProperty(ClassList.prototype, "_stringify", {
    value: function() {
      this._element._setAttribute('class', this.tokens.join(' '));
    },
    enumerable: false,
    writable: true
  });
  $__Object$defineProperty(ClassList.prototype, "add", {
    value: function() {
      var updated = false;
      Array.prototype.forEach.call(arguments, function(token) {
        token = String(token);
        if (this.tokens.indexOf(token) === -1) {
          this.tokens.push(token);
          updated = true;
        }
      }.bind(this));
      if (updated) {
        this._stringify();
      }
    },
    enumerable: false,
    writable: true
  });
  $__Object$defineProperty(ClassList.prototype, "remove", {
    value: function() {
      var updated = false;
      Array.prototype.forEach.call(arguments, function(token) {
        var index = this.tokens.indexOf(token);
        if (index !== -1) {
          this.tokens.splice(index, 1);
          updated = true;
        }
      }.bind(this));
      if (updated) {
        this._stringify();
      }
    },
    enumerable: false,
    writable: true
  });
  $__Object$defineProperty(ClassList.prototype, "toggle", {
    value: function(token, force) {
      var result = this.contains(token);
      var method = result ? force !== true && 'remove' : force !== false && 'add';
      if (method) {
        this[method](token);
      }
      return !result;
    },
    enumerable: false,
    writable: true
  });
  $__Object$defineProperty(ClassList.prototype, "contains", {
    value: function(token) {
      return this.tokens.indexOf(token) !== -1;
    },
    enumerable: false,
    writable: true
  });
  return ClassList;
}();

//# sourceMappingURL=../HTMLElement/ClassList.js.map