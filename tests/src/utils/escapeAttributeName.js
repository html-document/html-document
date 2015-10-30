/* global test */
import { strictEqual} from 'proclaim';
import { attributeNameToProperty, propertyNameToAttribute } from '../../../lib/utils/escapeAttributeName';

test('Test attributeNameToProperty', () => {
    strictEqual(attributeNameToProperty('data-other'), 'other');
    strictEqual(attributeNameToProperty('data-other-dashes'), 'otherDashes');
    strictEqual(attributeNameToProperty('data-other-dashes-more'), 'otherDashesMore');
});

test('Test propertyNameToAttribute', () => {
    strictEqual(propertyNameToAttribute('other'), 'data-other');
    strictEqual(propertyNameToAttribute('otherDashes'), 'data-other-dashes');
    strictEqual(propertyNameToAttribute('otherLongValue'), 'data-other-long-value');
});
