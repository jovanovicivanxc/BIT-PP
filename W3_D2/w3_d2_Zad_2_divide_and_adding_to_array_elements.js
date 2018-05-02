'use strict'

var divAndAdd = function (a) {
    var i;
    for (i = 0; i < a.length; i++) {
        a[i] = a[i] / 2 + 5;
        if (a[i] == 0) {
            a[i] = 20;
        }
    }

    return a;
}

var c = [3, 500, -10, 149, 53, 414, 1, 19];
var sp = divAndAdd(c);
console.log(sp);
