function revNum(n) {
    var digit;
    var digits = [];
    var i = 0;
    while (n > 0) {
        digit = n % 10;
        n = (n - digit) / 10;
        digits[i] = digit;
        i++
    }
    var b = "";
    for (i = 0; i < digits.length; i++) {
        b = b + digits[i];
    }

    return b;
}

var result = revNum(12345);
console.log(result);