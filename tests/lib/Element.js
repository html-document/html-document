'use strict';

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

/* global test */

var _proclaim = require('proclaim');

var _proclaim2 = _interopRequireDefault(_proclaim);

'';

var lib = '../../lib/';

var Document = require(lib + 'Document');
var Event = require(lib + 'Event');

test('Element querySelector', function () {
    var document = new Document();
    var div = document.createElement('div');
    var span = document.createElement('span');
    var span2 = document.createElement('span');
    span.className = 'css class';
    span2.setAttribute('title', 'title');
    div.appendChild(span);
    document.body.appendChild(div);
    document.body.appendChild(span2);

    _proclaim2['default'].strictEqual(document.body.querySelector('.css'), span);
    _proclaim2['default'].strictEqual(span, document.body.querySelector('span.css'), span);
    _proclaim2['default'].equal(document.body.querySelector('div.css'), null);
    console.log(document.body.querySelector('div span.css').outerHTML);
    _proclaim2['default'].strictEqual(document.body.querySelector('div span.css'), span);
    console.log(document.body.querySelector('span[title=title]').outerHTML);
    _proclaim2['default'].strictEqual(document.body.querySelector('span[title=title]'), span2);
});

test('Element querySelector on several selectors', function () {
    var document = new Document();
    document.body.innerHTML = '<div><span class="second">Text</span></div><i>Skip me</i><input type="text"/>';
    var element = document.body.querySelector('.first, input');
    _proclaim2['default'].equal(element.getAttribute('type'), 'text');
});

test('Element querySelectorAll', function () {
    var document = new Document();
    document.body.innerHTML = '<div><span class="first">Text</span></div><i>Skip me</i><input type="text"/>';
    var elements = document.body.querySelectorAll('.first, input');
    _proclaim2['default'].equal(elements.length, 2);
    _proclaim2['default'].equal(elements[0].textContent, 'Text');
    _proclaim2['default'].equal(elements[1].getAttribute('type'), 'text');
});

test('Element querySelectorAll for several elements', function () {
    var document = new Document();
    document.body.innerHTML = '<div>1</div><div>2</div><div>3</div><span></span><div>4</div>';
    var elements = document.body.querySelectorAll('div');
    _proclaim2['default'].equal(elements.length, 4);
    _proclaim2['default'].equal(elements[0].textContent, '1');
    _proclaim2['default'].equal(elements[1].textContent, '2');
    _proclaim2['default'].equal(elements[2].textContent, '3');
    _proclaim2['default'].equal(elements[3].textContent, '4');
});

test('Element querySelectorAll deep several', function () {
    var document = new Document();
    document.body.innerHTML = '<div>1<div>2<div>3<span></span><div>4</div></div></div></div>';
    var elements = document.body.querySelectorAll('div');
    _proclaim2['default'].equal(elements.length, 4);
    _proclaim2['default'].equal(elements[0].textContent, '1234');
    _proclaim2['default'].equal(elements[1].textContent, '234');
    _proclaim2['default'].equal(elements[2].textContent, '34');
    _proclaim2['default'].equal(elements[3].textContent, '4');
});
//# sourceMappingURL=Element.js.map