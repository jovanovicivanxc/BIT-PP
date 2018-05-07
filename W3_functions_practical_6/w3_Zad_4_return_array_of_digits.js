function digits(num) {
    var a = [];
    var b = [];
    var i = 0;
    while (num > 0) {
        digit = num % 10;
        num = (num - digit) / 10
        a[i] = digit;
        i++;
    }
    for (i = 0, j = a.length - 1; i < a.length; i++ , j--) {
        b[i] = a[j];
    }
    return b;
}

var b = digits(54332);
console.log(b);
