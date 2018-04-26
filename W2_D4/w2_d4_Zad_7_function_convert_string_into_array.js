function stringToArray(s) {
    var a = [];

    for (i = 0; i < s.length; i++) {
        if (s[i] === " ") {
            a[i] = null;
        } else {
            a[i] = s[i];
        }
    }

    return a;
}
var a = stringToArray("My random string");
console.log(a);