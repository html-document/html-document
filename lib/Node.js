/**
 * A Node is an interface from which a number of DOM types inherit,
 * and allows these various types to be treated (or tested) similarly.
 *
 * {@link https://developer.mozilla.org/en-US/docs/Web/API/Node}
 */
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Node = (function () {
    function Node() {
        _classCallCheck(this, Node);

        this._attributes = {};
    }

    _createClass(Node, [{
        key: 'getAttribute',

        /* ATTRIBUTES */

        /**
         * get attribute's value
         *
         * @param {String} attributeName
         * @return {String}
         */
        value: function getAttribute(attributeName) {
            return this._attributes[attributeName];
        }
    }, {
        key: 'hasAttribute',

        /**
         * checks if attribute exists for node
         *
         * @param {String} attributeName
         * @returns {boolean}
         */
        value: function hasAttribute(attributeName) {
            return attributeName in this._attributes;
        }
    }, {
        key: 'setAttribute',

        /**
         * set attribute's value
         *
         * @param {String} attributeName
         * @param {String} attributeValue
         */
        value: function setAttribute(attributeName, attributeValue) {
            this._setAttribute(attributeName, attributeValue);
            this._updatedAttribute(attributeName, this._attributes[attributeName]);
        }
    }, {
        key: '_setAttribute',

        /**
         * set attribute's value
         *
         * @internal
         * @param {String} attributeName
         * @param {String} attributeValue
         */
        value: function _setAttribute(attributeName, attributeValue) {
            this._attributes[attributeName] = String(attributeValue);
        }
    }, {
        key: 'removeAttribute',

        /**
         * remove attribute
         *
         * @param {String} attributeName
         */
        value: function removeAttribute(attributeName) {
            delete this._attributes[attributeName];
            this._updatedAttribute(attributeName);
        }
    }, {
        key: '_updatedAttribute',

        /**
         * @internal
         * @param {String} attributeName
         */
        value: function _updatedAttribute(attributeName) {}
    }, {
        key: '_toHTML',
        value: function _toHTML() {
            return this.outerHTML;
        }
    }, {
        key: 'addEventListener',

        /* EVENTS */

        value: function addEventListener(eventType, listener, capturingPhase) {
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
        }
    }, {
        key: 'removeEventListener',
        value: function removeEventListener(eventType, listener, capturingPhase) {
            var _eventsKey = capturingPhase ? '_eventsCapturingPhase' : '_eventsBubblingPhase';
            if (this[_eventsKey] && this[_eventsKey].has(eventType)) {
                var callbacks = this[_eventsKey].get(eventType);
                var i = callbacks.indexOf(listener);
                if (i === -1) {
                    return false;
                }
                callbacks.splice(i, 1);
            }
        }
    }, {
        key: 'dispatchEvent',
        value: function dispatchEvent(event) {
            event.target = this;
            // Capturing phase
            var capturingPhase = function capturingPhase(event) {
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
                var bubblingPhase = function bubblingPhase(event) {
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
        }
    }, {
        key: 'textContent',

        /* CONTENT */

        /**
         * @return {String}
         */
        get: function get() {
            return '';
        }
    }]);

    return Node;
})();

exports['default'] = Node;

Object.defineProperty(Node, 'ELEMENT_NODE', { value: 1 });
Object.defineProperty(Node, 'ATTRIBUTE_NODE', { value: 2 });
Object.defineProperty(Node, 'TEXT_NODE', { value: 3 });
Object.defineProperty(Node, 'CDATA_SECTION_NODE', { value: 4 });
Object.defineProperty(Node, 'ENTITY_REFERENCE_NODE', { value: 5 });
Object.defineProperty(Node, 'ENTITY_NODE', { value: 6 });
Object.defineProperty(Node, 'PROCESSING_INSTRUCTION_NODE', { value: 7 });
Object.defineProperty(Node, 'COMMENT_NODE', { value: 8 });
Object.defineProperty(Node, 'DOCUMENT_NODE', { value: 9 });
Object.defineProperty(Node, 'DOCUMENT_TYPE_NODE', { value: 10 });
Object.defineProperty(Node, 'DOCUMENT_FRAGMENT_NODE', { value: 11 });
Object.defineProperty(Node, 'NOTATION_NODE', { value: 12 });
module.exports = exports['default'];
//# sourceMappingURL=Node.js.map