var a = [3, 4, 5, 6];
var i = 0;
sum = 0;
var am;

do {
    sum = sum + a[i]
    i++;
} while (i < a.length)

am = sum / a.length;
console.log(am);