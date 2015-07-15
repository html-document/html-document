/**
 * NodeList objects are collections of nodes
 * such as those returned by Node.childNodes and the document.querySelectorAll method..
 *
  * @see https://developer.mozilla.org/en/docs/Web/API/NodeList
  * @class NodeList
 */
"use strict";

var _createClass = require("babel-runtime/helpers/create-class").default;

var _classCallCheck = require("babel-runtime/helpers/class-call-check").default;

var _slice = require("babel-runtime/helpers/slice").default;

var _Symbol$iterator = require("babel-runtime/core-js/symbol/iterator").default;

Object.defineProperty(exports, "__esModule", {
    value: true
});
/** @class NodeList */
let NodeList = (function () {
    function NodeList() {
        _classCallCheck(this, NodeList);

        /**
         * @property {number} length of the list
         * @memberof NodeList
          */
        this.length = 0;
    }

    /**
     * @method NodeList#item
     * @param {number} index
     * @return {Node|null}
     
    * @memberof NodeList 
    * @instance 
    * @method item 
    * @param index */

    _createClass(NodeList, [{
        key: "item",
        value: function item(index) {
            return this[index] || null;
        }
    }, {
        key: "_push",
        /** @memberof NodeList 
        * @instance 
        * @method _push */value: function _push() {
            var _Array$prototype$push;

            (_Array$prototype$push = Array.prototype.push).call.apply(_Array$prototype$push, [this].concat(_slice.call(arguments)));
        }
    }, {
        key: _Symbol$iterator,
        /** @memberof NodeList 
        * @instance */value: function value() {
            var _this = this;

            let index = 0;

            return {
                next: function next() {
                    return { value: _this[index++], done: index > _this.length };
                }
            };
        }
    }]);

    return NodeList;
})();

exports.default = NodeList;
module.exports = exports.default;
//# sourceMappingURL=NodeList.js.map