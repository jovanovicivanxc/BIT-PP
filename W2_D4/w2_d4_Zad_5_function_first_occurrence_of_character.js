function firstOcc(s, l) {
    var ind = -1;
    for (i = 0; i < s.length; i++) {
        if (s[i] == l) {
            ind = i + 1;
            break;
        }
    }
    return ind;
}

var a = firstOcc("My random string", "y");
console.log(a);



