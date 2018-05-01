var sortArrays = function (a) {
    for (i = 0; i < a.length; i++) {

        var maxIndex = i;

        for (j = i + 1; j < a.length; j++) {
            if (a[j] > a[maxIndex]) {
                maxIndex = j;
            }
        }
        if (i != maxIndex) {
            var tmp = a[i];
            a[i] = a[maxIndex];
            a[maxIndex] = tmp;
        }
    }

    return a;
}
var c = [13, 11, 15, 5, 6, 1, 8, 12];
var sp = sortArrays(c);
console.log(sp);
