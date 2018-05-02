// 'use strict'

var isPalindrome = function (a) {
    var ind = 0;
    var j;
    for (var i = 0, j = a.length - 1; i < j; i++) {
        if (a[j] = " ") {
            j--;
        }
        else if (a[i] != a[j]) {
            j--;
            ind = ind + 1;
        }

    }
    if (ind == 0) {
        res = true;
    }
    else {
        res = false;
    }
    return res;
}

var c = "Geek";
var sp = isPalindrome(c);
console.log(sp);
