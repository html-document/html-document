/* global test, document */
import assert from 'proclaim';
const expect = assert.strictEqual;

const lib = '../../lib/';

const Document = require(lib + 'Document');
const document = new Document();// jshint ignore: line

test('parse innerHTML', () => {
    const div = document.createElement('div');
    div.innerHTML = '<span/><span data-test="test">content</span>';
    expect(div.innerHTML, '<span></span><span data-test="test">content</span>');
});

test('parse nodeText', () => {
    const div = document.createElement('div');
    div.innerHTML = 'content';
    expect(div.childNodes.length, 1);
    expect(div.innerHTML, 'content');
});
