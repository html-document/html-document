/**
 * NodeList objects are collections of nodes
 * such as those returned by Node.childNodes and the document.querySelectorAll method..
 *
  * @see https://developer.mozilla.org/en/docs/Web/API/NodeList
  * @class NodeList
 */
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var NodeList = (function () {
    function NodeList() {
        _classCallCheck(this, NodeList);

        /**
         * @property {number} length of the list
         * @memberof NodeList
          */
        this.length = 0;
    }

    _createClass(NodeList, [{
        key: "item",

        /**
         * @method NodeList#item
         * @param {number} index
         * @return {Node|null}
         */
        value: function item(index) {
            return this[index] || null;
        }
    }, {
        key: "_push",
        value: function _push() {
            Array.prototype.push.apply(this, arguments);
        }
    }, {
        key: Symbol.iterator,
        value: function value() {
            var _this = this;

            var index = 0;

            return {
                next: function next() {
                    return { value: _this[index++], done: index > _this.length };
                }
            };
        }
    }]);

    return NodeList;
})();

exports["default"] = NodeList;
module.exports = exports["default"];
//# sourceMappingURL=NodeList.js.map