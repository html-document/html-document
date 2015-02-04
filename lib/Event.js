"use strict";

var Event = (function () {
  var Event = function Event(type) {
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
  };

  Event.prototype.preventDefault = function () {
    this.defaultPrevented = true;
  };

  Event.prototype.stopImmediatePropagation = function () {
    this.immediatePropagationStopped = true;
    this.stopPropagation();
  };

  Event.prototype.stopPropagation = function () {
    this.propagationStopped = true;
  };

  Event.prototype.isImmediatePropagationStopped = function () {
    return this.immediatePropagationStopped;
  };

  return Event;
})();

exports.Event = Event;
//# sourceMappingURL=Event.js.map