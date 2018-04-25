var n = 923;
var digit;

while (n > 0) {
    digit = n % 10;
    n = (n - digit) / 10;
    console.log(digit);
}