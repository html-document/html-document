/**
 * The Element interface represents an object within a DOM document.
 * This interface describes methods and properties common to all kinds of elements.
 * Specific behaviors are described in interfaces which inherit from Element but add additional functionality.
 *
 * @see https://developer.mozilla.org/en/docs/Web/API/Event
 * @class Event
 */
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Event = (function () {
  /**
   * @param {String} type
   */

  function Event(type /*: string*/) {
    _classCallCheck(this, Event);

    /**
     * A boolean indicating whether the event bubbles up through the DOM or not.
     * @member {Boolean} Event#bubbles
     * @readonly
     */
    this.bubbles = false;

    /**
     * A boolean indicating whether the event is cancelable.
     * @member {Boolean} Event#cancelable
     * @readonly
     */
    this.cancelable = false;

    /**
     * A reference to the currently registered target for the event.
     * @member {HTMLElement} Event#currentTarget
     * @readonly
     */
    this.currentTarget = false;

    /**
     * Indicates whether or not event.preventDefault() has been called on the event.
     * @member {Boolean} Event#defaultPrevented
     * @readonly
     */
    this.defaultPrevented = false;

    /**
     * Indicates which phase of the event flow is being processed.
     * @member {Number} Event#eventPhase
     * @readonly
     */
    this.eventPhase = 0;

    /**
     * A reference to the target to which the event was originally dispatched.
     * @member {HTMLElement} Event#target
     * @readonly
     */
    this.target = null;

    /**
     * The time that the event was created.
     * @member {Number} Event#timeStamp
     * @readonly
     */
    this.timeStamp = Date.now() * 1000;

    /**
     * The name of the event (case-insensitive).
     * @member {String} Event#type
     * @readonly
     */
    this.type = type.toLowerCase();

    /**
     * Indicates whether or not the event was initiated by the browser (after a user click for instance)
     * or by a script (using an event creation method)
     * @member {Boolean} Event#isTrusted
     * @readonly
     */
    this.isTrusted = false;
  }

  _createClass(Event, [{
    key: "preventDefault",

    /**
     * @method Event#preventDefault
     */
    value: function preventDefault() {
      this.defaultPrevented = true;
    }
  }, {
    key: "stopImmediatePropagation",

    /**
     * @method Event#stopImmediatePropagation
     */
    value: function stopImmediatePropagation() {
      this.immediatePropagationStopped = true;
      this.stopPropagation();
    }
  }, {
    key: "stopPropagation",

    /**
     * @method Event#stopPropagation
     */
    value: function stopPropagation() {
      this.propagationStopped = true;
    }
  }, {
    key: "isImmediatePropagationStopped",

    /**
     * @method Event#isImmediatePropagationStopped
     * @return {Boolean}
     */
    value: function isImmediatePropagationStopped() {
      return this.immediatePropagationStopped;
    }
  }]);

  return Event;
})();

exports["default"] = Event;
module.exports = exports["default"];
//# sourceMappingURL=Event.js.map