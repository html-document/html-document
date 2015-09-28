/* global test */
'use strict';

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

var _proclaim = require('proclaim');

var _proclaim2 = _interopRequireDefault(_proclaim);

var expect = _proclaim2['default'].strictEqual;

var lib = '../../../../lib/';

var HTMLTableElement = require(lib + 'HTMLElement/elements/HTMLTableElement');
var Document = require(lib + 'Document');
var DOMException = require(lib + 'DOMException');

test('HTMLTableElement should have the nodeName == table ', function () {
    var elt = new HTMLTableElement();
    elt._ownerDocument = new Document();
    expect(elt.nodeName, 'table');
});

test('HTMLTableElement caption property', function () {
    var elt = new HTMLTableElement();
    elt._ownerDocument = new Document();
    expect(elt.caption, null);
    var caption = elt.createCaption();
    expect(elt.caption, caption);
    elt.deleteCaption();
    expect(elt.caption, null);
});

test('HTMLTableElement tHead property', function () {
    var elt = new HTMLTableElement();
    elt._ownerDocument = new Document();
    expect(elt.tHead, null);
    var head = elt.createTHead();
    expect(elt.tHead, head);
    elt.deleteTHead();
    expect(elt.tHead, null);
});

test('HTMLTableElement tFoot property', function () {
    var elt = new HTMLTableElement();
    elt._ownerDocument = new Document();
    expect(elt.tFoot, null);
    var head = elt.createTFoot();
    expect(elt.tFoot, head);
    elt.deleteTFoot();
    expect(elt.tFoot, null);
});

test('HTMLTableElement rows property', function () {
    var elt = new HTMLTableElement();
    elt._ownerDocument = new Document();
    expect(elt.rows.length, 0);
    var row = elt.insertRow();
    expect(elt.rows.length, 1);
    expect(elt.tBodies.length, 1);
    expect(elt.rows[0], row);
});

test('HTMLTableElement import HTML table', function () {
    var document = new Document();
    var div = document.createElement('div');
    div.innerHTML = '<table><tr><td>Some value</td></tr></table>';
    var table = div.querySelector('table');
    expect(table.tagName, 'table');
    expect(table.rows.length, 1);
    expect(table.tBodies.length, 1);
    expect(table.caption, null);
});

test('HTMLTableElement outerHTML property', function () {
    var document = new Document();
    var table = document.createElement('table');
    var caption = table.createCaption();
    caption.innerHTML = 'Test';
    var thead = table.createTHead();
    var row = thead.insertRow();
    var cell = row.insertCell();
    cell.innerHTML = 'Head cell';
    expect(table.outerHTML, '<table><caption>Test</caption><thead><tr><td>Head cell</td></tr></thead></table>');
});

test('HTMLTableElement outerHTML property and right caption create', function () {
    var document = new Document();
    var table = document.createElement('table');
    var thead = table.createTHead();
    var row = thead.insertRow();
    var cell = row.insertCell();
    cell.innerHTML = 'Head cell';
    var caption = table.createCaption();
    caption.innerHTML = 'Test';
    expect(table.outerHTML, '<table><caption>Test</caption><thead><tr><td>Head cell</td></tr></thead></table>');
});

test('HTMLTableElement throw when setting wrong caption', function () {
    var document = new Document();
    var elt = new HTMLTableElement();
    elt._ownerDocument = document;
    var span = document.createElement('span');
    /*assert.throws(function() {
        elt.caption = span;
    }, DOMException);*/
});

test('HTMLTableElement set tHead', function () {
    var document = new Document();
    document.body.innerHTML = '<table><caption>Some caption</caption><tbody>' + '<tr><td>Some cell</td></tr></tbody></table>';
    var table = document.body.firstChild;
    var tHead = document.createElement('thead');
    table.tHead = tHead;
    expect(table.outerHTML, '<table><caption>Some caption</caption><thead></thead>' + '<tbody><tr><td>Some cell</td></tr></tbody></table>');
});
//# sourceMappingURL=HTMLTableElement.js.map