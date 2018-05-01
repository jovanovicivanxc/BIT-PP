var switchPlaces = function (a) {
    var min = a[0];
    indexMin = 0;

    for (i = 1; i < a.length; i++) {
        if (a[i] < min) {
            min = a[i];
            indexMin = i;
        }
    }
    max = a[0];
    indexMax = 0;

    for (i = 1; i < a.length; i++) {
        if (a[i] > max) {
            max = a[i];
            indexMax = i;
        }
    }
    tmp = a[indexMax];
    a[indexMax] = a[indexMin];
    a[indexMin] = tmp;


    return a;
}

var c = [-3, 500, 12, 149, 53, 414, 1, 19];
var sp = switchPlaces(c);
console.log(sp);
