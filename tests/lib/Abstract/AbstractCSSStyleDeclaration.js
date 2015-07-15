/* global test */
'use strict';

var _get = require('babel-runtime/helpers/get').default;

var _inherits = require('babel-runtime/helpers/inherits').default;

var _classCallCheck = require('babel-runtime/helpers/class-call-check').default;

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default').default;

var _proclaim = require('proclaim');

var _proclaim2 = _interopRequireDefault(_proclaim);

const expect = _proclaim2.default.strictEqual;

const lib = '../../../lib/';

const AbstractCSSStyleDeclaration = require(lib + 'Abstract/AbstractCSSStyleDeclaration');

/** @class MockCSSStyleDeclaration */
let MockCSSStyleDeclaration = (function (_AbstractCSSStyleDeclaration) {
    _inherits(MockCSSStyleDeclaration, _AbstractCSSStyleDeclaration);

    function MockCSSStyleDeclaration() {
        _classCallCheck(this, MockCSSStyleDeclaration);

        _get(Object.getPrototypeOf(MockCSSStyleDeclaration.prototype), 'constructor', this).apply(this, arguments);
    }

    return MockCSSStyleDeclaration;
})(AbstractCSSStyleDeclaration);

test('CSSStyleDeclaration set and get cssText', function () {
    let style = new MockCSSStyleDeclaration();

    style.cssText = 'color: white; background: #FFF !important';
    expect(style.cssText, 'color:white;background:#FFF!important;');
});

test('CSSStyleDeclaration _parse', function () {
    let style = new MockCSSStyleDeclaration();

    style.cssText = 'color: white; background: #FFF !important';
    expect(style._properties.length, 2);
    _proclaim2.default.isNotNull(style._propertiesMap.color);
    _proclaim2.default.isNotNull(style._propertiesMap.background);
    expect(style._propertiesMap.color.name, 'color');
    expect(style._propertiesMap.color.value, 'white');
    expect(style._propertiesMap.color.important, false);
    expect(style._propertiesMap.background.name, 'background');
    expect(style._propertiesMap.background.value, '#FFF');
    expect(style._propertiesMap.background.important, true);
});

test('CSSStyleDeclaration _stringify', function () {
    let style = new MockCSSStyleDeclaration();

    style.cssText = 'color: white; background: #FFF !important';
    style._stringify();
    expect(style.cssText, 'color:white;background:#FFF!important;');
});

test('CSSStyleDeclaration getPropertyPriority', function () {
    let style = new MockCSSStyleDeclaration();

    style.cssText = 'color: white; background: #FFF !important';
    expect(style.getPropertyPriority('color'), false);
    expect(style.getPropertyPriority('something'), undefined);
    expect(style.getPropertyPriority('background'), 'important');
});

test('CSSStyleDeclaration getPropertyValue', function () {
    let style = new MockCSSStyleDeclaration();

    style.cssText = 'color: white; background: #FFF !important';
    expect(style.getPropertyValue('color'), 'white');
    expect(style.getPropertyValue('something'), undefined);
    expect(style.getPropertyValue('background'), '#FFF');
});

test('CSSStyleDeclaration item', function () {
    let style = new MockCSSStyleDeclaration();

    style.cssText = 'color: white; background: #FFF !important';
    expect(style.item(0), 'color');
    expect(style.item(1), 'background');
    expect(style.item(2), undefined);
});

test('CSSStyleDeclaration removeProperty', function () {
    let style = new MockCSSStyleDeclaration();

    style.cssText = 'color: white; background: #FFF !important';
    expect(style.removeProperty('color'), 'white');
    expect(style.item(0), 'background');
    expect(style.item(1), undefined);
});

test('CSSStyleDeclaration setProperty', function () {
    let style = new MockCSSStyleDeclaration();

    style.cssText = 'color: white';
    expect(style.item(0), 'color');
    expect(style.item(1), undefined);
    style.setProperty('background', '#FFF');
    expect(style.item(1), 'background');
    expect(style.getPropertyValue('background'), '#FFF');
    style.setProperty('background', '#000', 'important');
    expect(style.item(1), 'background');
    expect(style.item(2), undefined);
    expect(style.getPropertyValue('background'), '#000');
});
//# sourceMappingURL=AbstractCSSStyleDeclaration.js.map