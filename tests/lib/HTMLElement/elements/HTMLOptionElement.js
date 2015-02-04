"use strict";

/* global test */
var assert = require("proclaim");
var expect = assert.strictEqual;

var lib = "../../../../lib/";

var HTMLOptionElement = require(lib + "HTMLElement/elements/HTMLOptionElement").HTMLOptionElement;

test("HTMLOptionElement shoud have the nodeName == option ", function () {
  var elt = new HTMLOptionElement();

  expect(elt.nodeName, "option");
});
//# sourceMappingURL=../../HTMLElement/elements/HTMLOptionElement.js.map