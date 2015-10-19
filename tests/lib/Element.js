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

test('Element getElementsByTagName should search elements everywhere', function () {
    var document = new Document();
    document.documentElement.innerHTML = '<html><head><meta name="keywords"/></head><body><meta name="other"/>' + '<div><meta name="other"/></div></body>';
    var metas = document.getElementsByTagName('meta');
    _proclaim2['default'].equal(metas.length, 3);
});
//# sourceMappingURL=Element.js.map