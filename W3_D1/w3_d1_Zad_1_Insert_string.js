function insertString(s, w, p) {
    var a = "";
    for (i = 0; i < p; i++) {
        a = a + s[i];
    }
    for (i = p, j = 0; j < w.length; i++ , j++) {
        a = a + w[j];
    }
    for (i = p; i < s.length; i++) {
        a = a + s[i];
    }
    return a;
}
console.log(insertString("My random string", "JS", 10));