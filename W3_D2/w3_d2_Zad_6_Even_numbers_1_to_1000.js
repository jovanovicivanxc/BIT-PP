var evenNumbers = function () {
    var sum = 0;
    for (i = 0; i <= 1000; i = i + 2) {
        sum = sum + i;
    }
    for (i = 1; i < 500; i = i + 2) {
        sum = sum - i;
    }
    sum = sum * 12.5;

    return sum;
}

var sp = evenNumbers();
console.log(sp);
