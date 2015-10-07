/* global test */
import { strictEqual, deepEqual, isNull } from 'proclaim';
import Document from '../../../lib/Document';
import { querySelector, querySelectorAll } from '../../../lib/utils/querySelectorHelper';

const document = new Document();

test('querySelector', () => {
    const div = document.createElement('div');
    div.innerHTML = '<span/><span class="a b c" data-test="test">content<span></span></span>';
    const span1 = div.children[0];
    const spanAbc = div.children[1];
    const innerSpan = div.children[1].children[0];


    strictEqual(div.querySelector('span'), span1);
});

test('querySelector has attribute', () => {
    const div = document.createElement('div');
    div.innerHTML = '<span/><span class="a b c" data-test="test">content<span></span></span>';
    const span1 = div.children[0];
    const spanAbc = div.children[1];
    const innerSpan = div.children[1].children[0];


    strictEqual(div.querySelector('span[class]'), spanAbc);
});

test('querySelector = attribute', () => {
    const div = document.createElement('div');
    div.innerHTML = '<span/><span class="a b c" data-test="test">content<span></span></span>';
    const span1 = div.children[0];
    const spanAbc = div.children[1];
    const innerSpan = div.children[1].children[0];


    isNull(div.querySelector('span[class="a"]'));
    strictEqual(div.querySelector('span[class="a b c"]'), spanAbc);
});

test('querySelectorAll', () => {
    const div = document.createElement('div');
    div.innerHTML = '<span/><span class="a b c" data-test="test">content<span></span></span>';
    const span1 = div.children[0];
    const spanAbc = div.children[1];
    const innerSpan = div.children[1].children[0];


    deepEqual(div.querySelectorAll('span'), [span1, spanAbc, innerSpan]);
});

test('querySelectorAll has attribute', () => {
    const div = document.createElement('div');
    div.innerHTML = '<span/><span class="a b c" data-test="test">content<span></span></span>';
    const span1 = div.children[0];
    const spanAbc = div.children[1];
    const innerSpan = div.children[1].children[0];


    deepEqual(div.querySelectorAll('span[class]'), [spanAbc]);
});
