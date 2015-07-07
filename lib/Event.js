"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Event = (function () {
  function Event(type) {
    _classCallCheck(this, Event);

    /**
     * A boolean indicating whether the event bubbles up through the DOM or not.
     * @type {Boolean}
     */
    this.bubbles = false;

    /**
     * A boolean indicating whether the event is cancelable.
     * @type {Boolean}
     */
    this.cancelable = false;

    /**
     * A reference to the currently registered target for the event.
     * @type {HTMLElement}
     */
    this.currentTarget = false;

    /**
     * Indicates whether or not event.preventDefault() has been called on the event.
     * @type {Boolean}
     */
    this.defaultPrevented = false;

    /**
     * Indicates which phase of the event flow is being processed.
     * @type {Number}
     */
    this.eventPhase = 0;

    /**
     * A reference to the target to which the event was originally dispatched.
     * @type {HTMLElement}
     */
    this.target = null;

    /**
     * The time that the event was created.
     * @type {Number}
     */
    this.timeStamp = Date.now() * 1000;

    /**
     * The name of the event (case-insensitive).
     * @type {String}
     */
    this.type = type.toLowerCase();

    /**
     * Indicates whether or not the event was initiated by the browser (after a user click for instance)
     * or by a script (using an event creation method)
     * @type {Boolean}
     */
    this.isTrusted = false;
  }

  _createClass(Event, [{
    key: "preventDefault",
    value: function preventDefault() {
      this.defaultPrevented = true;
    }
  }, {
    key: "stopImmediatePropagation",
    value: function stopImmediatePropagation() {
      this.immediatePropagationStopped = true;
      this.stopPropagation();
    }
  }, {
    key: "stopPropagation",
    value: function stopPropagation() {
      this.propagationStopped = true;
    }
  }, {
    key: "isImmediatePropagationStopped",
    value: function isImmediatePropagationStopped() {
      return this.immediatePropagationStopped;
    }
  }]);

  return Event;
})();

exports["default"] = Event;
module.exports = exports["default"];
//# sourceMappingURL=Event.js.map