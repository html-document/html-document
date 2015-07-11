/* global test */
import assert from 'proclaim';
const expect = assert.strictEqual;

const lib = '../../../lib/';

const HTMLElement = require(lib + 'HTMLElement');

test('ClassList add single class', () => {
    let elt = new HTMLElement();

    elt.classList.add('test');
    expect(elt.getAttribute('class'), 'test');
    expect(elt.classList.length, 1);
});

test('ClassList add existing class', () => {
    let elt = new HTMLElement();

    elt.classList.add('test');
    expect(elt.getAttribute('class'), 'test');
    elt.classList.add('test');
    expect(elt.getAttribute('class'), 'test');
});

test('ClassList add multiple class', () => {
    let elt = new HTMLElement();

    elt.classList.add('test', 'test2', 'test');
    expect(elt.getAttribute('class'), 'test test2');
    expect(elt.classList.length, 2);
});

test('ClassList remove class', () => {
    let elt = new HTMLElement();

    elt.classList.add('test');
    elt.classList.remove('test');
    expect(elt.classList.length, 0);
    expect(elt.getAttribute('class'), '');
});

test('ClassList remove multiple class', () => {
    let elt = new HTMLElement();

    elt.classList.add('test', 'test3', 'test4');
    elt.classList.remove('test2', 'test3', 'test5');
    expect(elt.getAttribute('class'), 'test test4');
});

test('ClassList toggle', () => {
    let elt = new HTMLElement();

    elt.classList.toggle('test');
    expect(elt.getAttribute('class'), 'test');
    elt.classList.toggle('test');
    expect(elt.getAttribute('class'), '');
});

test('ClassList toggle, force', () => {
    let elt = new HTMLElement();

    elt.classList.toggle('test', true);
    expect(elt.getAttribute('class'), 'test');
    elt.classList.toggle('test', true);
    expect(elt.getAttribute('class'), 'test');
    elt.classList.toggle('test', false);
    expect(elt.getAttribute('class'), '');
    elt.classList.toggle('test', false);
    expect(elt.getAttribute('class'), '');
});

test('ClassList contains', () => {
    let elt = new HTMLElement();

    expect(elt.classList.contains('test'), false);
    elt.classList.add('test');
    expect(elt.classList.contains('test'), true);
});
