/**
 * Function converts attribute name "data-some-value" to "someValue".
 *
 * @param {string} name
 * @returns {string}
 */
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.attributeNameToProperty = attributeNameToProperty;
exports.propertyNameToAttribute = propertyNameToAttribute;
/** @function 
* @param name */
function attributeNameToProperty(name) {
  var result = name.replace(/^data-/i, '');
  return result.replace(/-(\w)/g, function (match, letter) {
    return letter.toUpperCase();
  });
}

/**
 * Function converts dataset property name "someValue" to "data-some-value".
 *
 * @param {string} name
 * @returns {string}
 */
/** @function 
* @param name */
function propertyNameToAttribute(name) {
  var result = name.replace(/([A-Z])/g, function (match, letter) {
    return '-' + letter.toLowerCase();
  });
  return 'data-' + result;
}
//# sourceMappingURL=escapeAttributeName.js.map