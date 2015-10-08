/* global test */
'use strict';

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

var _proclaim = require('proclaim');

var _proclaim2 = _interopRequireDefault(_proclaim);

var lib = '../../lib/';

var Document = require(lib + 'Document');

test('Element querySelector', function () {
    var document = new Document();
    var div = document.createElement('div');
    var span = document.createElement('span');
    div.appendChild(span);

    _proclaim2['default'].strictEqual(div.querySelector('span'), span);
});

test('Element querySelector', function () {
    var document = new Document();
    var div = document.createElement('div');
    var span = document.createElement('span');
    div.appendChild(span);

    _proclaim2['default'].deepEqual(div.querySelectorAll('span'), [span]);
});
//# sourceMappingURL=Element.js.map