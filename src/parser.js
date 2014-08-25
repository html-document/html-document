var htmlparser = require('htmlparser2');


exports.parse = function(html, node) {
    var stack = [ node ];
    var last = function() {
        return stack.length === 0 ? null : stack[stack.length -1];
    };
    var document = node.ownerDocument;

    var parser = new htmlparser.Parser({
        onopentagname(name) {
            var elt = document.createElement(name);
            stack.push(elt);
        },
        onattribute(name, value) {
            last().setAttribute(name, value);
        },
        ontext(text) {
            last().appendChild(document.createTextNode(text));
        },
        onclosetag(name) {
            var elt = stack.pop();
            last().appendChild(elt);
        },
        oncomment(data) {
            last().appendChild(document.createComment(data));
        }
    }, { recognizeSelfClosing: true });
    parser.write(html);
    parser.end();
};
