'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var names = ['IndexSizeError', 'HierarchyRequestError', 'WrongDocumentError', 'InvalidCharacterError', 'NoModificationAllowedError', 'NotFoundError', 'NotSupportedError', 'InvalidStateError', 'SyntaxError', 'InvalidModificationError', 'NamespaceError', 'InvalidAccessError', 'SecurityError', 'NetworkError', 'AbortError', 'URLMismatchError', 'QuotaExceededError', 'TimeoutError', 'InvalidNodeTypeError', 'DataCloneError', 'EncodingError', 'NotReadableError'];

var exceptionCodes = {
  IndexSizeError: 1,
  HierarchyRequestError: 3,
  WrongDocumentError: 4,
  InvalidCharacterError: 5,
  NoModificationAllowedError: 7,
  NotFoundError: 8,
  NotSupportedError: 9,
  InvalidStateError: 11,
  SyntaxError: 12,
  InvalidModificationError: 13,
  NamespaceError: 14,
  InvalidAccessError: 15,
  SecurityError: 18,
  NetworkError: 19,
  AbortError: 20,
  URLMismatchError: 21,
  QuotaExceededError: 22,
  TimeoutError: 23,
  InvalidNodeTypeError: 24,
  DataCloneError: 25
};

var exceptionMessages = {
  IndexSizeError: 'The index is not in the allowed range.',
  HierarchyRequestError: 'The operation would yield an incorrect node tree.',
  WrongDocumentError: 'The object is in the wrong document.',
  InvalidCharacterError: 'The string contains invalid characters.',
  NoModificationAllowedError: 'The object can not be modified.',
  NotFoundError: 'The object can not be found here.',
  NotSupportedError: 'The operation is not supported.',
  InvalidStateError: 'The object is in an invalid state.',
  SyntaxError: 'The string did not match the expected pattern.',
  InvalidModificationError: 'The object can not be modified in this way.',
  NamespaceError: 'The operation is not allowed by Namespaces in XML.',
  InvalidAccessError: 'The object does not support the operation or argument.',
  SecurityError: 'The operation is insecure.',
  NetworkError: 'A network error occurred.',
  AbortError: 'The operation was aborted.',
  URLMismatchError: 'The given URL does not match another URL.',
  QuotaExceededError: 'The quota has been exceeded.',
  TimeoutError: 'The operation timed out.',
  InvalidNodeTypeError: 'The supplied node is incorrect or has an incorrect ancestor for this operation.',
  DataCloneError: 'The object can not be cloned.',
  EncodingError: 'The encoding operation (either encoded or decoding) failed.',
  NotReadableError: 'The I/O read operation failed.'
};

/**
 * @see https://developer.mozilla.org/en/docs/Web/API/DOMException
 * @see https://www.w3.org/TR/domcore/#exception-domexception
 * @class DOMException
 * @param {number} code
 */

var DOMException = (function () {
  /*
   * @see https://heycam.github.io/webidl/#es-DOMException-constructor-object
   */

  function DOMException(name) {
    _classCallCheck(this, DOMException);

    this._name = name;
    Error.captureStackTrace(this, DOMException);
  }

  _createClass(DOMException, [{
    key: 'code',
    get: function get() {
      return exceptionCodes[this.code] || 0;
    }
  }, {
    key: 'name',
    get: function get() {
      return this._name;
    }
  }, {
    key: 'message',
    get: function get() {
      return exceptionMessages[this.name];
    }
  }]);

  return DOMException;
})();

exports['default'] = DOMException;

/**
 * @constant {number} DOMException.INDEX_SIZE_ERR
 */
Object.defineProperty(DOMException, 'INDEX_SIZE_ERR', { enumerable: true, configurable: false, value: 1 });

/**
 * @constant {number} DOMException.DOMSTRING_SIZE_ERR
 */
Object.defineProperty(DOMException, 'DOMSTRING_SIZE_ERR', { enumerable: true, configurable: false, value: 2 });

/**
 * @constant {number} DOMException.HIERARCHY_REQUEST_ERR
 */
Object.defineProperty(DOMException, 'HIERARCHY_REQUEST_ERR', { enumerable: true, configurable: false, value: 3 });

/**
 * @constant {number} DOMException.WRONG_DOCUMENT_ERR
 */
Object.defineProperty(DOMException, 'WRONG_DOCUMENT_ERR', { enumerable: true, configurable: false, value: 4 });

/**
 * @constant {number} DOMException.INVALID_CHARACTER_ERR
 */
Object.defineProperty(DOMException, 'INVALID_CHARACTER_ERR', { enumerable: true, configurable: false, value: 5 });

/**
 * @constant {number} DOMException.NO_DATA_ALLOWED_ERR
 */
Object.defineProperty(DOMException, 'NO_DATA_ALLOWED_ERR', { enumerable: true, configurable: false, value: 6 });

/**
 * @constant {number} DOMException.NO_MODIFICATION_ALLOWED_ERR
 */
Object.defineProperty(DOMException, 'NO_MODIFICATION_ALLOWED_ERR', { enumerable: true, configurable: false, value: 7 });

/**
 * @constant {number} DOMException.NOT_FOUND_ERR
 */
Object.defineProperty(DOMException, 'NOT_FOUND_ERR', { enumerable: true, configurable: false, value: 8 });

/**
 * @constant {number} DOMException.NOT_SUPPORTED_ERR
 */
Object.defineProperty(DOMException, 'NOT_SUPPORTED_ERR', { enumerable: true, configurable: false, value: 9 });

/**
 * @constant {number} DOMException.INUSE_ATTRIBUTE_ERR
 */
Object.defineProperty(DOMException, 'INUSE_ATTRIBUTE_ERR', { enumerable: true, configurable: false, value: 10 });

/**
 * @constant {number} DOMException.INVALID_STATE_ERR
 */
Object.defineProperty(DOMException, 'INVALID_STATE_ERR', { enumerable: true, configurable: false, value: 11 });

/**
 * @constant {number} DOMException.SYNTAX_ERR
 */
Object.defineProperty(DOMException, 'SYNTAX_ERR', { enumerable: true, configurable: false, value: 12 });

/**
 * @constant {number} DOMException.INVALID_MODIFICATION_ERR
 */
Object.defineProperty(DOMException, 'INVALID_MODIFICATION_ERR', { enumerable: true, configurable: false, value: 13 });

/**
 * @constant {number} DOMException.NAMESPACE_ERR
 */
Object.defineProperty(DOMException, 'NAMESPACE_ERR', { enumerable: true, configurable: false, value: 14 });

/**
 * @constant {number} DOMException.INVALID_ACCESS_ERR
 */
Object.defineProperty(DOMException, 'INVALID_ACCESS_ERR', { enumerable: true, configurable: false, value: 15 });

/**
 * @constant {number} DOMException.VALIDATION_ERR
 */
Object.defineProperty(DOMException, 'VALIDATION_ERR', { enumerable: true, configurable: false, value: 16 });

/**
 * @constant {number} DOMException.TYPE_MISMATCH_ERR
 */
Object.defineProperty(DOMException, 'TYPE_MISMATCH_ERR', { enumerable: true, configurable: false, value: 17 });

/**
 * @constant {number} DOMException.SECURITY_ERR
 */
Object.defineProperty(DOMException, 'SECURITY_ERR', { enumerable: true, configurable: false, value: 18 });

/**
 * @constant {number} DOMException.NETWORK_ERR
 */
Object.defineProperty(DOMException, 'NETWORK_ERR', { enumerable: true, configurable: false, value: 19 });

/**
 * @constant {number} DOMException.ABORT_ERR
 */
Object.defineProperty(DOMException, 'ABORT_ERR', { enumerable: true, configurable: false, value: 20 });

/**
 * @constant {number} DOMException.URL_MISMATCH_ERR
 */
Object.defineProperty(DOMException, 'URL_MISMATCH_ERR', { enumerable: true, configurable: false, value: 21 });

/**
 * @constant {number} DOMException.QUOTA_EXCEEDED_ERR
 */
Object.defineProperty(DOMException, 'QUOTA_EXCEEDED_ERR', { enumerable: true, configurable: false, value: 22 });

/**
 * @constant {number} DOMException.TIMEOUT_ERR
 */
Object.defineProperty(DOMException, 'TIMEOUT_ERR', { enumerable: true, configurable: false, value: 23 });

/**
 * @constant {number} DOMException.INVALID_NODE_TYPE_ERR
 */
Object.defineProperty(DOMException, 'INVALID_NODE_TYPE_ERR', { enumerable: true, configurable: false, value: 24 });

/**
 * @constant {number} DOMException.DATA_CLONE_ERR
 */
Object.defineProperty(DOMException, 'DATA_CLONE_ERR', { enumerable: true, configurable: false, value: 25 });
module.exports = exports['default'];
//# sourceMappingURL=DOMException.js.map