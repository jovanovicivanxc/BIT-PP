var firstTwoLett = function (a) {

    var word = ""
    for (i = 0; i < a.length; i++) {

        if (typeof a[i] === 'string' && a[i].length > 1) {
            word += a[i][0] + a[i][1];
        }
    }
    return word;
}

var c = ["M", "Anne", 12, "Steve", "Joe", "John", "David", "Mark", true, "A"];
var sp = firstTwoLett(c);
console.log(sp);
