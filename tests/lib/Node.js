/* global test */
'use strict';

var assert = require('proclaim');
var lib = '../../lib/';

var Document = require(lib + 'Document');

test('Node attributes', function () {
    var document = new Document();
    var div = document.createElement('div');
    assert.isUndefined(div.getAttribute('id'));
    assert.isFalse(div.hasAttribute('id'));
    div.setAttribute('id', 'testid');
    assert.strictEqual(div.getAttribute('id'), 'testid');
    assert.isTrue(div.hasAttribute('id'));
    assert.strictEqual(div.outerHTML, '<div id="testid"></div>');
});
//# sourceMappingURL=Node.js.map