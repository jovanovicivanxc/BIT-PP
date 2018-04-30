function joinElem(a) {
    var b = [];
    for (i = 0, j = 0; i < a.length; i++) {
        if (isFinite(a[i]) && typeof (a[i]) != "boolean" && typeof (a[i]) != "object" && a[i] != 0) {
            b[j] = a[i];
            j++;
        }
    }
    return b;
}
var c = joinElem([NaN, 0, 15, false, -22, '', undefined, 47, null]);
console.log(c);
