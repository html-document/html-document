/* global test */
var assert = require('proclaim');
var expect = assert.strictEqual;

var lib = '../../../lib/';

var AbstractCSSStyleDeclaration = require(lib + 'Abstract/AbstractCSSStyleDeclaration').AbstractCSSStyleDeclaration;

class MockCSSStyleDeclaration extends AbstractCSSStyleDeclaration {
    constructor() {

    }
}


test('CSSStyleDeclaration set and get cssText', () => {
    var style = new MockCSSStyleDeclaration();

    style.cssText = 'color: white; background: #FFF !important';
    expect(style.cssText, 'color:white;background:#FFF!important;');
});


test('CSSStyleDeclaration _parse', () => {
    var style = new MockCSSStyleDeclaration();

    style.cssText = 'color: white; background: #FFF !important';
    expect(style._properties.length, 2);
    assert.isNotNull(style._propertiesMap.color);
    assert.isNotNull(style._propertiesMap.background);
    expect(style._propertiesMap.color.name, 'color');
    expect(style._propertiesMap.color.value, 'white');
    expect(style._propertiesMap.color.important, false);
    expect(style._propertiesMap.background.name, 'background');
    expect(style._propertiesMap.background.value, '#FFF');
    expect(style._propertiesMap.background.important, true);
});


test('CSSStyleDeclaration _stringify', () => {
    var style = new MockCSSStyleDeclaration();

    style.cssText = 'color: white; background: #FFF !important';
    style._stringify();
    expect(style.cssText, 'color:white;background:#FFF!important;');
});

test('CSSStyleDeclaration getPropertyPriority', () => {
    var style = new MockCSSStyleDeclaration();

    style.cssText = 'color: white; background: #FFF !important';
    expect(style.getPropertyPriority('color'), false);
    expect(style.getPropertyPriority('something'), undefined);
    expect(style.getPropertyPriority('background'), 'important');
});


test('CSSStyleDeclaration getPropertyValue', () => {
    var style = new MockCSSStyleDeclaration();

    style.cssText = 'color: white; background: #FFF !important';
    expect(style.getPropertyValue('color'), 'white');
    expect(style.getPropertyValue('something'), undefined);
    expect(style.getPropertyValue('background'), '#FFF');
});

test('CSSStyleDeclaration item', () => {
    var style = new MockCSSStyleDeclaration();

    style.cssText = 'color: white; background: #FFF !important';
    expect(style.item(0), 'color');
    expect(style.item(1), 'background');
    expect(style.item(2), undefined);
});

test('CSSStyleDeclaration removeProperty', () => {
    var style = new MockCSSStyleDeclaration();

    style.cssText = 'color: white; background: #FFF !important';
    expect(style.removeProperty('color'), 'white');
    expect(style.item(0), 'background');
    expect(style.item(1), undefined);
});

test('CSSStyleDeclaration setProperty', () => {
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
