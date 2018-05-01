var sortArrays = function (a) {
    for (i = 0; i < a.length; i++) {

        var minIndex = i;

        for (j = i + 1; j < a.length; j++) {
            if (a[j] < a[minIndex]) {
                minIndex = j;
            }
        }
        if (i != minIndex) {
            var tmp = a[i];
            a[i] = a[minIndex];
            a[minIndex] = tmp;
        }
    }
    for (i = 0; i < a.length; i++) {
        a[i] = a[i] * 2;
    }
    return a;
}
var c = [13, 11, 15, 5, 6, 1, 8, 12];
var sp = sortArrays(c);
console.log(sp);
