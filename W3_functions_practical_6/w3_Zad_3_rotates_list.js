function rotates(a, b) {
    var c = [];
    for (i = b, k = 0; i < a.length; i++ , k++) {
        c[k] = a[i];
    }

    for (i = 0, k = a.length - b; i < b; i++ , k++) {
        c[k] = a[i];
    }
    return c;
}
var output = rotates([1, 2, 3, 4, 5, 6], 2);
console.log(output);