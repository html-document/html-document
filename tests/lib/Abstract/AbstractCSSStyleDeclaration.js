/* global test */
'use strict';

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _proclaim = require('proclaim');

var _proclaim2 = _interopRequireDefault(_proclaim);

var expect = _proclaim2['default'].strictEqual;

var lib = '../../../lib/';

var AbstractCSSStyleDeclaration = require(lib + 'Abstract/AbstractCSSStyleDeclaration');

var MockCSSStyleDeclaration = (function (_AbstractCSSStyleDeclaration) {
    function MockCSSStyleDeclaration() {
        _classCallCheck(this, MockCSSStyleDeclaration);

        _get(Object.getPrototypeOf(MockCSSStyleDeclaration.prototype), 'constructor', this).apply(this, arguments);
    }

    _inherits(MockCSSStyleDeclaration, _AbstractCSSStyleDeclaration);

    return MockCSSStyleDeclaration;
})(AbstractCSSStyleDeclaration);

test('CSSStyleDeclaration set and get cssText', function () {
    var style = new MockCSSStyleDeclaration();

    style.cssText = 'color: white; background: #FFF !important';
    expect(style.cssText, 'color:white;background:#FFF!important;');
});

test('CSSStyleDeclaration _parse', function () {
    var style = new MockCSSStyleDeclaration();

    style.cssText = 'color: white; background: #FFF !important';
    expect(style._properties.length, 2);
    _proclaim2['default'].isNotNull(style._propertiesMap.color);
    _proclaim2['default'].isNotNull(style._propertiesMap.background);
    expect(style._propertiesMap.color.name, 'color');
    expect(style._propertiesMap.color.value, 'white');
    expect(style._propertiesMap.color.important, false);
    expect(style._propertiesMap.background.name, 'background');
    expect(style._propertiesMap.background.value, '#FFF');
    expect(style._propertiesMap.background.important, true);
});

test('CSSStyleDeclaration _stringify', function () {
    var style = new MockCSSStyleDeclaration();

    style.cssText = 'color: white; background: #FFF !important';
    style._stringify();
    expect(style.cssText, 'color:white;background:#FFF!important;');
});

test('CSSStyleDeclaration getPropertyPriority', function () {
    var style = new MockCSSStyleDeclaration();

    style.cssText = 'color: white; background: #FFF !important';
    expect(style.getPropertyPriority('color'), false);
    expect(style.getPropertyPriority('something'), undefined);
    expect(style.getPropertyPriority('background'), 'important');
});

test('CSSStyleDeclaration getPropertyValue', function () {
    var style = new MockCSSStyleDeclaration();

    style.cssText = 'color: white; background: #FFF !important';
    expect(style.getPropertyValue('color'), 'white');
    expect(style.getPropertyValue('something'), undefined);
    expect(style.getPropertyValue('background'), '#FFF');
});

test('CSSStyleDeclaration item', function () {
    var style = new MockCSSStyleDeclaration();

    style.cssText = 'color: white; background: #FFF !important';
    expect(style.item(0), 'color');
    expect(style.item(1), 'background');
    expect(style.item(2), undefined);
});

test('CSSStyleDeclaration removeProperty', function () {
    var style = new MockCSSStyleDeclaration();

    style.cssText = 'color: white; background: #FFF !important';
    expect(style.removeProperty('color'), 'white');
    expect(style.item(0), 'background');
    expect(style.item(1), undefined);
});

test('CSSStyleDeclaration setProperty', function () {
    var style = new MockCSSStyleDeclaration();

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