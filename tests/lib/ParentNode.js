/* global test, document */
'use strict';

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default').default;

var _proclaim = require('proclaim');

var _proclaim2 = _interopRequireDefault(_proclaim);

const expect = _proclaim2.default.strictEqual;

const lib = '../../lib/';

const ParentNode = require(lib + 'ParentNode');
const Document = require(lib + 'Document');
const document = new Document(); // jshint ignore: line

test('empty ParentNode', function () {
    let parentNode = new ParentNode();
    _proclaim2.default.isNull(parentNode.firstChild);
    _proclaim2.default.isNull(parentNode.lastChild);
    expect(parentNode.childNodes.length, 0);
});

test('appendChild Node', function () {
    let parentNode = new ParentNode();
    let span1 = document.createElement('span');

    let result = parentNode.appendChild(span1);
    expect(result, span1);
    expect(parentNode.childNodes.length, 1);
    expect(parentNode.firstChild, span1);
    expect(parentNode.lastChild, span1);

    let span2 = document.createElement('span');
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

test('firstChild, lastChild, previousSibling, nextSibling Node', function () {
    let parentNode = new ParentNode();
    let span1 = document.createElement('span');

    let result = parentNode.appendChild(span1);
    expect(parentNode.firstChild, span1);
    expect(parentNode.lastChild, span1);
    expect(span1.previousSibling, null);
    expect(span1.nextSibling, null);

    let span2 = document.createElement('span');
    result = parentNode.appendChild(span2);
    expect(result, span2);
    expect(parentNode.firstChild, span1);
    expect(parentNode.lastChild, span2);
    expect(span1.previousSibling, null);
    expect(span2.previousSibling, span1);
    expect(span1.nextSibling, span2);
    expect(span2.nextSibling, null);
});

test('appendChild DocumentFragment', function () {
    let parentNode = new ParentNode();
    let span1 = document.createElement('span');
    let span2 = document.createElement('span');
    let fragment = document.createDocumentFragment();
    fragment.appendChild(span1);
    expect(fragment.childNodes.length, 1);
    expect(fragment.firstChild, span1);
    expect(fragment.lastChild, span1);
    fragment.appendChild(span2);
    expect(fragment.childNodes.length, 2);

    let result = parentNode.appendChild(fragment);
    expect(result, fragment);
    expect(fragment.childNodes.length, 0);
    expect(parentNode.childNodes.length, 2);
    expect(parentNode.firstChild, span1);
    expect(parentNode.lastChild, span2);
});

test('replaceChild throws', function () {
    let parentNode = new ParentNode();
    let span1 = document.createElement('span');
    let span2 = document.createElement('span');

    _proclaim2.default.throws( /** @function */function () {
        parentNode.replaceChild(span2, span1);
    }, 'Node was not found');
});

test('replaceChild', function () {
    let parentNode = new ParentNode();
    let span1 = document.createElement('span');
    let span2 = document.createElement('span');
    parentNode.appendChild(span1);
    expect(parentNode.childNodes.length, 1);
    expect(parentNode.firstChild, span1);

    let result = parentNode.replaceChild(span2, span1);
    expect(result, span1);
    expect(parentNode.childNodes.length, 1);
    expect(parentNode.firstChild, span2);
});

test('replaceChild DocumentFragment with one child', function () {
    let parentNode = new ParentNode();
    let span1 = document.createElement('span');
    let span2 = document.createElement('span');

    parentNode.appendChild(span1);
    expect(parentNode.childNodes.length, 1);

    let fragment = document.createDocumentFragment();
    fragment.appendChild(span2);
    expect(fragment.childNodes.length, 1);
    expect(fragment.firstChild, span2);

    let result = parentNode.replaceChild(fragment, span1);
    expect(result, span1);
    expect(fragment.childNodes.length, 0);
    expect(parentNode.childNodes.length, 1);
    expect(parentNode.firstChild, span2);
});

test('replaceChild DocumentFragment with two child', function () {
    let parentNode = new ParentNode();
    let span1 = document.createElement('span');
    let span2 = document.createElement('span');
    let span3 = document.createElement('span');

    parentNode.appendChild(span1);
    expect(parentNode.childNodes.length, 1);

    let fragment = document.createDocumentFragment();
    fragment.appendChild(span2);
    fragment.appendChild(span3);
    expect(fragment.childNodes.length, 2);
    expect(fragment.firstChild, span2);

    let result = parentNode.replaceChild(fragment, span1);
    expect(result, span1);
    expect(fragment.childNodes.length, 0);
    expect(parentNode.childNodes.length, 2);
    expect(parentNode.firstChild, span2);
    expect(parentNode.lastChild, span3);
});

test('removeChild throws', function () {
    let parentNode = new ParentNode();
    let span1 = document.createElement('span');

    _proclaim2.default.throws( /** @function */function () {
        parentNode.removeChild(span1);
    }, 'Node was not found');
});

test('removeChild', function () {
    let parentNode = new ParentNode();
    let span1 = document.createElement('span');
    parentNode.appendChild(span1);

    let result = parentNode.removeChild(span1);
    expect(result, span1);
    expect(parentNode.childNodes.length, 0);
});

test('removeChild in the middle', function () {
    let parentNode = new ParentNode();
    let span1 = document.createElement('span');
    let span2 = document.createElement('span');
    let span3 = document.createElement('span');
    parentNode.appendChild(span1);
    parentNode.appendChild(span2);
    parentNode.appendChild(span3);

    let result = parentNode.removeChild(span2);
    expect(result, span2);
    expect(parentNode.childNodes.length, 2);
    expect(parentNode.firstChild, span1);
    expect(parentNode.lastChild, span3);
});

test('insertBefore throws', function () {
    let parentNode = new ParentNode();
    let span1 = document.createElement('span');
    let span2 = document.createElement('span');

    _proclaim2.default.throws( /** @function */function () {
        parentNode.insertBefore(span2, span1);
    }, 'Node was not found');
});

test('insertBefore Node', function () {
    let parentNode = new ParentNode();
    let span1 = document.createElement('span');
    let span2 = document.createElement('span');
    parentNode.appendChild(span1);

    let result = parentNode.insertBefore(span2, span1);
    expect(result, span2);
    expect(parentNode.childNodes.length, 2);
    expect(parentNode.firstChild, span2);
    expect(parentNode.lastChild, span1);
});

test('insertBefore Node in the middle', function () {
    let parentNode = new ParentNode();
    let span1 = document.createElement('span');
    let span2 = document.createElement('span');
    let span3 = document.createElement('span');
    parentNode.appendChild(span1);
    parentNode.appendChild(span2);

    let result = parentNode.insertBefore(span3, span2);
    expect(result, span3);
    expect(parentNode.childNodes.length, 3);
    expect(parentNode.childNodes[0], span1);
    expect(parentNode.childNodes[1], span3);
    expect(parentNode.childNodes[2], span2);
});

test('insertBefore fragment', function () {
    let parentNode = new ParentNode();
    let span1 = document.createElement('span');
    let span2 = document.createElement('span');
    parentNode.appendChild(span1);
    parentNode.appendChild(span2);

    let fragment = document.createDocumentFragment();
    let span3 = document.createElement('span');
    let span4 = document.createElement('span');
    fragment.appendChild(span3);
    fragment.appendChild(span4);

    let result = parentNode.insertBefore(fragment, span1);
    expect(result, fragment);
    expect(parentNode.childNodes.length, 4);
    expect(fragment.childNodes.length, 0);
    expect(parentNode.childNodes[0], span3);
    expect(parentNode.childNodes[1], span4);
    expect(parentNode.childNodes[2], span1);
    expect(parentNode.childNodes[3], span2);
});

test('ParentNode _closestParent', function () {
    let span1 = document.createElement('span');
    let span2 = document.createElement('span');
    span1.appendChild(span2);

    expect(span2._closestParent('span'), span1);
    _proclaim2.default.isUndefined(span2._closestParent('test'));
    _proclaim2.default.isUndefined(span1._closestParent('span'));
});
//# sourceMappingURL=ParentNode.js.map