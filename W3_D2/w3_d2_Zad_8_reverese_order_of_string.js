var reverseOrder = function (a) {
    var b = ""
    for (i = 0, j = a.length - 1; i < a.length, j >= 0; i++ , j--) {
        var tmp = a[j];
        a[j] = b[i];
        b[i] = tmp;
        b = b + tmp;
    }
    return b;
}
var c = 'Belgrade Institute of Technology';
var sp = reverseOrder(c);
console.log(sp);
