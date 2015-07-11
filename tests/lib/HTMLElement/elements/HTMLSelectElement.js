/* global test */
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

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