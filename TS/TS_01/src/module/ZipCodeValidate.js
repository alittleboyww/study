"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mainValidate = exports.ZipCodeValidate = exports.numberRegexp = void 0;
exports.numberRegexp = /^[0-9]+$/;
class ZipCodeValidate {
    isAcceptable(s) {
        return s.length === 5 && exports.numberRegexp.test(s);
    }
}
exports.ZipCodeValidate = ZipCodeValidate;
exports.mainValidate = ZipCodeValidate;
