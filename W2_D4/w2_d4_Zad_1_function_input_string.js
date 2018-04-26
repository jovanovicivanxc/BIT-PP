function isString(s) {
    //true ako je s string
    //false ako s nije string
    if (typeof (s) == 'string') {
        return true
    }
    else {
        return false
    }

}
var word = 'abc';
var result = isString(word);
if (result == true) {
    console.log("It is string");
} else {
    console.log("It is not string!")
}
