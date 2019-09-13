"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isSpace(ch) {
    return ch == "\t" || ch == " " || ch == "\n";
}
exports.isSpace = isSpace;
function isLetter(ch) {
    return (ch >= 'a' && ch <= 'z') || (ch >= 'A' && ch <= 'Z');
}
exports.isLetter = isLetter;
function isNumber(ch) {
    return (ch >= '0' && ch <= '9') || ch == '.';
}
exports.isNumber = isNumber;
function isOp(ch) {
    return !(isSpace(ch) || isNumber(ch) || isLetter(ch));
}
exports.isOp = isOp;
function isBC(ch) {
    return ch == "(" || ch == "[" || ch == "{" || ch == ")" || ch == "]" || ch == "}";
}
exports.isBC = isBC;
//# sourceMappingURL=stringpp.js.map