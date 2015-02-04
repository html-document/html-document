"use strict";

/* global test, document */
var assert = require("proclaim");
var expect = assert.strictEqual;
var lib = "../../lib/";

var Document = require(lib + "Document").Document;
var document = new Document(); // jshint ignore: line

test("parse innerHTML", function () {
  var div = document.createElement("div");
  div.innerHTML = "<span/><span data-test=\"test\">content</span>";
  expect(div.innerHTML, "<span></span><span data-test=\"test\">content</span>");
});

test("parse nodeText", function () {
  var div = document.createElement("div");
  div.innerHTML = "content";
  expect(div.childNodes.length, 1);
  expect(div.innerHTML, "content");
});
//# sourceMappingURL=parser.js.map