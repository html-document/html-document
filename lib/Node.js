"use strict";

var _classProps = function (child, staticProps, instanceProps) {
  if (staticProps) Object.defineProperties(child, staticProps);
  if (instanceProps) Object.defineProperties(child.prototype, instanceProps);
};

var Node = (function () {
  var Node = function Node() {
    this._attributes = {};
  };

  Node.prototype.getAttribute = function (attributeName) {
    return this._attributes[attributeName];
  };

  Node.prototype.setAttribute = function (attributeName, attributeValue) {
    this._setAttribute(attributeName, attributeValue);
    this._updatedAttribute(attributeName, this._attributes[attributeName]);
  };

  Node.prototype._setAttribute = function (attributeName, attributeValue) {
    this._attributes[attributeName] = String(attributeValue);
  };

  Node.prototype.removeAttribute = function (attributeName) {
    delete this._attributes[attributeName];
    this._updatedAttribute(attributeName);
  };

  Node.prototype._updatedAttribute = function (attributeName) {};

  Node.prototype._toHTML = function () {
    return this.outerHTML;
  };

  Node.prototype.addEventListener = function (eventType, listener, capturingPhase) {
    var _eventsKey = capturingPhase ? "_eventsCapturingPhase" : "_eventsBubblingPhase";
    if (!this[_eventsKey]) {
      this[_eventsKey] = new Map();
    }
    var callbacks;
    if (!this[_eventsKey].has(eventType)) {
      this[_eventsKey].set(eventType, callbacks = []);
    } else {
      callbacks = this[_eventsKey].get(eventType);
    }
    callbacks.push(listener);
    return this;
  };

  Node.prototype.removeEventListener = function (eventType, listener, capturingPhase) {
    var _eventsKey = capturingPhase ? "_eventsCapturingPhase" : "_eventsBubblingPhase";
    if (this[_eventsKey] && this[_eventsKey].has(eventType)) {
      var callbacks = this[_eventsKey].get(eventType);
      var i = callbacks.indexOf(listener);
      if (i === -1) {
        return false;
      }
      callbacks.splice(i, 1);
    }
  };

  Node.prototype.dispatchEvent = function (event) {
    event.target = this;
    // Capturing phase
    var capturingPhase = function (event) {
      if (this._parentNode) {
        capturingPhase.call(this._parentNode, event);
      }
      if (event.propagationStopped) {
        return;
      }
      var callbacks = this._eventsCapturingPhase && this._eventsCapturingPhase.get(event.type);
      if (callbacks) {
        callbacks.some(function (callback) {
          callback();
          return event.immediatePropagationStopped;
        });
      }
    };
    capturingPhase.call(this, event);

    // Bubbling phase
    if (!event.propagationStopped) {
      var bubblingPhase = function (event) {
        var callbacks = this._eventsBubblingPhase && this._eventsBubblingPhase.get(event.type);
        if (callbacks) {
          callbacks.some(function (callback) {
            callback();
            return event.immediatePropagationStopped;
          });
        }
        if (!event.propagationStopped && this._parentNode) {
          bubblingPhase.call(this._parentNode, event);
        }
      };
      bubblingPhase.call(this, event);
    }

    return !event.defaultPrevented;
  };

  _classProps(Node, null, {
    textContent: {
      /* CONTENT */

      /**
       * @return {String}
       */
      get: function () {
        return "";
      }
    }
  });

  return Node;
})();

exports.Node = Node;


Object.defineProperty(Node, "ELEMENT_NODE", { value: 1 });
Object.defineProperty(Node, "ATTRIBUTE_NODE", { value: 2 });
Object.defineProperty(Node, "TEXT_NODE", { value: 3 });
Object.defineProperty(Node, "CDATA_SECTION_NODE", { value: 4 });
Object.defineProperty(Node, "ENTITY_REFERENCE_NODE", { value: 5 });
Object.defineProperty(Node, "ENTITY_NODE", { value: 6 });
Object.defineProperty(Node, "PROCESSING_INSTRUCTION_NODE", { value: 7 });
Object.defineProperty(Node, "COMMENT_NODE", { value: 8 });
Object.defineProperty(Node, "DOCUMENT_NODE", { value: 9 });
Object.defineProperty(Node, "DOCUMENT_TYPE_NODE", { value: 10 });
Object.defineProperty(Node, "DOCUMENT_FRAGMENT_NODE", { value: 11 });
Object.defineProperty(Node, "NOTATION_NODE", { value: 12 });
//# sourceMappingURL=Node.js.map