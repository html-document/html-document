/* global test */
'use strict';

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

var _proclaim = require('proclaim');

var _libDocument = require('../../../lib/Document');

var _libDocument2 = _interopRequireDefault(_libDocument);

var _libUtilsQuerySelectorHelper = require('../../../lib/utils/querySelectorHelper');

var document = new _libDocument2['default']();

test('querySelector', function () {
    var div = document.createElement('div');
    div.innerHTML = '<span/><span class="a b c" data-test="test">content<span></span></span>';
    var span1 = div.children[0];
    var spanAbc = div.children[1];
    var innerSpan = div.children[1].children[0];

    (0, _proclaim.strictEqual)(div.querySelector('span'), span1);
});

test('querySelector has attribute', function () {
    var div = document.createElement('div');
    div.innerHTML = '<span/><span class="a b c" data-test="test">content<span></span></span>';
    var span1 = div.children[0];
    var spanAbc = div.children[1];
    var innerSpan = div.children[1].children[0];

    (0, _proclaim.strictEqual)(div.querySelector('span[class]'), spanAbc);
});

test('querySelector = attribute', function () {
    var div = document.createElement('div');
    div.innerHTML = '<span/><span class="a b c" data-test="test">content<span></span></span>';
    var span1 = div.children[0];
    var spanAbc = div.children[1];
    var innerSpan = div.children[1].children[0];

    (0, _proclaim.isNull)(div.querySelector('span[class="a"]'));
    (0, _proclaim.strictEqual)(div.querySelector('span[class="a b c"]'), spanAbc);
});

test('querySelectorAll', function () {
    var div = document.createElement('div');
    div.innerHTML = '<span/><span class="a b c" data-test="test">content<span></span></span>';
    var span1 = div.children[0];
    var spanAbc = div.children[1];
    var innerSpan = div.children[1].children[0];

    (0, _proclaim.deepEqual)(div.querySelectorAll('span'), [span1, spanAbc, innerSpan]);
});

test('querySelectorAll has attribute', function () {
    var div = document.createElement('div');
    div.innerHTML = '<span/><span class="a b c" data-test="test">content<span></span></span>';
    var span1 = div.children[0];
    var spanAbc = div.children[1];
    var innerSpan = div.children[1].children[0];

    (0, _proclaim.deepEqual)(div.querySelectorAll('span[class]'), [spanAbc]);
});
//# sourceMappingURL=querySelectorHelper.js.map