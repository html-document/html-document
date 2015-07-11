/* global test */
import assert from 'proclaim';
const expect = assert.strictEqual;

const lib = '../../lib/';

const Comment = require(lib + 'Comment');

test('create a Comment Node', () => {
    let comment = new Comment('Hello');

    expect(comment.data, 'Hello');
    expect(comment.innerHTML, '');
    expect(comment.outerHTML, '<!--Hello-->');
});
