function isPrime(n) {
    var ind = true;
    for (i = 2; i < n; i++) {
        if (n % i == 0) {
            ind = false;
        }
    }
    return ind;
}

var a = isPrime(17);
if (a == true) {
    console.log("The number is prime!");
}
else {
    console.log("The number is not prime!")
}