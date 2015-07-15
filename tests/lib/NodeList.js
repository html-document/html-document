/* global test */
'use strict';

var _getIterator = require('babel-runtime/core-js/get-iterator').default;

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default').default;

var _proclaim = require('proclaim');

var _proclaim2 = _interopRequireDefault(_proclaim);

const lib = '../../lib/';

const Document = require(lib + 'Document');
const NodeList = require(lib + 'NodeList');

test('NodeList items', function () {
    const document = new Document();
    const div = document.createElement('div');

    const nodeList = new NodeList();

    _proclaim2.default.strictEqual(nodeList.length, 0);
    nodeList._push(div);
    _proclaim2.default.strictEqual(nodeList.length, 1);

    _proclaim2.default.strictEqual(nodeList[0], div);
    _proclaim2.default.strictEqual(nodeList[1], undefined);

    _proclaim2.default.strictEqual(nodeList.item(0), div);
    _proclaim2.default.strictEqual(nodeList.item(1), null);
});

test('NodeList iterator', function () {
    const document = new Document();
    const div1 = document.createElement('div');
    const div2 = document.createElement('div');

    const nodeList = new NodeList();

    nodeList._push(div1);
    nodeList._push(div2);

    _proclaim2.default.strictEqual(nodeList[0], div1);
    _proclaim2.default.strictEqual(nodeList[1], div2);

    let index = 0;
    for (var _iterator = nodeList, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _getIterator(_iterator);;) {
        var _ref;

        if (_isArray) {
            if (_i >= _iterator.length) break;
            _ref = _iterator[_i++];
        } else {
            _i = _iterator.next();
            if (_i.done) break;
            _ref = _i.value;
        }

        let item = _ref;

        if (index++ == 0) {
            _proclaim2.default.strictEqual(item, div1);
        } else {
            _proclaim2.default.strictEqual(item, div2);
        }
    }

    _proclaim2.default.strictEqual(index, 2);
});
//# sourceMappingURL=NodeList.js.map