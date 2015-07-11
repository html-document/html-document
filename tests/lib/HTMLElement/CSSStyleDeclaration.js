/* global test */
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _proclaim = require('proclaim');

var _proclaim2 = _interopRequireDefault(_proclaim);

var expect = _proclaim2['default'].strictEqual;

var lib = '../../../lib/';

var HTMLElement = require(lib + 'HTMLElement');

test('CSSStyleDeclaration set should update element', function () {
    var elt = new HTMLElement();

    elt.style.cssText = 'color: white; background: #FFF !important';
    expect(elt.getAttribute('style'), 'color:white;background:#FFF!important;');
});

test('CSSStyleDeclaration element setAttribute("style") should update style', function () {
    var elt = new HTMLElement();

    elt.setAttribute('style', 'color: white; background: #FFF !important');
    expect(elt.style.cssText, 'color:white;background:#FFF!important;');
});

test('CSSStyleDeclaration element removeAttribute("style") should update style', function () {
    var elt = new HTMLElement();

    elt.style.cssText = 'color: white; background: #FFF !important';
    elt.removeAttribute('style');
    expect(elt.style.cssText, '');
});
//# sourceMappingURL=CSSStyleDeclaration.js.map