export function isSpace(ch) : boolean {
    return ch == "\t" || ch == " " || ch == "\n";
}
export function isLetter(ch) : boolean {
    return (ch >= 'a' && ch <= 'z') || (ch >= 'A' && ch <= 'Z');
}
export function isNumber(ch) : boolean {
    return (ch >= '0' && ch <= '9') || ch == '.';
}
export function isOp(ch) : boolean {
    return !(isSpace(ch) || isNumber(ch) || isLetter(ch));
}
export function isBC(ch) : boolean {
    return ch == "(" || ch == "[" || ch == "{" || ch == ")" || ch == "]" || ch == "}";
}