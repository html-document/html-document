"use strict";

var _extends = function (child, parent) {
  child.prototype = Object.create(parent.prototype, {
    constructor: {
      value: child,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  child.__proto__ = parent;
};

var Node = require("./Node").Node;
var Comment = require("./Comment").Comment;
var DocumentFragment = require("./DocumentFragment").DocumentFragment;
var HTMLElement = require("./HTMLElement").HTMLElement;
var Text = require("./Text").Text;

// HTML Elements
var HTMLOptionElement = require("./HTMLElement/elements/HTMLOptionElement").HTMLOptionElement;
var HTMLSelectElement = require("./HTMLElement/elements/HTMLSelectElement").HTMLSelectElement;

var Document = (function (Node) {
  var Document = function Document() {
    this.documentElement = this.createElement("html");
    this.head = this.createElement("head");
    this.documentElement.appendChild(this.head);
    this.body = this.createElement("body");
    this.documentElement.appendChild(this.body);
  };

  _extends(Document, Node);

  Document.prototype.createComment = function (data /* : String*/) {
    var comment = new Comment(data);
    comment.ownerDocument = this;
    return comment;
  };

  Document.prototype.createDocumentFragment = function () {
    var fragment = new DocumentFragment();
    fragment.ownerDocument = this;
    return fragment;
  };

  Document.prototype.createElement = function (name) {
    var element;
    switch (name.toLowerCase()) {
      case "select":
        element = new HTMLSelectElement();
        break;
      case "option":
        element = new HTMLOptionElement();
        break;
      default:
        element = new HTMLElement();
        element.nodeName = name;
    }
    element.ownerDocument = this;
    return element;
  };

  Document.prototype.createTextNode = function (textContent) {
    var text = new Text(textContent);
    text.ownerDocument = this;
    return text;
  };

  Document.prototype.getElementById = function (id) {
    return this.documentElement.getElementById(id);
  };

  Document.prototype.getElementsByTagName = function (tagName, _array) {
    return this.documentElement.getElementsByTagName(tagName, _array);
  };

  Document.prototype.getElementsByClassName = function (className) {
    throw new Error("Not implemented");
  };

  Document.prototype.querySelector = function () {
    throw new Error("Not implemented");
  };

  Document.prototype.querySelectorAll = function () {
    throw new Error("Not implemented");
  };

  return Document;
})(Node);

exports.Document = Document;


Object.defineProperty(Document.prototype, "nodeType", { value: Node.DOCUMENT_NODE });
//# sourceMappingURL=Document.js.map