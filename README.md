html-document [![NPM version][npm-image]][npm-url] [![Build Status][build-status-image]][build-status-url] [![Code Climate][code-climate-image]][code-climate-url] [![Coverage][coverage-image]][coverage-url]
============================

Partial implementation of document, HTMLElement for node

## Example

```js
import Document from 'html-document'; // or var Document = require('html-document');
const document = new Document();

var textNode = document.createTextNode('Hello');
var h1 = document.createElement('h1');
h1.setAttribute('id', 'title');

h1.appendChild(textNode);
expect(h1.outerHTML, '<h1 id="title">Hello</h1>');
```

### API

- Document
    - createComment(data)
    - createDocumentFragment()
    - createElement()
    - createTextNode()
    - getElementById(id)
    - getElementsByTagName(tagName)
    - documentElement
    - head
    - body

- HTMLElement
    - childNodes
    - parentNode
    - firstChild
    - lastChild
    - previousSibling
    - nextSibling
    - appendChild(child)
    - replaceChild(newChild, oldChild)
    - removeChild(toRemoveChild)
    - insertBefore(child, existingChild)
    - outerHTML
    - innerHTML
    - textContent
    - children
    - firstElementChild
    - lastElementChild
    - childElementCount
    - getAttribute(attributeName)
    - hasAttribute(attributeName)
    - setAttribute(attributeName, attributeValue)
    - removeAttribute(attributeName)
    - style
    - classList
    - getElementById(id)
    - getElementsByTagName(tagName)

- Text
    - textContent

- Comment
    - data

- HTMLSelectElement : HTMLElement
    - disabled: Boolean
    - length: Number
    - multiple: Number
    - name: String
    - options
    - required: Boolean
    - size: Number
    - type: String

[build-status-image]: https://circleci.com/gh/christophehurpeau/html-document.svg?style=svg
[build-status-url]: https://circleci.com/gh/christophehurpeau/html-document
[npm-image]: https://img.shields.io/npm/v/html-document.svg?style=flat
[npm-url]: https://npmjs.org/package/html-document
[coverage-image]: https://codeclimate.com/github/christophehurpeau/html-document/badges/coverage.svg
[coverage-url]: http://christophehurpeau.github.io/html-document/coverage/lcov-report/
[code-climate-image]: https://codeclimate.com/github/christophehurpeau/html-document/badges/gpa.svg
[code-climate-url]: https://codeclimate.com/github/christophehurpeau/html-document


