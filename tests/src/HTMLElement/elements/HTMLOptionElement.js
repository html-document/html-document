/* global test */
var assert = require('proclaim');
var expect = assert.strictEqual;

var lib = '../../../../lib/';

var HTMLOptionElement = require(lib + 'HTMLElement/elements/HTMLOptionElement').HTMLOptionElement;

test('HTMLOptionElement shoud have the nodeName == option ', () => {
    var elt = new HTMLOptionElement();

    expect(elt.nodeName, 'option');
});
