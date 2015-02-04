html-document [![NPM version][npm-image]][npm-url] [![Build Status][build-status-image]][build-status-url] [![Coverage][coverage-image]][coverage-url]
============================

Partial implementation of document, HTMLElement for node

## Example

```js
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

[build-status-image]: https://drone.io/github.com/christophehurpeau/html-document/status.png
[build-status-url]: https://drone.io/github.com/christophehurpeau/html-document/latest
[npm-image]: https://img.shields.io/npm/v/html-document.svg?style=flat
[npm-url]: https://npmjs.org/package/html-document
[coverage-image]: http://img.shields.io/badge/coverage-1%-red.svg?style=flat
[coverage-url]: http://christophehurpeau.github.io/html-document/docs/coverage.html
