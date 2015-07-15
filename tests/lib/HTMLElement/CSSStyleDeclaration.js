/* global test */
'use strict';

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default').default;

var _proclaim = require('proclaim');

var _proclaim2 = _interopRequireDefault(_proclaim);

const expect = _proclaim2.default.strictEqual;

const lib = '../../../lib/';

const HTMLElement = require(lib + 'HTMLElement');

test('CSSStyleDeclaration set should update element', function () {
    let elt = new HTMLElement();

    elt.style.cssText = 'color: white; background: #FFF !important';
    expect(elt.getAttribute('style'), 'color:white;background:#FFF!important;');
});

test('CSSStyleDeclaration element setAttribute("style") should update style', function () {
    let elt = new HTMLElement();

    elt.setAttribute('style', 'color: white; background: #FFF !important');
    expect(elt.style.cssText, 'color:white;background:#FFF!important;');
});

test('CSSStyleDeclaration element removeAttribute("style") should update style', function () {
    let elt = new HTMLElement();

    elt.style.cssText = 'color: white; background: #FFF !important';
    elt.removeAttribute('style');
    expect(elt.style.cssText, '');
});
//# sourceMappingURL=CSSStyleDeclaration.js.map