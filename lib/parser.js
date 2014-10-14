"use strict";
var htmlparser = require('htmlparser2');
exports.parse = function(html, node) {
  var stack = [node];
  var last = function() {
    return stack.length === 0 ? null : stack[stack.length - 1];
  };
  var document = node.ownerDocument;
  var parser = new htmlparser.Parser({
    onopentagname: function onopentagname(name) {
      var elt = document.createElement(name);
      stack.push(elt);
    },
    onattribute: function onattribute(name, value) {
      last().setAttribute(name, value);
    },
    ontext: function ontext(text) {
      last().appendChild(document.createTextNode(text));
    },
    onclosetag: function onclosetag(name) {
      var elt = stack.pop();
      last().appendChild(elt);
    },
    oncomment: function oncomment(data) {
      last().appendChild(document.createComment(data));
    }
  }, {recognizeSelfClosing: true});
  parser.write(html);
  parser.end();
};

//# sourceMappingURL=parser.js.map