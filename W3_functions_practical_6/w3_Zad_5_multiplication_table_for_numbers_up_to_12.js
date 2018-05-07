function digits(num) {
    a = "";
    for (i = 1; i <= num; i++) {
        for (j = 1; j <= num; j++) {
            a = a + i + " * " + j + " = " + i * j + ".\n";
        }
    }
    return a
}
var b = digits(6);
console.log(b);