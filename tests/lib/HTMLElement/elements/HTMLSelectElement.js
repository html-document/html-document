/* global test */
'use strict';

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

var _proclaim = require('proclaim');

var _proclaim2 = _interopRequireDefault(_proclaim);

var expect = _proclaim2['default'].strictEqual;

var lib = '../../../../lib/';

var HTMLSelectElement = require(lib + 'HTMLElement/elements/HTMLSelectElement');

test('HTMLSelectElement shoud have the nodeName == select ', function () {
    var elt = new HTMLSelectElement();
    expect(elt.nodeName, 'select');
});
//# sourceMappingURL=HTMLSelectElement.js.map