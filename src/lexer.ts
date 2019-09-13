import { isSpace, isLetter, isNumber, isOp, isBC } from "./stringpp"

// todo To declare a lexer to parse mathx script
export class Lexer {
    // Methods
    constructor(script: string = "") {
        this.script = script;
        this.l = 0;
        this.maxi = 0;
        this.i = 0;
    }
    open(script: string = "") {
        this.script = script;
        this.l = 0;
        this.maxi = 0;
        this.i = 0;
    }
    get() : Token {
        let i = this.i;
        let token : Token = new Token();
        for (; i < this.script.length;) {
            let ch = this.script[i++];
            if (i >= this.script.length) {
                token.t = TOKENS.PROEND;
                break;
            }
            if (ch == "\n" && this.maxi <= i) this.l++;
            if (isSpace(ch))
                if (token.t == TOKENS.INIT) continue;
                else break;
            if (ch == "\\") {
                if (token.t == TOKENS.INIT) {
                    token.t = TOKENS.CONTROLL_TOKEN;
                    token.s = "";
                    while (isLetter(ch = this.script[i++])) {
                        token.s += ch;
                    }
                } else i--;
                break;
            } else if ((isNumber(ch)) || (token.t == TOKENS.NUMBER && ch == ".")) {
                if (token.t == TOKENS.INIT) {
                    token.t = TOKENS.NUMBER;
                    token.s = ch;
                } else if (token.t == TOKENS.NUMBER) token.s += ch;
                else { i--;break; }
            } else if (isOp(ch)) {
                if (token.t == TOKENS.INIT) {
                    token.t = TOKENS.OP;
                    token.s = ch;
                } else if (token.t == TOKENS.OP && !isBC(ch)) token.s += ch;
                else { i--;break; }
            } else if (isLetter(ch)) {
                if (token.t == TOKENS.INIT) {
                    token.t = TOKENS.UNKNOWN;
                    token.s = ch;
                    while (isLetter(ch = this.script[i++])) {
                        token.s += ch;
                    }
                } else { i--;break; }
            } else if (ch == ";") {
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
    }

    // Getters
    get line() {
        return this.l;
    }
    get index() {
        return this.i;
    }

    // Properties
    private l: number;
    private maxi: number;
    private i: number;
    private script: string;
}

enum TOKENS {
    INIT, UNKNOWN, CONTROLL_TOKEN, NUMBER, OP,
    EXPREND, PROEND
}

class Token {
    // Methods
    constructor(t: TOKENS = TOKENS.INIT, s: string = "") {
        this.t = t;
        this.s = s;
    }

    // Properties
    t: TOKENS;
    s: string;
}

export {TOKENS, Token};