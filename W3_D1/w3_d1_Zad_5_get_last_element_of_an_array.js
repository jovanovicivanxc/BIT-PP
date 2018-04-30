function getLast(a, n) {
    var b = [];
    if (n == undefined) {
        n = 1;
    }
    for (var i = a.length - n, j = 0; i < a.length; i++) {
        b[j] = a[i];
        j++;
    }
    return b;
}




var res = getLast([7, 9, 0, 2], 4);
console.log(res);
