/* global test */
var assert = require('proclaim');
var expect = assert.strictEqual;
var lib = '../../lib/';

var Document = require(lib + 'Document').Document;

test('create a Text Node', () => {
  var document = new Document();
  var textNode = document.createTextNode('Hello');

  expect(textNode.textContent, 'Hello');
});

test('create an HTMLElement', () => {
  var document = new Document();
  var h1 = document.createElement('h1');
  expect(h1.outerHTML, '<h1></h1>');
  expect(h1.innerHTML, '');
  expect(h1.textContent, '');
});


test('create an element and add nodes inside', () => {
  var document = new Document();
  var textNode = document.createTextNode('Hello');
  var h1 = document.createElement('h1');
  h1.setAttribute('id', 'title');

  h1.appendChild(textNode);
  expect(h1.outerHTML, '<h1 id="title">Hello</h1>');
  expect(h1.innerHTML, 'Hello');
  expect(h1.textContent, 'Hello');

  var span = document.createElement('span');
  h1.appendChild(span);
  expect(h1.outerHTML, '<h1 id="title">Hello<span></span></h1>');
  expect(h1.innerHTML, 'Hello<span></span>');
  expect(h1.textContent, 'Hello');
});
