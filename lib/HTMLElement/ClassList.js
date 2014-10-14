"use strict";
Object.defineProperties(exports, {
  ClassList: {get: function() {
      return ClassList;
    }},
  __esModule: {value: true}
});
var $__Object$defineProperties = Object.defineProperties;
var ClassList = function() {
  "use strict";
  function ClassList(element) {
    this._element = element;
    this.tokens = [];
  }
  $__Object$defineProperties(ClassList.prototype, {
    length: {
      get: function() {
        return this.tokens.length;
      },
      enumerable: true,
      configurable: true
    },
    _parse: {
      value: function(tokens) {
        this.tokens = tokens.split(' ');
      },
      enumerable: false,
      writable: true
    },
    _stringify: {
      value: function() {
        this._element._setAttribute('class', this.tokens.join(' '));
      },
      enumerable: false,
      writable: true
    },
    add: {
      value: function() {
        var $__arguments0 = arguments;
        var $__arguments = $__arguments0;
        var updated = false;
        Array.prototype.forEach.call($__arguments, function(token) {
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
    },
    remove: {
      value: function() {
        var $__arguments1 = arguments;
        var $__arguments = $__arguments1;
        var updated = false;
        Array.prototype.forEach.call($__arguments, function(token) {
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
    },
    toggle: {
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
    },
    contains: {
      value: function(token) {
        return this.tokens.indexOf(token) !== -1;
      },
      enumerable: false,
      writable: true
    }
  });
  return ClassList;
}();

//# sourceMappingURL=../HTMLElement/ClassList.js.map