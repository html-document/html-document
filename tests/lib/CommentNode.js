/* global test */
'use strict';

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

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