/* global test */
import assert from 'proclaim';
const expect = assert.strictEqual;

const lib = '../../lib/';

const Document = require(lib + 'Document');
const Doctype = require(lib + 'Doctype');

test('create a Text Node', () => {
    let document = new Document();
    let textNode = document.createTextNode('Hello');

    expect(textNode.textContent, 'Hello');
});

test('create an HTMLElement', () => {
    let document = new Document();
    let h1 = document.createElement('h1');
    expect(h1.outerHTML, '<h1></h1>');
    expect(h1.innerHTML, '');
    expect(h1.textContent, '');
});

test('create an element and add nodes inside', () => {
    let document = new Document();
    let textNode = document.createTextNode('Hello');
    let h1 = document.createElement('h1');
    h1.setAttribute('id', 'title');

    h1.appendChild(textNode);
    expect(h1.outerHTML, '<h1 id="title">Hello</h1>');
    expect(h1.innerHTML, 'Hello');
    expect(h1.textContent, 'Hello');

    let span = document.createElement('span');
    h1.appendChild(span);
    expect(h1.outerHTML, '<h1 id="title">Hello<span></span></h1>');
    expect(h1.innerHTML, 'Hello<span></span>');
    expect(h1.textContent, 'Hello');
});

test('create elements without content', () => {
    let document = new Document();
    let span = document.createElement('span');
    let textNode1 = document.createTextNode('Hello1');
    let textNode2 = document.createTextNode('Hello2');
    let br1 = document.createElement('br');
    let br2 = document.createElement('br');
    br2.setAttribute('class', 'test');

    span.appendChild(textNode1);
    span.appendChild(br1);
    span.appendChild(br2);
    span.appendChild(textNode2);
    expect(span.outerHTML, '<span>' + span.innerHTML + '</span>');
    expect(span.innerHTML, 'Hello1<br><br class="test">Hello2');
});

test('create a html layout', () => {
    let document = new Document();
    let fragment = document.createDocumentFragment();
    fragment.appendChild(new Doctype());
    let html = document.createElement('html');
    fragment.appendChild(html);
    let head = document.createElement('head');
    html.appendChild(head);
    let body = document.createElement('body');
    html.appendChild(body);
    expect(fragment.innerHTML, '<!DOCTYPE html><html><head></head><body></body></html>');
});

test('process query selector', () => {
    let document = new Document();
    document.body.innerHTML = '<div><span class="second">Text</span></div><i>Skip me</i><input type="text"/>';
    let element = document.querySelector('.first, input');
    assert.equal(element.getAttribute('type'), 'text');
});

test('process query selector all', () => {
    let document = new Document();
    document.body.innerHTML = '<div><span class="first">Text</span></div><i>Skip me</i><input type="text"/>';
    let elements = document.querySelectorAll('.first, input');
    assert.equal(elements.length, 2);
    assert.equal(elements[0].textContent, 'Text');
    assert.equal(elements[1].getAttribute('type'), 'text');
});

test('process textContent', () => {
    let document = new Document();
    document.body.innerHTML = '<div><span class="first">Text</span></div><i>Skip me</i><input type="text"/>';
    assert.isNull(document.textContent);
});
