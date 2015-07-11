/* global test */
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _proclaim = require('proclaim');

var _proclaim2 = _interopRequireDefault(_proclaim);

var lib = '../../lib/';

var Document = require(lib + 'Document');

test('Node attributes', function () {
    var document = new Document();
    var div = document.createElement('div');
    _proclaim2['default'].isUndefined(div.getAttribute('id'));
    _proclaim2['default'].isFalse(div.hasAttribute('id'));
    div.setAttribute('id', 'testid');
    _proclaim2['default'].strictEqual(div.getAttribute('id'), 'testid');
    _proclaim2['default'].isTrue(div.hasAttribute('id'));
    _proclaim2['default'].strictEqual(div.outerHTML, '<div id="testid"></div>');
});
//# sourceMappingURL=Node.js.map