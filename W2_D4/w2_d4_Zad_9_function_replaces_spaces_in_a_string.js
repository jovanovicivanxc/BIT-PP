function replSpaces(s, sep) {
    var a = "";
    for (i = 0; i < s.length; i++) {
        if (s[i] == " ") {
            if (sep != undefined) {
                a = a + sep;
            }
            else {
                a = a + "-";
            }
        }
        else {
            a = a + s[i];
        }
    }
    return a;
}

var b;
var b = replSpaces("My random string");
console.log(b);
