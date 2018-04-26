function isStringEmpty(s) {
    //true ako je string prazan
    //false ako string nije prazan
    if ((s) == '') {
        return true
    }
    else {
        return false
    }

}
var word = "";
var result = isStringEmpty(word);
if (result == true) {
    console.log("String je prazan");
} else {
    console.log("String nije prazan")
}
