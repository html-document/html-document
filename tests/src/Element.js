``/* global test */
import assert from 'proclaim';

const lib = '../../lib/';

const Document = require(lib + 'Document');
const Event = require(lib + 'Event');

test('Element querySelector', () => {
    const document = new Document();
    const div = document.createElement('div');
    const span = document.createElement('span');
    const span2 = document.createElement('span');
    span.className = 'css class';
    span2.setAttribute('title', 'title');
    div.appendChild(span);
    document.body.appendChild(div);
    document.body.appendChild(span2);

    assert.strictEqual(document.body.querySelector('.css'), span);
    assert.strictEqual(span, document.body.querySelector('span.css'), span);
    assert.equal(document.body.querySelector('div.css'), null);
    console.log(document.body.querySelector('div span.css').outerHTML);
    assert.strictEqual(document.body.querySelector('div span.css'), span);
    console.log(document.body.querySelector('span[title=title]').outerHTML);
    assert.strictEqual(document.body.querySelector('span[title=title]'), span2);
});

test('Element querySelector on several selectors', () => {
    const document = new Document();
    document.body.innerHTML = '<div><span class="second">Text</span></div><i>Skip me</i><input type="text"/>';
    let element = document.body.querySelector('.first, input');
    assert.equal(element.getAttribute('type'), 'text');
});

test('Element querySelectorAll', () => {
    const document = new Document();
    document.body.innerHTML = '<div><span class="first">Text</span></div><i>Skip me</i><input type="text"/>';
    let elements = document.body.querySelectorAll('.first, input');
    assert.equal(elements.length, 2);
    assert.equal(elements[0].textContent, 'Text');
    assert.equal(elements[1].getAttribute('type'), 'text');
});

test('Element querySelectorAll for several elements', () => {
    const document = new Document();
    document.body.innerHTML = '<div>1</div><div>2</div><div>3</div><span></span><div>4</div>';
    let elements = document.body.querySelectorAll('div');
    assert.equal(elements.length, 4);
    assert.equal(elements[0].textContent, '1');
    assert.equal(elements[1].textContent, '2');
    assert.equal(elements[2].textContent, '3');
    assert.equal(elements[3].textContent, '4');
});

test('Element querySelectorAll deep several', () => {
    const document = new Document();
    document.body.innerHTML = '<div>1<div>2<div>3<span></span><div>4</div></div></div></div>';
    let elements = document.body.querySelectorAll('div');
    assert.equal(elements.length, 4);
    assert.equal(elements[0].textContent, '1234');
    assert.equal(elements[1].textContent, '234');
    assert.equal(elements[2].textContent, '34');
    assert.equal(elements[3].textContent, '4');
});
