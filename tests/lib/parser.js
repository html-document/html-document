"use strict";
var assert = require('proclaim');
var expect = assert.strictEqual;
var lib = '../../lib/';
var Document = require(lib + 'Document').Document;
var document = new Document();
test('parse innerHTML', function() {
  var div = document.createElement('div');
  div.innerHTML = '<span/><span data-test="test">content</span>';
  expect(div.innerHTML, '<span></span><span data-test="test">content</span>');
});

//# sourceMappingURL=parser.js.map