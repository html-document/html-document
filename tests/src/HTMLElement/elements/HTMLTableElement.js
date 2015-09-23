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

test('HTMLTableElement throw when setting wrong caption', () => {
    let document = new Document();
    let elt = new HTMLTableElement();
    elt._ownerDocument = document;
    let span = document.createElement('span');
    /*assert.throws(function() {
        elt.caption = span;
    }, DOMException);*/
});
