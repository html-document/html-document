/* global test */
import assert from 'proclaim';

const lib = '../../lib/';

const Document = require(lib + 'Document');

test('Node attributes', () => {
    const document = new Document();
    const div = document.createElement('div');
    assert.isUndefined(div.getAttribute('id'));
    assert.isFalse(div.hasAttribute('id'));
    div.setAttribute('id', 'testid');
    assert.strictEqual(div.getAttribute('id'), 'testid');
    assert.isTrue(div.hasAttribute('id'));
    assert.strictEqual(div.outerHTML, '<div id="testid"></div>');
});
