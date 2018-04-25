var a = [5, 4, 3, 2, 5, 7, 8, 9, 6, 5, 3, 1, 2, 3, 4, 6, 8];
var b = 5;
var app = 0;

for (i = 0; i < a.length; i++) {
    if (b === a[i]) {
        app = app + 1;
    }
}

console.log(app);