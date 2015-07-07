/* global test */
var assert = require('proclaim');
var expect = assert.strictEqual;

var lib = '../../../../lib/';

var HTMLSelectElement = require(lib + 'HTMLElement/elements/HTMLSelectElement');

test('HTMLSelectElement shoud have the nodeName == select ', () => {
    var elt = new HTMLSelectElement();

    expect(elt.nodeName, 'select');
});
