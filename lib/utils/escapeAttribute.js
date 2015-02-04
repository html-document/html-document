"use strict";

var escapeHTML = require("./escapeHTML");
module.exports = function (string) {
  return escapeHTML(string).replace(/"/g, "&quot;");
};
//# sourceMappingURL=../utils/escapeAttribute.js.map