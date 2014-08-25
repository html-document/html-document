/* global test, document */
var assert = require('proclaim');
var expect = assert.strictEqual;
var lib = '../../lib/';

var ParentNode = require(lib + 'ParentNode').ParentNode;
var Document = require(lib + 'Document').Document;
var document = new Document();// jshint ignore: line

test('empty ParentNode', () => {
    var parentNode = new ParentNode();
    assert.isNull(parentNode.firstChild);
    assert.isNull(parentNode.lastChild);
    expect(parentNode.childNodes.length, 0);
});

test('appendChild Node', () => {
    var parentNode = new ParentNode();
    var span1 = document.createElement('span');

    var result = parentNode.appendChild(span1);
    expect(result, span1);
    expect(parentNode.childNodes.length, 1);
    expect(parentNode.firstChild, span1);
    expect(parentNode.lastChild, span1);

    var span2 = document.createElement('span');
    result = parentNode.appendChild(span2);
    expect(result, span2);
    expect(parentNode.firstChild, span1);
    expect(parentNode.lastChild, span2);

    result = parentNode.appendChild(span1);
    expect(result, span1);
    expect(parentNode.childNodes.length, 2);
    expect(parentNode.firstChild, span2);
    expect(parentNode.lastChild, span1);
});


test('firstChild, lastChild, previousSibling, nextSibling Node', () => {
    var parentNode = new ParentNode();
    var span1 = document.createElement('span');

    var result = parentNode.appendChild(span1);
    expect(parentNode.firstChild, span1);
    expect(parentNode.lastChild, span1);
    expect(span1.previousSibling, null);
    expect(span1.nextSibling, null);

    var span2 = document.createElement('span');
    result = parentNode.appendChild(span2);
    expect(result, span2);
    expect(parentNode.firstChild, span1);
    expect(parentNode.lastChild, span2);
    expect(span1.previousSibling, null);
    expect(span2.previousSibling, span1);
    expect(span1.nextSibling, span2);
    expect(span2.nextSibling, null);
});



test('appendChild DocumentFragment', () => {
    var parentNode = new ParentNode();
    var span1 = document.createElement('span');
    var span2 = document.createElement('span');
    var fragment = document.createDocumentFragment();
    fragment.appendChild(span1);
    expect(fragment.childNodes.length, 1);
    expect(fragment.firstChild, span1);
    expect(fragment.lastChild, span1);
    fragment.appendChild(span2);
    expect(fragment.childNodes.length, 2);

    var result = parentNode.appendChild(fragment);
    expect(result, fragment);
    expect(fragment.childNodes.length, 0);
    expect(parentNode.childNodes.length, 2);
    expect(parentNode.firstChild, span1);
    expect(parentNode.lastChild, span2);
});

test('replaceChild throws', () => {
    var parentNode = new ParentNode();
    var span1 = document.createElement('span');
    var span2 = document.createElement('span');

    assert.throws(function() {
        parentNode.replaceChild(span2, span1);
    }, 'Node was not found');
});

test('replaceChild', () => {
    var parentNode = new ParentNode();
    var span1 = document.createElement('span');
    var span2 = document.createElement('span');
    parentNode.appendChild(span1);
    expect(parentNode.childNodes.length, 1);
    expect(parentNode.firstChild, span1);

    var result = parentNode.replaceChild(span2, span1);
    expect(result, span1);
    expect(parentNode.childNodes.length, 1);
    expect(parentNode.firstChild, span2);
});

test('replaceChild DocumentFragment with one child', () => {
    var parentNode = new ParentNode();
    var span1 = document.createElement('span');
    var span2 = document.createElement('span');

    parentNode.appendChild(span1);
    expect(parentNode.childNodes.length, 1);

    var fragment = document.createDocumentFragment();
    fragment.appendChild(span2);
    expect(fragment.childNodes.length, 1);
    expect(fragment.firstChild, span2);

    var result = parentNode.replaceChild(fragment, span1);
    expect(result, span1);
    expect(fragment.childNodes.length, 0);
    expect(parentNode.childNodes.length, 1);
    expect(parentNode.firstChild, span2);
});

test('replaceChild DocumentFragment with two child', () => {
    var parentNode = new ParentNode();
    var span1 = document.createElement('span');
    var span2 = document.createElement('span');
    var span3 = document.createElement('span');

    parentNode.appendChild(span1);
    expect(parentNode.childNodes.length, 1);

    var fragment = document.createDocumentFragment();
    fragment.appendChild(span2);
    fragment.appendChild(span3);
    expect(fragment.childNodes.length, 2);
    expect(fragment.firstChild, span2);

    var result = parentNode.replaceChild(fragment, span1);
    expect(result, span1);
    expect(fragment.childNodes.length, 0);
    expect(parentNode.childNodes.length, 2);
    expect(parentNode.firstChild, span2);
    expect(parentNode.lastChild, span3);
});

test('removeChild throws', () => {
    var parentNode = new ParentNode();
    var span1 = document.createElement('span');

    assert.throws(function() {
        parentNode.removeChild(span1);
    }, 'Node was not found');
});


test('removeChild', () => {
    var parentNode = new ParentNode();
    var span1 = document.createElement('span');
    parentNode.appendChild(span1);

    var result = parentNode.removeChild(span1);
    expect(result, span1);
    expect(parentNode.childNodes.length, 0);
});


test('removeChild in the middle', () => {
    var parentNode = new ParentNode();
    var span1 = document.createElement('span');
    var span2 = document.createElement('span');
    var span3 = document.createElement('span');
    parentNode.appendChild(span1);
    parentNode.appendChild(span2);
    parentNode.appendChild(span3);


    var result = parentNode.removeChild(span2);
    expect(result, span2);
    expect(parentNode.childNodes.length, 2);
    expect(parentNode.firstChild, span1);
    expect(parentNode.lastChild, span3);
});


test('insertBefore throws', () => {
    var parentNode = new ParentNode();
    var span1 = document.createElement('span');
    var span2 = document.createElement('span');

    assert.throws(function() {
        parentNode.insertBefore(span2, span1);
    }, 'Node was not found');
});


test('insertBefore Node', () => {
    var parentNode = new ParentNode();
    var span1 = document.createElement('span');
    var span2 = document.createElement('span');
    parentNode.appendChild(span1);

    var result = parentNode.insertBefore(span2, span1);
    expect(result, span2);
    expect(parentNode.childNodes.length, 2);
    expect(parentNode.firstChild, span2);
    expect(parentNode.lastChild, span1);
});

test('insertBefore Node in the middle', () => {
    var parentNode = new ParentNode();
    var span1 = document.createElement('span');
    var span2 = document.createElement('span');
    var span3 = document.createElement('span');
    parentNode.appendChild(span1);
    parentNode.appendChild(span2);

    var result = parentNode.insertBefore(span3, span2);
    expect(result, span3);
    expect(parentNode.childNodes.length, 3);
    expect(parentNode.childNodes[0], span1);
    expect(parentNode.childNodes[1], span3);
    expect(parentNode.childNodes[2], span2);
});


test('insertBefore fragment', () => {
    var parentNode = new ParentNode();
    var span1 = document.createElement('span');
    var span2 = document.createElement('span');
    parentNode.appendChild(span1);
    parentNode.appendChild(span2);

    var fragment = document.createDocumentFragment();
    var span3 = document.createElement('span');
    var span4 = document.createElement('span');
    fragment.appendChild(span3);
    fragment.appendChild(span4);

    var result = parentNode.insertBefore(fragment, span1);
    expect(result, fragment);
    expect(parentNode.childNodes.length, 4);
    expect(fragment.childNodes.length, 0);
    expect(parentNode.childNodes[0], span3);
    expect(parentNode.childNodes[1], span4);
    expect(parentNode.childNodes[2], span1);
    expect(parentNode.childNodes[3], span2);
});
