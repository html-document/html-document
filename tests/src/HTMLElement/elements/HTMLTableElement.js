/* global test */
import assert from 'proclaim';
const expect = assert.strictEqual;

const lib = '../../../../lib/';

const HTMLTableElement = require(lib + 'HTMLElement/elements/HTMLTableElement');
const Document = require(lib + 'Document');
const DOMException = require(lib + 'DOMException');

test('HTMLTableElement should have the nodeName == table ', () => {
    let elt = new HTMLTableElement();
    elt._ownerDocument = new Document();
    expect(elt.nodeName, 'table');
});

test('HTMLTableElement caption property', () => {
    let elt = new HTMLTableElement();
    elt._ownerDocument = new Document();
    expect(elt.caption, null);
    let caption = elt.createCaption();
    expect(elt.caption, caption);
    elt.deleteCaption();
    expect(elt.caption, null);
});

test('HTMLTableElement tHead property', () => {
    let elt = new HTMLTableElement();
    elt._ownerDocument = new Document();
    expect(elt.tHead, null);
    let head = elt.createTHead();
    expect(elt.tHead, head);
    elt.deleteTHead();
    expect(elt.tHead, null);
});

test('HTMLTableElement tFoot property', () => {
    let elt = new HTMLTableElement();
    elt._ownerDocument = new Document();
    expect(elt.tFoot, null);
    let head = elt.createTFoot();
    expect(elt.tFoot, head);
    elt.deleteTFoot();
    expect(elt.tFoot, null);
});

test('HTMLTableElement rows property', () => {
    let elt = new HTMLTableElement();
    elt._ownerDocument = new Document();
    expect(elt.rows.length, 0);
    let row = elt.insertRow();
    expect(elt.rows.length, 1);
    expect(elt.tBodies.length, 1);
    expect(elt.rows[0], row);
});

test('HTMLTableElement import HTML table', () => {
    const document = new Document();
    let div = document.createElement('div');
    div.innerHTML = '<table><tr><td>Some value</td></tr></table>';
    let table = div.querySelector('table');
    expect(table.tagName, 'table');
    expect(table.rows.length, 1);
    expect(table.tBodies.length, 1);
    expect(table.caption, null);
});

test('HTMLTableElement outerHTML property', () => {
    const document = new Document();
    let table = document.createElement('table');
    let caption = table.createCaption();
    caption.innerHTML = 'Test';
    let thead = table.createTHead();
    let row = thead.insertRow();
    let cell = row.insertCell();
    cell.innerHTML = 'Head cell';
    expect(table.outerHTML, '<table><caption>Test</caption><thead><tr><td>Head cell</td></tr></thead></table>');
});

test('HTMLTableElement outerHTML property and right caption create', () => {
    const document = new Document();
    let table = document.createElement('table');
    let thead = table.createTHead();
    let row = thead.insertRow();
    let cell = row.insertCell();
    cell.innerHTML = 'Head cell';
    let caption = table.createCaption();
    caption.innerHTML = 'Test';
    expect(table.outerHTML, '<table><caption>Test</caption><thead><tr><td>Head cell</td></tr></thead></table>');
});

test('HTMLTableElement throw when setting wrong caption', () => {
    let document = new Document();
    let elt = new HTMLTableElement();
    elt._ownerDocument = document;
    let span = document.createElement('span');
    /*assert.throws(function() {
        elt.caption = span;
    }, DOMException);*/
});

test('HTMLTableElement set tHead', () => {
    let document = new Document();
    document.body.innerHTML = '<table><caption>Some caption</caption><tbody>' +
        '<tr><td>Some cell</td></tr></tbody></table>';
    let table = document.body.firstChild;
    let tHead = document.createElement('thead');
    table.tHead = tHead;
    expect(table.outerHTML, '<table><caption>Some caption</caption><thead></thead>' +
        '<tbody><tr><td>Some cell</td></tr></tbody></table>');
});
