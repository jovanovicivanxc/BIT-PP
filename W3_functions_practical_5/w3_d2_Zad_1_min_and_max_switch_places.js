'use strict'

var switchPlaces = function (a) {
    var min = a[0];
    var indexMin = 0;
    var i;

    for (i = 1; i < a.length; i++) {
        if (a[i] < min) {
            min = a[i];
            indexMin = i;
        }
    }
    var max = a[0];
    var indexMax = 0;

    for (i = 1; i < a.length; i++) {
        if (a[i] > max) {
            max = a[i];
            indexMax = i;
        }
    }
    var tmp = a[indexMax];
    a[indexMax] = a[indexMin];
    a[indexMin] = tmp;


    return a;
}

var c = [-3, 500, 12, 149, 53, 414, 1, 19];
var sp = switchPlaces(c);
console.log(sp);
