import { CssSelectorParser } from 'css-selector-parser';
const cssParser  = new CssSelectorParser();

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
export function querySelector(element, query) {
    let rules = cssParser.parse(query);

    const iterator = processElement(element, rules);
    const next = iterator.next();

    if (next && next.value) {
        return next.value;
    }

    return null;
};

/**
  *
  * @param {Element} element
  * @param {string} query
  * @returns {Element[]}
  */
export function querySelectorAll(element, query) {
    let rules = cssParser.parse(query);

    const result = [];
    for (let element of processElement(element, rules)) {
        result.push(element);
    }

    return result;
}

/**
 * Function processes one element using current rule
 *
 * @param element
 * @param rules
 * @returns {boolean}
 */
function* processElement(element, rules) {
    for (let child of element.children) {
        for (let matchElement of processRules(child, rules)) {
            yield matchElement;
        }

        for (let matchElement of processElement(child, rules)) {
            yield matchElement;
        }
    }
}

/**
 * @param {Element} element
 * @param rules
 * @returns {boolean}
 */
function processRules(element, rules) {
    if (rules.type === 'selectors') {
        return processSelectors(element, rules.selectors);
    } else if (rules.type === 'ruleSet') {
        return processRule(element, rules.rule);
    }
}

/**
 * @param {Element} element
 * @param rule
 * @returns {boolean}
 */
function processRule(element, rule) {
    return processSelectors(element, [{ rule }]);
}


/**
 * @param {Element} element
 * @param selectors
 * @returns {boolean}
 */
function* processSelectors(element, selectors) {
    for (let selector of selectors) {
        const rule = selector.rule;


        if (!matchRule(element, rule)) {
            continue;
        }

        if (!rule.hasOwnProperty('rule')) {
            yield element;
            return;
        }

        for (let childMatch of processElement(element, { type: 'ruleSet', rule: rule.rule })) {
            yield childMatch;
        }

        return;
    }
}


function matchRule(element, rule) {
    if (rule.hasOwnProperty('tagName') && element.tagName !== rule.tagName) {
        return false;
    }

    if (rule.hasOwnProperty('classNames')) {
        if (!rule.classNames.every(name => element.classList.contains(name))) {
            return false;
        }
    }

    if (rule.hasOwnProperty('attrs')) {
        if (!rule.attrs.every(attr => {
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
