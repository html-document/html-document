"use strict";

/* global test */
var assert = require("proclaim");
var expect = assert.strictEqual;

var lib = "../../../lib/";

var HTMLElement = require(lib + "HTMLElement").HTMLElement;

test("CSSStyleDeclaration set should update element", function () {
  var elt = new HTMLElement();

  elt.style.cssText = "color: white; background: #FFF !important";
  expect(elt.getAttribute("style"), "color:white;background:#FFF!important;");
});

test("CSSStyleDeclaration element setAttribute(\"style\") should update style", function () {
  var elt = new HTMLElement();

  elt.setAttribute("style", "color: white; background: #FFF !important");
  expect(elt.style.cssText, "color:white;background:#FFF!important;");
});

test("CSSStyleDeclaration element removeAttribute(\"style\") should update style", function () {
  var elt = new HTMLElement();

  elt.style.cssText = "color: white; background: #FFF !important";
  elt.removeAttribute("style");
  expect(elt.style.cssText, "");
});
//# sourceMappingURL=../HTMLElement/CSSStyleDeclaration.js.map