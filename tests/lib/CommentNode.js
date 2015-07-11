/* global test */
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _proclaim = require('proclaim');

var _proclaim2 = _interopRequireDefault(_proclaim);

var expect = _proclaim2['default'].strictEqual;

var lib = '../../lib/';

var Comment = require(lib + 'Comment');

test('create a Comment Node', function () {
    var comment = new Comment('Hello');

    expect(comment.data, 'Hello');
    expect(comment.innerHTML, '');
    expect(comment.outerHTML, '<!--Hello-->');
});
//# sourceMappingURL=CommentNode.js.map