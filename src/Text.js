var escapeHTML = require('./utils/escapeHTML');
var Node = require('./Node').Node;

export class Text extends Node {
    constructor(textContent) {
        this.value = textContent;
    }

    _toHTML() {
        return escapeHTML(this.value);
    }

    get textContent() {
        return this.value;
    }

    set textContent(textContent) {
        this.value = textContent;
    }
}
Object.defineProperty(Text.prototype, 'nodeType', { value: Node.TEXT_NODE });
Object.defineProperty(Text.prototype, 'nodeName', { value: '#text' });
