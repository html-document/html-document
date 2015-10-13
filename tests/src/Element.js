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

test('Element querySelectorAll', () => {
    const document = new Document();
    const div = document.createElement('div');
    const span = document.createElement('span');
    div.appendChild(span);

    assert.deepEqual(div.querySelectorAll('span'), [span]);
});

test('Element getElementsByTagName should search elements everywhere', () => {
    const document = new Document();
    document.documentElement.innerHTML = '<html><head><meta name="keywords"/></head><body><meta name="other"/>' +
        '<div><meta name="other"/></div></body>';
    let metas = document.getElementsByTagName('meta');
    assert.equal(metas.length, 3);
});
