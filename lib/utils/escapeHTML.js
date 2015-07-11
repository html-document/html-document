'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});
exports['default'] = escapeHTML;

function escapeHTML(string) {
    if (!string) {
        return string;
    }

    return String(string).replace(/&(?!\w+;)/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

module.exports = exports['default'];
//# sourceMappingURL=escapeHTML.js.map