/* global test */
import assert from 'proclaim';
const expect = assert.strictEqual;

const lib = '../../../../lib/';

const HTMLOptionElement = require(lib + 'HTMLElement/elements/HTMLOptionElement');

test('HTMLOptionElement shoud have the nodeName == option ', () => {
    let elt = new HTMLOptionElement();
    expect(elt.nodeName, 'option');
});
