'use strict';

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default').default;

Object.defineProperty(exports, '__esModule', {
    value: true
});
exports.default = escapeAttribute;

var _escapeHTML = require('./escapeHTML');

var _escapeHTML2 = _interopRequireDefault(_escapeHTML);

/** @function 
* @param string */
function escapeAttribute(string) {
    return (0, _escapeHTML2.default)(string).replace(/"/g, '&quot;');
}

module.exports = exports.default;
//# sourceMappingURL=escapeAttribute.js.map