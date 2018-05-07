function alphaOrder(a) {
    var a1 = a.toLowerCase();
    var b = a1.split("");
    c = b.reverse();
    var d = c.sort();
    var e = d.join("");
    return e;

}

var result = alphaOrder("Webmaster")
console.log(result);
