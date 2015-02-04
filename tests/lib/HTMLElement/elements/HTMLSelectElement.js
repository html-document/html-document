"use strict";

/* global test */
var assert = require("proclaim");
var expect = assert.strictEqual;

var lib = "../../../../lib/";

var HTMLSelectElement = require(lib + "HTMLElement/elements/HTMLSelectElement").HTMLSelectElement;

test("HTMLSelectElement shoud have the nodeName == select ", function () {
  var elt = new HTMLSelectElement();

  expect(elt.nodeName, "select");
});
//# sourceMappingURL=../../HTMLElement/elements/HTMLSelectElement.js.map