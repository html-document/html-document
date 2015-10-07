/**
 * The Element interface represents an object within a DOM document.
 * This interface describes methods and properties common to all kinds of elements.
 * Specific behaviors are described in interfaces which inherit from Element but add additional functionality.
 *
 * @see https://developer.mozilla.org/en/docs/Web/API/Event
 */
"use strict";

var _createClass = require("babel-runtime/helpers/create-class")["default"];

var _classCallCheck = require("babel-runtime/helpers/class-call-check")["default"];

Object.defineProperty(exports, "__esModule", {
  value: true
});
/** @class Event 
* @param type */
var Event = (function () {
  /**
   * @param {string} type
   */

  function Event(type) {
    _classCallCheck(this, Event);

    /**
     * A boolean indicating whether the event bubbles up through the DOM or not.
     * @type {boolean}
     * @readonly
     */
    this.bubbles = false;

    /**
     * A boolean indicating whether the event is cancelable.
     * @type {boolean}
     * @readonly
     */
    this.cancelable = false;

    /**
     * A reference to the currently registered target for the event.
     * @type {HTMLElement}
     * @readonly
     */
    this.currentTarget = false;

    /**
     * Indicates whether or not event.preventDefault() has been called on the event.
     * @type {boolean}
     * @readonly
     */
    this.defaultPrevented = false;

    /**
     * Indicates which phase of the event flow is being processed.
     * @type {number}
     * @readonly
     */
    this.eventPhase = 0;

    /**
     * A reference to the target to which the event was originally dispatched.
     * @type {HTMLElement}
     * @readonly
     */
    this.target = null;

    /**
     * The time that the event was created.
     * @type {number}
     * @readonly
     */
    this.timeStamp = Date.now() * 1000;

    /**
     * The name of the event (case-insensitive).
     * @type {string}
     * @readonly
     */
    this.type = type.toLowerCase();

    /**
     * Indicates whether or not the event was initiated by the browser (after a user click for instance)
     * or by a script (using an event creation method)
     * @type {boolean}
     * @readonly
     */
    this.isTrusted = false;
  }

  /**
   
  * @memberof Event 
  * @instance 
  * @method preventDefault */

  _createClass(Event, [{
    key: "preventDefault",
    value: function preventDefault() {
      this.defaultPrevented = true;
    }

    /**
     
    * @memberof Event 
    * @instance 
    * @method stopImmediatePropagation */
  }, {
    key: "stopImmediatePropagation",
    value: function stopImmediatePropagation() {
      this.immediatePropagationStopped = true;
      this.stopPropagation();
    }

    /**
     
    * @memberof Event 
    * @instance 
    * @method stopPropagation */
  }, {
    key: "stopPropagation",
    value: function stopPropagation() {
      this.propagationStopped = true;
    }

    /**
     * @return {boolean}
     
    * @memberof Event 
    * @instance 
    * @method isImmediatePropagationStopped */
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