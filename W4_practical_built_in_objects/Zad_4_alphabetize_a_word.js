function alphaOrder(a) {
    var b = a.split(" ");
    var d = [];
    for (i = 0; i < b.length; i++) {
        d[i] = b[i].split("").sort().join("");
    }
    e = d.join(" ")
    return e;

}
// var e = d.join("");
// return e;

var result = alphaOrder("Republic Of Serbia")
console.log(result);