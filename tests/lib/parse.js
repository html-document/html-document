/* global test, document */
'use strict';

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default').default;

var _proclaim = require('proclaim');

var _proclaim2 = _interopRequireDefault(_proclaim);

const expect = _proclaim2.default.strictEqual;

const lib = '../../lib/';

const Document = require(lib + 'Document');
const document = new Document(); // jshint ignore: line

test('parse innerHTML', function () {
    const div = document.createElement('div');
    div.innerHTML = '<span/><span data-test="test">content</span>';
    expect(div.innerHTML, '<span></span><span data-test="test">content</span>');
});

test('parse nodeText', function () {
    const div = document.createElement('div');
    div.innerHTML = 'content';
    expect(div.childNodes.length, 1);
    expect(div.innerHTML, 'content');
});
//# sourceMappingURL=parse.js.map