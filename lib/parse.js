'use strict';

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
    value: true
});
exports['default'] = parse;

var _htmlparser2 = require('htmlparser2');

var _htmlparser22 = _interopRequireDefault(_htmlparser2);

/**
 * @param {string} html
 * @param {Node} node
 */
/** @function 
* @param html 
* @param node */
function parse(html, node) {
    var stack = [node];
    var last = /** @function */function last() {
        return stack.length === 0 ? null : stack[stack.length - 1];
    };

    var document = node.ownerDocument;

    var parser = new _htmlparser22['default'].Parser({
        onopentagname: /** @function 
                       * @param name */function onopentagname(name) {
            var elt = document.createElement(name);
            stack.push(elt);
        },

        onattribute: /** @function 
                     * @param name 
                     * @param value */function onattribute(name, value) {
            last().setAttribute(name, value);
        },

        ontext: /** @function 
                * @param text */function ontext(text) {
            last().appendChild(document.createTextNode(text));
        },

        onclosetag: /** @function 
                    * @param name */function onclosetag(name) {
            var elt = stack.pop();
            last().appendChild(elt);
        },

        oncomment: /** @function 
                   * @param data */function oncomment(data) {
            last().appendChild(document.createComment(data));
        }
    }, { recognizeSelfClosing: true });
    parser.write(html);
    parser.end();
}

module.exports = exports['default'];
//# sourceMappingURL=parse.js.map