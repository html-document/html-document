/* global test */
'use strict';

var _getIterator = require('babel-runtime/core-js/get-iterator')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

var _proclaim = require('proclaim');

var _proclaim2 = _interopRequireDefault(_proclaim);

var lib = '../../lib/';

var Document = require(lib + 'Document');
var NodeList = require(lib + 'NodeList');

test('NodeList items', function () {
    var document = new Document();
    var div = document.createElement('div');

    var nodeList = new NodeList();

    _proclaim2['default'].strictEqual(nodeList.length, 0);
    nodeList._push(div);
    _proclaim2['default'].strictEqual(nodeList.length, 1);

    _proclaim2['default'].strictEqual(nodeList[0], div);
    _proclaim2['default'].strictEqual(nodeList[1], undefined);

    _proclaim2['default'].strictEqual(nodeList.item(0), div);
    _proclaim2['default'].strictEqual(nodeList.item(1), null);
});

test('NodeList iterator', function () {
    var document = new Document();
    var div1 = document.createElement('div');
    var div2 = document.createElement('div');

    var nodeList = new NodeList();

    nodeList._push(div1);
    nodeList._push(div2);

    _proclaim2['default'].strictEqual(nodeList[0], div1);
    _proclaim2['default'].strictEqual(nodeList[1], div2);

    var index = 0;
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

        var item = _ref;

        if (index++ == 0) {
            _proclaim2['default'].strictEqual(item, div1);
        } else {
            _proclaim2['default'].strictEqual(item, div2);
        }
    }

    _proclaim2['default'].strictEqual(index, 2);
});
//# sourceMappingURL=NodeList.js.map