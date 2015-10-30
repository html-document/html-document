/* global test */
'use strict';

var _proclaim = require('proclaim');

var _libUtilsEscapeAttributeName = require('../../../lib/utils/escapeAttributeName');

test('Test attributeNameToProperty', function () {
    (0, _proclaim.strictEqual)((0, _libUtilsEscapeAttributeName.attributeNameToProperty)('data-other'), 'other');
    (0, _proclaim.strictEqual)((0, _libUtilsEscapeAttributeName.attributeNameToProperty)('data-other-dashes'), 'otherDashes');
    (0, _proclaim.strictEqual)((0, _libUtilsEscapeAttributeName.attributeNameToProperty)('data-other-dashes-more'), 'otherDashesMore');
});

test('Test propertyNameToAttribute', function () {
    (0, _proclaim.strictEqual)((0, _libUtilsEscapeAttributeName.propertyNameToAttribute)('other'), 'data-other');
    (0, _proclaim.strictEqual)((0, _libUtilsEscapeAttributeName.propertyNameToAttribute)('otherDashes'), 'data-other-dashes');
    (0, _proclaim.strictEqual)((0, _libUtilsEscapeAttributeName.propertyNameToAttribute)('otherLongValue'), 'data-other-long-value');
});
//# sourceMappingURL=escapeAttributeName.js.map