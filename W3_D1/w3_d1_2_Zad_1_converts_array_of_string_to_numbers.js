function convArray(a) {
    b = [];
    for (i = 0, j = 0; i < a.length; i++) {
        if (isFinite(a[i])) {
            b[j] = parseFloat(a[i]);
            j++;
        }
    }

    return b;
}

var c = convArray(["1", "21", undefined, "42", "1e+3", Infinity]);
console.log(c);