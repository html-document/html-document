/* global test */
'use strict';

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default').default;

var _proclaim = require('proclaim');

var _proclaim2 = _interopRequireDefault(_proclaim);

const expect = _proclaim2.default.strictEqual;

const lib = '../../../../lib/';

const HTMLTableElement = require(lib + 'HTMLElement/elements/HTMLTableElement');
const Document = require(lib + 'Document');

test('HTMLTableElement should have the nodeName == table ', function () {
    let elt = new HTMLTableElement();
    expect(elt.nodeName, 'table');
});

test('HTMLTableElement caption property', function () {
    let elt = new HTMLTableElement();
    expect(elt.caption, null);
    let caption = elt.createCaption();
    expect(elt.caption, caption);
    elt.deleteCaption();
    expect(elt.caption, null);
});

test('HTMLTableElement tHead property', function () {
    let elt = new HTMLTableElement();
    expect(elt.tHead, null);
    let head = elt.createTHead();
    expect(elt.tHead, head);
    elt.deleteTHead();
    expect(elt.tHead, null);
});

test('HTMLTableElement tFoot property', function () {
    let elt = new HTMLTableElement();
    expect(elt.tFoot, null);
    let head = elt.createTFoot();
    expect(elt.tFoot, head);
    elt.deleteTFoot();
    expect(elt.tFoot, null);
});

test('HTMLTableElement rows property', function () {
    let elt = new HTMLTableElement();
    expect(elt.rows.length, 0);
    let row = elt.insertRow();
    expect(elt.rows.length, 1);
    expect(elt.tBodies.length, 1);
    expect(elt.rows[0], row);
});

test('HTMLTableElement import HTML table', function () {
    const document = new Document();
    let div = document.createElement('div');
    div.innerHTML = '<table><tr><td>Some value</td></tr></table>';
    let table = div.querySelector('table');
    expect(table.tagName, 'table');
    expect(table.rows.length, 1);
    expect(table.tBodies.length, 1);
    expect(table.caption, null);
});
//# sourceMappingURL=HTMLTableElement.js.map