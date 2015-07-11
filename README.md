html-document [![NPM version][npm-image]][npm-url] [![Build Status][build-status-image]][build-status-url] [![Code Climate][code-climate-image]][code-climate-url] [![Coverage][coverage-image]][coverage-url]
============================

Partial implementation of the DOM, document for node.

## Quick example

```js
import Document from 'html-document'; // or var Document = require('html-document');
const document = new Document();

let textNode = document.createTextNode('Hello');
let h1 = document.createElement('h1');
h1.setAttribute('id', 'title');

h1.appendChild(textNode);
expect(h1.outerHTML, '<h1 id="title">Hello</h1>');
```

## Purpose

The partial implementation allows you to build html like you would in the browser, with the DOM API.

This library will never implement all specifications of the W3C.

## API

See the generated API [here](http://christophehurpeau.github.io/html-document/docs/).

## Examples

Inject `window`, `document`, `Document`, `DocumentFragment`, `Node` and `Event` [in the global scope](src/global.js).

```js
import 'html-document/lib/global'; // or var Document = require('html-document/lib/global');

let textNode = document.createTextNode('Hello');
expect(textNode.textContent, 'Hello');
```

Create an HTML layout

```js
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
```



[build-status-image]: https://circleci.com/gh/christophehurpeau/html-document.svg?style=svg
[build-status-url]: https://circleci.com/gh/christophehurpeau/html-document
[npm-image]: https://img.shields.io/npm/v/html-document.svg?style=flat
[npm-url]: https://npmjs.org/package/html-document
[coverage-image]: https://codeclimate.com/github/christophehurpeau/html-document/badges/coverage.svg
[coverage-url]: http://christophehurpeau.github.io/html-document/coverage/lcov-report/
[code-climate-image]: https://codeclimate.com/github/christophehurpeau/html-document/badges/gpa.svg
[code-climate-url]: https://codeclimate.com/github/christophehurpeau/html-document
