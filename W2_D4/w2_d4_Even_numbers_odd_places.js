var a = [3, 4, 5, 6, 4, 7, 8, 9, 10];
var i = 1;
sum = 0;
do {
    if (a[i] % 2 == 0 && i % 2 == 1) {
        sum += a[i];
        i++;
    }
    else {
        i++;
    }


} while (i < a.length);
console.log(sum);
