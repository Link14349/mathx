"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var stringpp_1 = require("./stringpp");
// todo To declare a lexer to parse mathx script
var Lexer = /** @class */ (function () {
    // Methods
    function Lexer(script) {
        if (script === void 0) { script = ""; }
        this.script = script;
        this.l = 0;
        this.maxi = 0;
        this.i = 0;
    }
    Lexer.prototype.open = function (script) {
        if (script === void 0) { script = ""; }
        this.script = script;
        this.l = 0;
        this.maxi = 0;
        this.i = 0;
    };
    Lexer.prototype.get = function () {
        var i = this.i;
        var token = new Token();
        for (; i < this.script.length;) {
            var ch = this.script[i++];
            if (i >= this.script.length) {
                token.t = TOKENS.PROEND;
                break;
            }
            if (ch == "\n" && this.maxi <= i)
                this.l++;
            if (stringpp_1.isSpace(ch))
                if (token.t == TOKENS.INIT)
                    continue;
                else
                    break;
            if (ch == "\\") {
                if (token.t == TOKENS.INIT) {
                    token.t = TOKENS.CONTROLL_TOKEN;
                    token.s = "";
                    while (stringpp_1.isLetter(ch = this.script[i++])) {
                        token.s += ch;
                    }
                }
                else
                    i--;
                break;
            }
            else if ((stringpp_1.isNumber(ch)) || (token.t == TOKENS.NUMBER && ch == ".")) {
                if (token.t == TOKENS.INIT) {
                    token.t = TOKENS.NUMBER;
                    token.s = ch;
                }
                else if (token.t == TOKENS.NUMBER)
                    token.s += ch;
                else {
                    i--;
                    break;
                }
            }
            else if (stringpp_1.isOp(ch)) {
                if (token.t == TOKENS.INIT) {
                    token.t = TOKENS.OP;
                    token.s = ch;
                }
                else if (token.t == TOKENS.OP && !stringpp_1.isBC(ch))
                    token.s += ch;
                else {
                    i--;
                    break;
                }
            }
            else if (stringpp_1.isLetter(ch)) {
                if (token.t == TOKENS.INIT) {
                    token.t = TOKENS.UNKNOWN;
                    token.s = ch;
                    while (stringpp_1.isLetter(ch = this.script[i++])) {
                        token.s += ch;
                    }
                }
                else {
                    i--;
                    break;
                }
            }
            else if (ch == ";") {
                if (token.t == TOKENS.INIT) {
                    token.t = TOKENS.EXPREND;
                    token.s = ";";
                }
                break;
            }
        }
        this.i = i;
        this.maxi = i;
        return token;
    };
    Object.defineProperty(Lexer.prototype, "line", {
        // Getters
        get: function () {
            return this.l;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Lexer.prototype, "index", {
        get: function () {
            return this.i;
        },
        enumerable: true,
        configurable: true
    });
    return Lexer;
}());
exports.Lexer = Lexer;
var TOKENS;
(function (TOKENS) {
    TOKENS[TOKENS["INIT"] = 0] = "INIT";
    TOKENS[TOKENS["UNKNOWN"] = 1] = "UNKNOWN";
    TOKENS[TOKENS["CONTROLL_TOKEN"] = 2] = "CONTROLL_TOKEN";
    TOKENS[TOKENS["NUMBER"] = 3] = "NUMBER";
    TOKENS[TOKENS["OP"] = 4] = "OP";
    TOKENS[TOKENS["EXPREND"] = 5] = "EXPREND";
    TOKENS[TOKENS["PROEND"] = 6] = "PROEND";
})(TOKENS || (TOKENS = {}));
exports.TOKENS = TOKENS;
var Token = /** @class */ (function () {
    // Methods
    function Token(t, s) {
        if (t === void 0) { t = TOKENS.INIT; }
        if (s === void 0) { s = ""; }
        this.t = t;
        this.s = s;
    }
    return Token;
}());
exports.Token = Token;
//# sourceMappingURL=lexer.js.map