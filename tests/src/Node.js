/* global test */
import assert from 'proclaim';

const lib = '../../lib/';

const Document = require(lib + 'Document');
const Event = require(lib + 'Event');

test('Node attributes', () => {
    const document = new Document();
    const div = document.createElement('div');
    assert.isUndefined(div.getAttribute('id'));
    assert.isFalse(div.hasAttribute('id'));
    div.setAttribute('id', 'testid');
    assert.strictEqual(div.getAttribute('id'), 'testid');
    assert.isTrue(div.hasAttribute('id'));
    assert.strictEqual(div.outerHTML, '<div id="testid"></div>');
});

test('Node events attach', () => {
    const document = new Document();
    const div = document.createElement('div');
    div.addEventListener('click', () => {}, true);
    assert.isTrue(div.hasOwnProperty('_eventsCapturingPhase'));
    assert.isTrue(div._eventsCapturingPhase.has('click'));
    assert.strictEqual(div._eventsCapturingPhase.get('click').length, 1);
});

test('Node events remove', () => {
    const document = new Document();
    const div = document.createElement('div');

    function handler() {}

    div.addEventListener('click', handler, true);
    assert.isTrue(div.hasOwnProperty('_eventsCapturingPhase'));
    assert.isTrue(div._eventsCapturingPhase.has('click'));
    assert.strictEqual(div._eventsCapturingPhase.get('click').length, 1);
    div.removeEventListener('click', handler, true);
    assert.isTrue(div.hasOwnProperty('_eventsCapturingPhase'));
    assert.isTrue(div._eventsCapturingPhase.has('click'));
    assert.strictEqual(div._eventsCapturingPhase.get('click').length, 0);
});

test('Node events type normalize', () => {
    const document = new Document();
    const div = document.createElement('div');

    function handler() {}

    div.addEventListener('DOMLoadReady', handler, true);
    assert.isTrue(div.hasOwnProperty('_eventsCapturingPhase'));
    assert.isTrue(div._eventsCapturingPhase.has('domloadready'));
});

test('Node event dispatch', () => {
    const document = new Document();
    const div = document.createElement('div');
    const event = new Event('DOMLoadReady');

    function handler(e) {
        assert.equal(e.type, 'domloadready');
        assert.equal(e.target, div);
    }

    div.addEventListener('DOMLoadReady', handler, true);
    assert.isTrue(div.hasOwnProperty('_eventsCapturingPhase'));
    assert.isTrue(div._eventsCapturingPhase.has('domloadready'));
    div.dispatchEvent(event);
});
