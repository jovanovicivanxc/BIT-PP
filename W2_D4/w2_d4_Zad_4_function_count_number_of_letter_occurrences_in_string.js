function numOfOcc(s, l) {
    var ind = 0;
    for (var i = 0; i < s.length; i++) {
        if (s[i] == l) {
            ind = ind + 1;
        }
    }
    return ind;
}

var a = numOfOcc("My random string", "n");
console.log(a);
