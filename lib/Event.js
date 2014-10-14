"use strict";
Object.defineProperties(exports, {
  Event: {get: function() {
      return Event;
    }},
  __esModule: {value: true}
});
var $__Object$defineProperties = Object.defineProperties;
var Event = function() {
  "use strict";
  function Event(type) {
    this.bubbles = false;
    this.cancelable = false;
    this.currentTarget = false;
    this.defaultPrevented = false;
    this.eventPhase = 0;
    this.target = null;
    this.timeStamp = Date.now() * 1000;
    this.type = type.toLowerCase();
    this.isTrusted = false;
  }
  $__Object$defineProperties(Event.prototype, {
    preventDefault: {
      value: function() {
        this.defaultPrevented = true;
      },
      enumerable: false,
      writable: true
    },
    stopImmediatePropagation: {
      value: function() {
        this.immediatePropagationStopped = true;
        this.stopPropagation();
      },
      enumerable: false,
      writable: true
    },
    stopPropagation: {
      value: function() {
        this.propagationStopped = true;
      },
      enumerable: false,
      writable: true
    },
    isImmediatePropagationStopped: {
      value: function() {
        return this.immediatePropagationStopped;
      },
      enumerable: false,
      writable: true
    }
  });
  return Event;
}();

//# sourceMappingURL=Event.js.map