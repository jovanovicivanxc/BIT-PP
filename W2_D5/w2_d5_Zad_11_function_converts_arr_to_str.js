function arrToStr(s) {
    var a = [];
    for (i = 0, j = 0; i < s.length; i++) {
        var d = s[i] * 1;
        if (isFinite(d) == true) {
            //if (s[i] != undefined && s[i] != Infinity && s[i] != -Infinity) {
            a[j] = d;
            j++;
        }
    }
    return a;
}

var b = ["1", "21", undefined, "42", "1e+3", NaN, "abc1"];
var c = arrToStr(b);
console.log(c);