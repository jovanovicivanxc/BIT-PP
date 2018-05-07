var a = ['a', 'b', 'c'];
var b = [1, 2, 3];
var c = [];

for (i = 0, j = 0, k = 0; i < a.length + b.length; i++) {
    if (i % 2 == 0) {
        c[i] = a[j];
        j++;
    }
    else {
        c[i] = b[k];
        k++;
    }
}

console.log(c);
