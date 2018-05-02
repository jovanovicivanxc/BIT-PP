'use strict'

var twoArrays = function (a, b) {
    var mark;
    var sent = "";
    var i;

    for (i = 0; i < a.length; i++) {

        if (b[i] < 51) {
            mark = "failed to complete the exam";
        }
        else if (b[i] < 61) {
            mark = "earned 6";
        }
        else if (b[i] < 71) {
            mark = "earned 7";
        }
        else if (b[i] < 81) {
            mark = "earned 8";
        }
        else if (b[i] < 91) {
            mark = "earned 9";
        }
        else if (b[i] <= 100) {
            mark = "earned 10";
        }
        else
            mark = "Wrong input!";

        sent += a[i] + " acquired " + b[i] + " points and " + mark + ".\n";
    }


    return sent;
}

var c = ["Micahel", "Anne", "Frank", "Joe", "John", "David", "Mark", "Bill"];
var d = [50, 39, 63, 72, 99, 51, 83, 59];
var sp = twoArrays(c, d);
console.log(sp);
