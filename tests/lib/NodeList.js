/* global test */
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

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
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = nodeList[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var item = _step.value;

            if (index++ == 0) {
                _proclaim2['default'].strictEqual(item, div1);
            } else {
                _proclaim2['default'].strictEqual(item, div2);
            }
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator['return']) {
                _iterator['return']();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }

    _proclaim2['default'].strictEqual(index, 2);
});
//# sourceMappingURL=NodeList.js.map