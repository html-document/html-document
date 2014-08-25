html-document
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
