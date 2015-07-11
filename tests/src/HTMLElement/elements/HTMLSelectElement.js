/* global test */
import assert from 'proclaim';
const expect = assert.strictEqual;

const lib = '../../../../lib/';

const HTMLSelectElement = require(lib + 'HTMLElement/elements/HTMLSelectElement');

test('HTMLSelectElement shoud have the nodeName == select ', () => {
    let elt = new HTMLSelectElement();
    expect(elt.nodeName, 'select');
});
