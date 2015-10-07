'use strict';

var _getIterator = require('babel-runtime/core-js/get-iterator')['default'];

Object.defineProperty(exports, '__esModule', {
    value: true
});
exports.querySelector = querySelector;
exports.querySelectorAll = querySelectorAll;

var _cssSelectorParser = require('css-selector-parser');

var cssParser = new _cssSelectorParser.CssSelectorParser();

/**
 * querySelectorHelper interface provides simple processing
 * of Element.querySelector method.
 */

/**
 *
 * @param {Element} element
 * @param {string} query
 * @returns {Element|null}
 */
/** @function 
* @param element 
* @param query */
function querySelector(element, query) {
    var rules = cssParser.parse(query);

    var iterator = processElement(element, rules);
    var next = iterator.next();

    if (next && next.value) {
        return next.value;
    }

    return null;
}

/**
  *
  * @param {Element} element
  * @param {string} query
  * @returns {Element[]}
  */
/** @function 
* @param element 
* @param query */
function querySelectorAll(element, query) {
    var rules = cssParser.parse(query);

    var result = [];
    for (var _iterator = processElement(element, rules), _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _getIterator(_iterator);;) {
        var _ref;

        if (_isArray) {
            if (_i >= _iterator.length) break;
            _ref = _iterator[_i++];
        } else {
            _i = _iterator.next();
            if (_i.done) break;
            _ref = _i.value;
        }

        var _element = _ref;

        result.push(_element);
    }

    return result;
}

/**
 * Function processes one element using current rule
 *
 * @param element
 * @param rules
 * @returns {boolean}
 
* @function 
* @param element 
* @param rules */
function* processElement(element, rules) {
    for (var _iterator2 = element.children, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _getIterator(_iterator2);;) {
        var _ref2;

        if (_isArray2) {
            if (_i2 >= _iterator2.length) break;
            _ref2 = _iterator2[_i2++];
        } else {
            _i2 = _iterator2.next();
            if (_i2.done) break;
            _ref2 = _i2.value;
        }

        var child = _ref2;

        for (var _iterator3 = processRules(child, rules), _isArray3 = Array.isArray(_iterator3), _i3 = 0, _iterator3 = _isArray3 ? _iterator3 : _getIterator(_iterator3);;) {
            var _ref3;

            if (_isArray3) {
                if (_i3 >= _iterator3.length) break;
                _ref3 = _iterator3[_i3++];
            } else {
                _i3 = _iterator3.next();
                if (_i3.done) break;
                _ref3 = _i3.value;
            }

            var matchElement = _ref3;

            yield matchElement;
        }

        for (var _iterator4 = processElement(child, rules), _isArray4 = Array.isArray(_iterator4), _i4 = 0, _iterator4 = _isArray4 ? _iterator4 : _getIterator(_iterator4);;) {
            var _ref4;

            if (_isArray4) {
                if (_i4 >= _iterator4.length) break;
                _ref4 = _iterator4[_i4++];
            } else {
                _i4 = _iterator4.next();
                if (_i4.done) break;
                _ref4 = _i4.value;
            }

            var matchElement = _ref4;

            yield matchElement;
        }
    }
}

/**
 * @param {Element} element
 * @param {Object} rules
 * @returns {boolean}
 
* @function 
* @param element 
* @param rules */
function processRules(element, rules) {
    if (rules.type === 'selectors') {
        return processSelectors(element, rules.selectors);
    } else if (rules.type === 'ruleSet') {
        return processRule(element, rules.rule);
    }
}

/**
 * @param {Element} element
 * @param {Object} rule
 * @returns {boolean}
 
* @function 
* @param element 
* @param rule */
function processRule(element, rule) {
    return processSelectors(element, [{ rule: rule }]);
}

/**
 * @param {Element} element
 * @param {Object[]} selectors
 * @returns {boolean}
 
* @function 
* @param element 
* @param selectors */
function* processSelectors(element, selectors) {
    for (var _iterator5 = selectors, _isArray5 = Array.isArray(_iterator5), _i5 = 0, _iterator5 = _isArray5 ? _iterator5 : _getIterator(_iterator5);;) {
        var _ref5;

        if (_isArray5) {
            if (_i5 >= _iterator5.length) break;
            _ref5 = _iterator5[_i5++];
        } else {
            _i5 = _iterator5.next();
            if (_i5.done) break;
            _ref5 = _i5.value;
        }

        var selector = _ref5;

        var rule = selector.rule;

        if (!matchRule(element, rule)) {
            continue;
        }

        if (!rule.hasOwnProperty('rule')) {
            yield element;
            return;
        }

        for (var _iterator6 = processElement(element, { type: 'ruleSet', rule: rule.rule }), _isArray6 = Array.isArray(_iterator6), _i6 = 0, _iterator6 = _isArray6 ? _iterator6 : _getIterator(_iterator6);;) {
            var _ref6;

            if (_isArray6) {
                if (_i6 >= _iterator6.length) break;
                _ref6 = _iterator6[_i6++];
            } else {
                _i6 = _iterator6.next();
                if (_i6.done) break;
                _ref6 = _i6.value;
            }

            var childMatch = _ref6;

            yield childMatch;
        }

        return;
    }
}

/** @function 
* @param element 
* @param rule */function matchRule(element, rule) {
    if (rule.hasOwnProperty('tagName') && element.tagName !== rule.tagName) {
        return false;
    }

    if (rule.hasOwnProperty('classNames')) {
        if (!rule.classNames.every(function (name) {
            return element.classList.contains(name);
        })) {
            return false;
        }
    }

    if (rule.hasOwnProperty('attrs')) {
        if (!rule.attrs.every(function (attr) {
            switch (attr.operator) {
                case undefined:
                    return element.hasAttribute(attr.name);
                case '=':
                    return element.getAttribute(attr.name) === attr.value;
                default:
                    throw new Error('Unsupported attribute operator ' + attr.operator);
            }
        })) {
            return false;
        }
    }

    return true;
}
//# sourceMappingURL=querySelectorHelper.js.map