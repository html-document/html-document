/**
 * Function converts attribute name "data-some-value" to "someValue".
 *
 * @param {string} name
 * @returns {string}
 */
function attributeNameToProperty(name) {
    let result = name.replace(/^data-/i, '');
    return result.replace(/-(\w)/g, (match, letter) => letter.toUpperCase());
}

/**
 * Function converts dataset property name "someValue" to "data-some-value".
 *
 * @param {string} name
 * @returns {string}
 */
function propertyNameToAttribute(name) {
    let result = name.replace(/([A-Z])/g, (match, letter) => '-' + letter.toLowerCase());
    return 'data-' + result;
}

export {
    attributeNameToProperty,
    propertyNameToAttribute
};
