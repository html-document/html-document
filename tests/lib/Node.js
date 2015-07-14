/* global test */
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _proclaim = require('proclaim');

var _proclaim2 = _interopRequireDefault(_proclaim);

var lib = '../../lib/';

var Document = require(lib + 'Document');
var Event = require(lib + 'Event');

test('Node attributes', function () {
    var document = new Document();
    var div = document.createElement('div');
    _proclaim2['default'].isUndefined(div.getAttribute('id'));
    _proclaim2['default'].isFalse(div.hasAttribute('id'));
    div.setAttribute('id', 'testid');
    _proclaim2['default'].strictEqual(div.getAttribute('id'), 'testid');
    _proclaim2['default'].isTrue(div.hasAttribute('id'));
    _proclaim2['default'].strictEqual(div.outerHTML, '<div id="testid"></div>');
});

test('Node events attach', function () {
    var document = new Document();
    var div = document.createElement('div');
    div.addEventListener('click', function () {}, true);
    _proclaim2['default'].isTrue(div.hasOwnProperty('_eventsCapturingPhase'));
    _proclaim2['default'].isTrue(div._eventsCapturingPhase.has('click'));
    _proclaim2['default'].strictEqual(div._eventsCapturingPhase.get('click').length, 1);
});

test('Node events remove', function () {
    var document = new Document();
    var div = document.createElement('div');

    function handler() {}

    div.addEventListener('click', handler, true);
    _proclaim2['default'].isTrue(div.hasOwnProperty('_eventsCapturingPhase'));
    _proclaim2['default'].isTrue(div._eventsCapturingPhase.has('click'));
    _proclaim2['default'].strictEqual(div._eventsCapturingPhase.get('click').length, 1);
    div.removeEventListener('click', handler, true);
    _proclaim2['default'].isTrue(div.hasOwnProperty('_eventsCapturingPhase'));
    _proclaim2['default'].isTrue(div._eventsCapturingPhase.has('click'));
    _proclaim2['default'].strictEqual(div._eventsCapturingPhase.get('click').length, 0);
});

test('Node events type normalize', function () {
    var document = new Document();
    var div = document.createElement('div');

    function handler() {}

    div.addEventListener('DOMLoadReady', handler, true);
    _proclaim2['default'].isTrue(div.hasOwnProperty('_eventsCapturingPhase'));
    _proclaim2['default'].isTrue(div._eventsCapturingPhase.has('domloadready'));
});

test('Node event dispatch', function () {
    var document = new Document();
    var div = document.createElement('div');
    var event = new Event('DOMLoadReady');

    function handler(e) {
        _proclaim2['default'].equal(e.type, 'domloadready');
        _proclaim2['default'].equal(e.target, div);
    }

    div.addEventListener('DOMLoadReady', handler, true);
    _proclaim2['default'].isTrue(div.hasOwnProperty('_eventsCapturingPhase'));
    _proclaim2['default'].isTrue(div._eventsCapturingPhase.has('domloadready'));
    div.dispatchEvent(event);
});
//# sourceMappingURL=Node.js.map