/* global test */
import assert from 'proclaim';

const lib = '../../lib/';

const Document = require(lib + 'Document');
const Event = require(lib + 'Event');

test('Element querySelector', () => {
    const document = new Document();
    const div = document.createElement('div');
    const span = document.createElement('span');
    const span2 = document.createElement('span');
    span.className = 'css class';
    span2.setAttribute('title', 'title');
    div.appendChild(span);
    document.body.appendChild(div);
    document.body.appendChild(span2);
    assert.equal(span.className, 'css class');
    assert.deepEqual(span, document.body.querySelector('.css'));
    assert.deepEqual(span, document.body.querySelector('span.css'));
    assert.equal(null, document.body.querySelector('div.css'));
    assert.deepEqual(span, document.body.querySelector('div span.css'));
    assert.deepEqual(span2, document.body.querySelector('span[title=title]'));
});
