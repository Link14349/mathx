"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./../index");
var TOKENS = index_1.Lexer.TOKENS;
var lexer = new index_1.Lexer.Lexer("ers+3{132\\froc{1234, 43})\\sum;123");
var out = "\x1B[33m[START]\x1B[0m";
while (true) {
    var t = lexer.get();
    if (t.t == TOKENS.PROEND) {
        out += ", \x1B[33m[PROGRAM-END]\x1B[0m";
        break;
    }
    else {
        switch (t.t) {
            case TOKENS.CONTROLL_TOKEN: {
                out += ", \x1B[33m[CONTROLL]\x1B[0m";
                break;
            }
            case TOKENS.UNKNOWN: {
                out += ", \x1B[33m[UNKNOWN]\x1B[0m";
                break;
            }
            case TOKENS.NUMBER: {
                out += ", \x1B[33m[NUMBER]\x1B[0m";
                break;
            }
            case TOKENS.OP: {
                out += ", \x1B[33m[OPERATOR]\x1B[0m";
                break;
            }
            case TOKENS.EXPREND: {
                out += ", \x1B[33m[EXPR-END]\x1B[0m";
                break;
            }
        }
        out += t.s;
    }
}
console.log(out);
//# sourceMappingURL=lexer.js.map