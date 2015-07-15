/* global test */
'use strict';

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default').default;

var _proclaim = require('proclaim');

var _proclaim2 = _interopRequireDefault(_proclaim);

const expect = _proclaim2.default.strictEqual;

const lib = '../../../../lib/';

const HTMLOptionElement = require(lib + 'HTMLElement/elements/HTMLOptionElement');

test('HTMLOptionElement shoud have the nodeName == option ', function () {
    let elt = new HTMLOptionElement();
    expect(elt.nodeName, 'option');
});
//# sourceMappingURL=HTMLOptionElement.js.map