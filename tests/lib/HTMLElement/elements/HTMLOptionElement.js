/* global test */
'use strict';

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

var _proclaim = require('proclaim');

var _proclaim2 = _interopRequireDefault(_proclaim);

var expect = _proclaim2['default'].strictEqual;

var lib = '../../../../lib/';

var HTMLOptionElement = require(lib + 'HTMLElement/elements/HTMLOptionElement');

test('HTMLOptionElement shoud have the nodeName == option ', function () {
    var elt = new HTMLOptionElement();
    expect(elt.nodeName, 'option');
});
//# sourceMappingURL=HTMLOptionElement.js.map