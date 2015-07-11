'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});
exports['default'] = parse;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _htmlparser2 = require('htmlparser2');

var _htmlparser22 = _interopRequireDefault(_htmlparser2);

/**
 * @param {String} html
 * @param {Node} node
 */

function parse(html, node) {
    var stack = [node];
    var last = function last() {
        return stack.length === 0 ? null : stack[stack.length - 1];
    };

    var document = node.ownerDocument;

    var parser = new _htmlparser22['default'].Parser({
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
    }, { recognizeSelfClosing: true });
    parser.write(html);
    parser.end();
}

module.exports = exports['default'];
//# sourceMappingURL=parse.js.map