function lastOcc(s, l) {
    var ind = -1;
    for (i = 0; i < s.length; i++) {
        if (s[i] == l) {
            ind = i + 1;

        }
    }
    return ind;
}

var a = lastOcc("My random string", "l");
console.log(a);