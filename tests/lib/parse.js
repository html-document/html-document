/* global test, document */
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _proclaim = require('proclaim');

var _proclaim2 = _interopRequireDefault(_proclaim);

var expect = _proclaim2['default'].strictEqual;

var lib = '../../lib/';

var Document = require(lib + 'Document');
var document = new Document(); // jshint ignore: line

test('parse innerHTML', function () {
    var div = document.createElement('div');
    div.innerHTML = '<span/><span data-test="test">content</span>';
    expect(div.innerHTML, '<span></span><span data-test="test">content</span>');
});

test('parse nodeText', function () {
    var div = document.createElement('div');
    div.innerHTML = 'content';
    expect(div.childNodes.length, 1);
    expect(div.innerHTML, 'content');
});
//# sourceMappingURL=parse.js.map