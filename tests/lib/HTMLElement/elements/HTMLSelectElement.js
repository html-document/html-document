/* global test */
'use strict';

var _proclaim = require('proclaim');

const lib = '../../../../lib/';

const Document = require(lib + 'Document');
const HTMLSelectElement = require(lib + 'HTMLElement/elements/HTMLSelectElement');
const HTMLOptionElement = require(lib + 'HTMLElement/elements/HTMLOptionElement');

test('HTMLSelectElement shoud have the nodeName == select ', function () {
    let elt = new HTMLSelectElement();
    (0, _proclaim.strictEqual)(elt.nodeName, 'select');
});

test('HTMLSelectElement autoFocus getter', function () {
    let elt = new HTMLSelectElement();
    (0, _proclaim.isFalse)(elt.autoFocus);

    elt.setAttribute('autofocus', '');
    (0, _proclaim.isTrue)(elt.autoFocus);

    elt.removeAttribute('autofocus');
    (0, _proclaim.isFalse)(elt.autoFocus);
});

test('HTMLSelectElement autoFocus setter', function () {
    let elt = new HTMLSelectElement();
    (0, _proclaim.isFalse)(elt.autoFocus);

    elt.autoFocus = true;
    (0, _proclaim.isTrue)(elt.autoFocus);

    elt.autoFocus = false;
    (0, _proclaim.isFalse)(elt.autoFocus);
});

test('HTMLSelectElement disabled getter', function () {
    let elt = new HTMLSelectElement();
    (0, _proclaim.isFalse)(elt.disabled);

    elt.setAttribute('disabled', '');
    (0, _proclaim.isTrue)(elt.disabled);

    elt.removeAttribute('disabled');
    (0, _proclaim.isFalse)(elt.disabled);
});

test('HTMLSelectElement disabled setter', function () {
    let elt = new HTMLSelectElement();
    (0, _proclaim.isFalse)(elt.disabled);

    elt.disabled = true;
    (0, _proclaim.isTrue)(elt.disabled);

    elt.disabled = false;
    (0, _proclaim.isFalse)(elt.disabled);
});

test('HTMLSelectElement form getter', function () {
    const document = new Document();
    let elt = new HTMLSelectElement();
    let form = document.createElement('form');
    let div = document.createElement('div');

    (0, _proclaim.isNull)(elt.form);

    form.appendChild(elt);
    (0, _proclaim.strictEqual)(elt.form, form);

    form.appendChild(div);
    div.appendChild(elt);
    (0, _proclaim.strictEqual)(elt.form, form);

    form.removeChild(div);
    (0, _proclaim.isNull)(elt.form);
});

test('HTMLSelectElement form setter', function () {
    let elt = new HTMLSelectElement();
    (0, _proclaim.throws)(function () {
        return elt.form = null;
    }, 'form is read only');
});

test('HTMLSelectElement labels getter', function () {
    const document = new Document();
    let elt = document.createElement('select');
    let div = document.createElement('div');
    div.appendChild(elt);
    let label1 = document.createElement('label');
    let label2 = document.createElement('label');
    div.appendChild(label1);
    div.appendChild(label2);

    label1.setAttribute('for', 'test');
    elt.setAttribute('id', 'test');

    let labels = elt.labels;
    (0, _proclaim.strictEqual)(labels.length, 1);
    (0, _proclaim.strictEqual)(labels[0], label1);

    let div2 = document.createElement('div');
    div.appendChild(div2);
    let label3 = document.createElement('label');
    label3.setAttribute('for', 'test');
    div2.appendChild(label3);

    labels = elt.labels;
    (0, _proclaim.strictEqual)(labels.length, 2);
    (0, _proclaim.strictEqual)(labels[0], label1);
    (0, _proclaim.strictEqual)(labels[1], label3);
});

test('HTMLSelectElement length getter', function () {
    let elt = new HTMLSelectElement();
    (0, _proclaim.strictEqual)(elt.length, 0);

    let option1 = new HTMLOptionElement();
    let option2 = new HTMLOptionElement();

    elt.appendChild(option1);
    (0, _proclaim.strictEqual)(elt.length, 1);

    elt.appendChild(option2);
    (0, _proclaim.strictEqual)(elt.length, 2);

    elt.removeChild(option1);
    (0, _proclaim.strictEqual)(elt.length, 1);

    elt.removeChild(option2);
    (0, _proclaim.strictEqual)(elt.length, 0);
});

test('HTMLSelectElement length setter', function () {
    let elt = new HTMLSelectElement();
    (0, _proclaim.throws)(function () {
        return elt.length = null;
    }, 'length is read only');
});

test('HTMLSelectElement multiple getter', function () {
    let elt = new HTMLSelectElement();
    (0, _proclaim.isFalse)(elt.multiple);

    elt.setAttribute('multiple', '');
    (0, _proclaim.isTrue)(elt.multiple);

    elt.removeAttribute('multiple');
    (0, _proclaim.isFalse)(elt.multiple);
});

test('HTMLSelectElement multiple setter', function () {
    let elt = new HTMLSelectElement();
    (0, _proclaim.isFalse)(elt.multiple);

    elt.multiple = true;
    (0, _proclaim.isTrue)(elt.multiple);

    elt.multiple = false;
    (0, _proclaim.isFalse)(elt.multiple);
});

test('HTMLSelectElement name getter', function () {
    let elt = new HTMLSelectElement();
    (0, _proclaim.isNull)(elt.name);

    elt.setAttribute('name', 'test');
    (0, _proclaim.strictEqual)(elt.name, 'test');

    elt.removeAttribute('name');
    (0, _proclaim.isNull)(elt.name);
});

test('HTMLSelectElement name setter', function () {
    let elt = new HTMLSelectElement();
    (0, _proclaim.isNull)(elt.name);

    elt.name = 'test';
    (0, _proclaim.strictEqual)(elt.name, 'test');
    (0, _proclaim.strictEqual)(elt.getAttribute('name'), 'test');
});

test('HTMLSelectElement options getter', function () {
    let elt = new HTMLSelectElement();
    (0, _proclaim.strictEqual)(elt.options.length, 0);

    let option = new HTMLOptionElement();
    elt.appendChild(option);

    (0, _proclaim.strictEqual)(elt.options.length, 1);
    (0, _proclaim.strictEqual)(elt.options[0], option);
});

test('HTMLSelectElement options setter', function () {
    let elt = new HTMLSelectElement();
    (0, _proclaim.throws)(function () {
        return elt.options = null;
    }, 'options is read only');
});

test('HTMLSelectElement required getter', function () {
    let elt = new HTMLSelectElement();
    (0, _proclaim.isFalse)(elt.required);

    elt.setAttribute('required', '');
    (0, _proclaim.isTrue)(elt.required);

    elt.removeAttribute('required');
    (0, _proclaim.isFalse)(elt.required);
});

test('HTMLSelectElement required setter', function () {
    let elt = new HTMLSelectElement();
    (0, _proclaim.isFalse)(elt.required);

    elt.required = true;
    (0, _proclaim.isTrue)(elt.required);

    elt.required = false;
    (0, _proclaim.isFalse)(elt.required);
});

test('HTMLSelectElement selected getter', function () {
    let elt = new HTMLSelectElement();

    (0, _proclaim.strictEqual)(elt.selectedIndex, -1);

    let option1 = new HTMLOptionElement();
    elt.appendChild(option1);

    let option2 = new HTMLOptionElement();
    elt.appendChild(option2);

    (0, _proclaim.strictEqual)(elt.selectedIndex, 0);
    (0, _proclaim.strictEqual)(elt.selectedOption, option1);

    option1.value = 'value';
    option2.value = '';
    (0, _proclaim.strictEqual)(elt.selectedIndex, 1);
    (0, _proclaim.strictEqual)(elt.selectedOption, option2);

    option1.value = '';
    (0, _proclaim.strictEqual)(elt.selectedIndex, 0);
    (0, _proclaim.strictEqual)(elt.selectedOption, option1);

    option2.selected = true;
    (0, _proclaim.strictEqual)(elt.selectedIndex, 1);
    (0, _proclaim.strictEqual)(elt.selectedOption, option2);
});

test('HTMLSelectElement selected setter', function () {
    let elt = new HTMLSelectElement();

    (0, _proclaim.strictEqual)(elt.selectedIndex, -1);

    let option1 = new HTMLOptionElement();
    elt.appendChild(option1);

    let option2 = new HTMLOptionElement();
    elt.appendChild(option2);

    elt.selectedIndex = 1;
    (0, _proclaim.isTrue)(option2.selected);

    elt.selectedIndex = 0;
    (0, _proclaim.isTrue)(option1.selected);
    (0, _proclaim.isFalse)(option2.selected);
});

test('HTMLSelectElement size getter', function () {
    let elt = new HTMLSelectElement();

    (0, _proclaim.strictEqual)(elt.size, 1);

    elt.multiple = true;
    (0, _proclaim.strictEqual)(elt.size, 4);

    elt.setAttribute('size', 10);
    (0, _proclaim.strictEqual)(elt.size, 10);
});

test('HTMLSelectElement size setter', function () {
    let elt = new HTMLSelectElement();

    (0, _proclaim.strictEqual)(elt.size, 1);

    elt.size = 10;
    (0, _proclaim.strictEqual)(elt.size, 10);
});

test('HTMLSelectElement tabIndex', function () {
    let elt = new HTMLSelectElement();
    (0, _proclaim.throws)(function () {
        return elt.tabIndex;
    }, 'Obsolete since HTML5');
});

test('HTMLSelectElement type getter', function () {
    let elt = new HTMLSelectElement();

    (0, _proclaim.strictEqual)(elt.type, 'select-one');

    elt.multiple = true;
    (0, _proclaim.strictEqual)(elt.type, 'select-multiple');

    elt.multiple = false;
    (0, _proclaim.strictEqual)(elt.type, 'select-one');
});

test('HTMLSelectElement type setter', function () {
    let elt = new HTMLSelectElement();
    (0, _proclaim.throws)(function () {
        return elt.type = null;
    }, 'type is read only');
});
//# sourceMappingURL=HTMLSelectElement.js.map