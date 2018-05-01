var combinations = function (a, b) {
    var sum;
    for (i = a; i <= b; i++) {
        for (j = a; j <= b; j++) {
            if (i === j) {
                continue;
            } sum = (i, j);
        }
    }
    return sum;



}
var c = 1;
var d = 7;
var sp = combinations(c, d);
console.log(sp);
