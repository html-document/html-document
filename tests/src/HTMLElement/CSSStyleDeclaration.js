/* global test */
import assert from 'proclaim';
const expect = assert.strictEqual;

const lib = '../../../lib/';

const HTMLElement = require(lib + 'HTMLElement');

test('CSSStyleDeclaration set should update element', () => {
    let elt = new HTMLElement();

    elt.style.cssText = 'color: white; background: #FFF !important';
    expect(elt.getAttribute('style'), 'color:white;background:#FFF!important;');
});

test('CSSStyleDeclaration element setAttribute("style") should update style', () => {
    let elt = new HTMLElement();

    elt.setAttribute('style', 'color: white; background: #FFF !important');
    expect(elt.style.cssText, 'color:white;background:#FFF!important;');
});

test('CSSStyleDeclaration element removeAttribute("style") should update style', () => {
    let elt = new HTMLElement();

    elt.style.cssText = 'color: white; background: #FFF !important';
    elt.removeAttribute('style');
    expect(elt.style.cssText, '');
});
