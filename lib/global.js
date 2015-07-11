'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _Node = require('./Node');

var _Node2 = _interopRequireDefault(_Node);

var _Event = require('./Event');

var _Event2 = _interopRequireDefault(_Event);

var _Document = require('./Document');

var _Document2 = _interopRequireDefault(_Document);

var _DocumentFragment = require('./DocumentFragment');

var _DocumentFragment2 = _interopRequireDefault(_DocumentFragment);

global.window = global;
global.document = new _Document2['default']();
global.Event = _Event2['default'];
global.Node = _Node2['default'];
global.Document = _Document2['default'];
global.DocumentFragment = _DocumentFragment2['default'];
//# sourceMappingURL=global.js.map