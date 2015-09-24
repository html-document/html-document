'use strict';

var _get = require('babel-runtime/helpers/get')['default'];

var _inherits = require('babel-runtime/helpers/inherits')['default'];

var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _Node2 = require('./Node');

var _Node3 = _interopRequireDefault(_Node2);

/**
 * @class Doctype
 * @extends Node
 */
/** @class Doctype */
var Doctype = (function (_Node) {
    _inherits(Doctype, _Node);

    function Doctype() {
        _classCallCheck(this, Doctype);

        _get(Object.getPrototypeOf(Doctype.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(Doctype, [{
        key: '_toHTML',
        /** @memberof Doctype 
        * @instance 
        * @method _toHTML */value: function _toHTML() {
            return '<!DOCTYPE html>';
        }
    }]);

    return Doctype;
})(_Node3['default']);

exports['default'] = Doctype;
module.exports = exports['default'];
//# sourceMappingURL=Doctype.js.map