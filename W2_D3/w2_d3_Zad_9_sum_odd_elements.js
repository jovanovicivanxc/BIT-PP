var a = [3, 4, 5, 2, 7, 9, 34];
var sum = 0;

for (i = 0; i < a.length; i++) {
    if (a[i] % 2 == 1) {
        sum = sum + a[i];
    }
}

console.log(sum);
