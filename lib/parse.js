'use strict';

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default').default;

Object.defineProperty(exports, '__esModule', {
    value: true
});
exports.default = parse;

var _htmlparser2 = require('htmlparser2');

var _htmlparser22 = _interopRequireDefault(_htmlparser2);

/**
 * @param {String} html
 * @param {Node} node
 */
/** @function 
* @param html 
* @param node */
function parse(html, node) {
    const stack = [node];
    const last = /** @function */function last() {
        return stack.length === 0 ? null : stack[stack.length - 1];
    };

    const document = node.ownerDocument;

    const parser = new _htmlparser22.default.Parser({
        onopentagname(name) {
            const elt = document.createElement(name);
            stack.push(elt);
        },

        onattribute(name, value) {
            last().setAttribute(name, value);
        },

        ontext(text) {
            last().appendChild(document.createTextNode(text));
        },

        onclosetag(name) {
            const elt = stack.pop();
            last().appendChild(elt);
        },

        oncomment(data) {
            last().appendChild(document.createComment(data));
        }
    }, { recognizeSelfClosing: true });
    parser.write(html);
    parser.end();
}

module.exports = exports.default;
//# sourceMappingURL=parse.js.map