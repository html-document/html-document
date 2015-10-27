/* global test */
'use strict';

var _proclaim = require('proclaim');

var lib = '../../../../lib/';

var HTMLMetaElement = require(lib + 'HTMLElement/elements/HTMLMetaElement');
var Document = require(lib + 'Document');

test('HTMLMetaElement should have the nodeName == meta ', function () {
    var elt = new HTMLMetaElement();
    elt._ownerDocument = new Document();
    (0, _proclaim.strictEqual)(elt.nodeName, 'meta');
});

test('document.createElement should create object', function () {
    var document = new Document();
    var meta = document.createElement('meta');
    (0, _proclaim.ok)(meta instanceof HTMLMetaElement);
});

test('Should set and get content', function () {
    var elt = new HTMLMetaElement();
    elt._ownerDocument = new Document();
    elt.content = 'Content';
    (0, _proclaim.strictEqual)(elt.getAttribute('content'), 'Content');
    elt.setAttribute('content', 'Other');
    (0, _proclaim.strictEqual)(elt.content, 'Other');
});

test('Should set and get httpEquiv', function () {
    var elt = new HTMLMetaElement();
    elt._ownerDocument = new Document();
    elt.httpEquiv = 'Content';
    (0, _proclaim.strictEqual)(elt.getAttribute('http-equiv'), 'Content');
    elt.setAttribute('http-equiv', 'Other');
    (0, _proclaim.strictEqual)(elt.httpEquiv, 'Other');
});

test('Should set and get name', function () {
    var elt = new HTMLMetaElement();
    elt._ownerDocument = new Document();
    elt.name = 'Content';
    (0, _proclaim.strictEqual)(elt.getAttribute('name'), 'Content');
    elt.setAttribute('name', 'Other');
    (0, _proclaim.strictEqual)(elt.name, 'Other');
});

test('Should fill attributes from tag', function () {
    var document = new Document();
    document.head.innerHTML = '<meta name="keywords" content="some content">';
    var meta = document.head.firstChild;
    (0, _proclaim.strictEqual)(meta.name, 'keywords');
    (0, _proclaim.strictEqual)(meta.content, 'some content');
});

test('Should return empty values if attributes not set', function () {
    var elt = new HTMLMetaElement();
    elt._ownerDocument = new Document();
    (0, _proclaim.strictEqual)(elt.content, '');
    (0, _proclaim.strictEqual)(elt.name, '');
    (0, _proclaim.strictEqual)(elt.httpEquiv, '');
});
//# sourceMappingURL=HTMLMetaElement.js.map