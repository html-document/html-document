/* global test */
'use strict';

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default').default;

var _proclaim = require('proclaim');

var _proclaim2 = _interopRequireDefault(_proclaim);

const lib = '../../lib/';

const Document = require(lib + 'Document');
const Event = require(lib + 'Event');

test('Element querySelector', function () {
    const document = new Document();
    const div = document.createElement('div');
    const span = document.createElement('span');
    const span2 = document.createElement('span');
    span.className = 'css class';
    span2.setAttribute('title', 'title');
    div.appendChild(span);
    document.body.appendChild(div);
    document.body.appendChild(span2);
    _proclaim2.default.equal(span.className, 'css class');
    _proclaim2.default.deepEqual(span, document.body.querySelector('.css'));
    _proclaim2.default.deepEqual(span, document.body.querySelector('span.css'));
    _proclaim2.default.equal(null, document.body.querySelector('div.css'));
    _proclaim2.default.deepEqual(span, document.body.querySelector('div span.css'));
    _proclaim2.default.deepEqual(span2, document.body.querySelector('span[title=title]'));
});
//# sourceMappingURL=Element.js.map