"use strict";

module.exports = function (string) {
  if (!string) {
    return string;
  }
  return String(string).replace(/&(?!\w+;)/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
};
//# sourceMappingURL=../utils/escapeHTML.js.map