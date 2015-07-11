'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});
exports['default'] = escapeAttribute;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _escapeHTML = require('./escapeHTML');

var _escapeHTML2 = _interopRequireDefault(_escapeHTML);

function escapeAttribute(string) {
    return (0, _escapeHTML2['default'])(string).replace(/"/g, '&quot;');
}

module.exports = exports['default'];
//# sourceMappingURL=escapeAttribute.js.map