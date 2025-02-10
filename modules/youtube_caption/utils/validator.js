"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.check_json = void 0;
exports.check_json = (function () {
    var _io0 = function (input) {
        return 'string' === typeof input.url &&
            'object' === typeof input.lang &&
            null !== input.lang &&
            _io1(input.lang) &&
            'boolean' === typeof input.is_translatable &&
            'boolean' === typeof input.is_auto_generated;
    };
    var _io1 = function (input) {
        return 'string' === typeof input.code && 'string' === typeof input.text;
    };
    return function (input) { return 'object' === typeof input && null !== input && _io0(input); };
})();
