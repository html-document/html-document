/* global test */
import assert from 'proclaim';

const lib = '../../lib/';

const Document = require(lib + 'Document');

test('Element querySelector', () => {
    const document = new Document();
    const div = document.createElement('div');
    const span = document.createElement('span');
    div.appendChild(span);

    assert.strictEqual(div.querySelector('span'), span);
});

test('Element querySelector', () => {
    const document = new Document();
    const div = document.createElement('div');
    const span = document.createElement('span');
    div.appendChild(span);

    assert.deepEqual(div.querySelectorAll('span'), [span]);
});
