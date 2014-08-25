"use strict";
Object.defineProperties(exports, {
  Node: {get: function() {
      return Node;
    }},
  __esModule: {value: true}
});
var $__Object$defineProperty = Object.defineProperty;
var Node = function() {
  "use strict";
  function Node() {
    this._attributes = {};
  }
  $__Object$defineProperty(Node.prototype, "getAttribute", {
    value: function(attributeName) {
      return this._attributes[attributeName];
    },
    enumerable: false,
    writable: true
  });
  $__Object$defineProperty(Node.prototype, "setAttribute", {
    value: function(attributeName, attributeValue) {
      this._setAttribute(attributeName, attributeValue);
      this._updatedAttribute(attributeName, this._attributes[attributeName]);
    },
    enumerable: false,
    writable: true
  });
  $__Object$defineProperty(Node.prototype, "_setAttribute", {
    value: function(attributeName, attributeValue) {
      this._attributes[attributeName] = String(attributeValue);
    },
    enumerable: false,
    writable: true
  });
  $__Object$defineProperty(Node.prototype, "removeAttribute", {
    value: function(attributeName) {
      delete this._attributes[attributeName];
      this._updatedAttribute(attributeName);
    },
    enumerable: false,
    writable: true
  });
  $__Object$defineProperty(Node.prototype, "_updatedAttribute", {
    value: function(attributeName) {},
    enumerable: false,
    writable: true
  });
  $__Object$defineProperty(Node.prototype, "textContent", {
    get: function() {
      return '';
    },
    enumerable: true,
    configurable: true
  });
  $__Object$defineProperty(Node.prototype, "_toHTML", {
    value: function() {
      return this.outerHTML;
    },
    enumerable: false,
    writable: true
  });
  $__Object$defineProperty(Node.prototype, "addEventListener", {
    value: function(eventType, listener, capturingPhase) {
      var _eventsKey = capturingPhase ? '_eventsCapturingPhase' : '_eventsBubblingPhase';
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
    },
    enumerable: false,
    writable: true
  });
  $__Object$defineProperty(Node.prototype, "removeEventListener", {
    value: function(eventType, listener, capturingPhase) {
      var _eventsKey = capturingPhase ? '_eventsCapturingPhase' : '_eventsBubblingPhase';
      if (this[_eventsKey] && this[_eventsKey].has(eventType)) {
        var callbacks = this[_eventsKey].get(eventType);
        var i = callbacks.indexOf(listener);
        if (i === -1) {
          return false;
        }
        callbacks.splice(i, 1);
      }
    },
    enumerable: false,
    writable: true
  });
  $__Object$defineProperty(Node.prototype, "dispatchEvent", {
    value: function(event) {
      event.target = this;
      var capturingPhase = function(event) {
        if (this._parentNode) {
          capturingPhase.call(this._parentNode, event);
        }
        if (event.propagationStopped) {
          return;
        }
        var callbacks = this._eventsCapturingPhase && this._eventsCapturingPhase.get(event.type);
        if (callbacks) {
          callbacks.some(function() {
            return event.immediatePropagationStopped;
          });
        }
      };
      capturingPhase.call(this, event);
      if (!event.propagationStopped) {
        var bubblingPhase = function(event) {
          var callbacks = this._eventsBubblingPhase && this._eventsBubblingPhase.get(event.type);
          if (callbacks) {
            callbacks.some(function() {
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
    },
    enumerable: false,
    writable: true
  });
  return Node;
}();
Object.defineProperty(Node, 'ELEMENT_NODE', {value: 1});
Object.defineProperty(Node, 'ATTRIBUTE_NODE', {value: 2});
Object.defineProperty(Node, 'TEXT_NODE', {value: 3});
Object.defineProperty(Node, 'CDATA_SECTION_NODE', {value: 4});
Object.defineProperty(Node, 'ENTITY_REFERENCE_NODE', {value: 5});
Object.defineProperty(Node, 'ENTITY_NODE', {value: 6});
Object.defineProperty(Node, 'PROCESSING_INSTRUCTION_NODE', {value: 7});
Object.defineProperty(Node, 'COMMENT_NODE', {value: 8});
Object.defineProperty(Node, 'DOCUMENT_NODE', {value: 9});
Object.defineProperty(Node, 'DOCUMENT_TYPE_NODE', {value: 10});
Object.defineProperty(Node, 'DOCUMENT_FRAGMENT_NODE', {value: 11});
Object.defineProperty(Node, 'NOTATION_NODE', {value: 12});

//# sourceMappingURL=Node.js.map