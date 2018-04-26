function conc(s, n) {
    var result = "";
    for (i = 0; i < n; i++) {
        result = result + s;
    }
    return result;

}

var a = conc("Ha", 6);
console.log(a);