/* global test */
import assert from 'proclaim';
const expect = assert.strictEqual;

const lib = '../../../lib/';

const AbstractCSSStyleDeclaration = require(lib + 'Abstract/AbstractCSSStyleDeclaration');

class MockCSSStyleDeclaration extends AbstractCSSStyleDeclaration {
}

test('CSSStyleDeclaration set and get cssText', () => {
    let style = new MockCSSStyleDeclaration();

    style.cssText = 'color: white; background: #FFF !important';
    expect(style.cssText, 'color:white;background:#FFF!important;');
});

test('CSSStyleDeclaration _parse', () => {
    let style = new MockCSSStyleDeclaration();

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
    let style = new MockCSSStyleDeclaration();

    style.cssText = 'color: white; background: #FFF !important';
    style._stringify();
    expect(style.cssText, 'color:white;background:#FFF!important;');
});

test('CSSStyleDeclaration getPropertyPriority', () => {
    let style = new MockCSSStyleDeclaration();

    style.cssText = 'color: white; background: #FFF !important';
    expect(style.getPropertyPriority('color'), false);
    expect(style.getPropertyPriority('something'), undefined);
    expect(style.getPropertyPriority('background'), 'important');
});

test('CSSStyleDeclaration getPropertyValue', () => {
    let style = new MockCSSStyleDeclaration();

    style.cssText = 'color: white; background: #FFF !important';
    expect(style.getPropertyValue('color'), 'white');
    expect(style.getPropertyValue('something'), undefined);
    expect(style.getPropertyValue('background'), '#FFF');
});

test('CSSStyleDeclaration item', () => {
    let style = new MockCSSStyleDeclaration();

    style.cssText = 'color: white; background: #FFF !important';
    expect(style.item(0), 'color');
    expect(style.item(1), 'background');
    expect(style.item(2), undefined);
});

test('CSSStyleDeclaration removeProperty', () => {
    let style = new MockCSSStyleDeclaration();

    style.cssText = 'color: white; background: #FFF !important';
    expect(style.removeProperty('color'), 'white');
    expect(style.item(0), 'background');
    expect(style.item(1), undefined);
});

test('CSSStyleDeclaration setProperty', () => {
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
