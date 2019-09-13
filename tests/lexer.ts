import { Lexer } from "./../index"

let TOKENS = Lexer.TOKENS;

let lexer = new Lexer.Lexer("ers+3{132\\froc{1234, 43})\\sum;123");
let out: string = "\x1B[33m[START]\x1B[0m";
while (true) {
    let t = lexer.get();
    if (t.t == TOKENS.PROEND) {
        out += ", \x1B[33m[PROGRAM-END]\x1B[0m";
        break;
    } else {
        switch (t.t) {
            case TOKENS.CONTROLL_TOKEN:{
                out += ", \x1B[33m[CONTROLL]\x1B[0m";
                break;
            }
            case TOKENS.UNKNOWN:{
                out += ", \x1B[33m[UNKNOWN]\x1B[0m";
                break;
            }
            case TOKENS.NUMBER:{
                out += ", \x1B[33m[NUMBER]\x1B[0m";
                break;
            }
            case TOKENS.OP:{
                out += ", \x1B[33m[OPERATOR]\x1B[0m";
                break;
            }
            case TOKENS.EXPREND:{
                out += ", \x1B[33m[EXPR-END]\x1B[0m";
                break;
            }
        }
        out += t.s;
    }
}
console.log(out);