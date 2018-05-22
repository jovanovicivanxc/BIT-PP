var array1 = [3, 44, 5, 73, 5, 27, 4267, 984, 4,];
var b = [];
var i = 0;

array1.forEach(function (element) {
    if (element < 50) {
        b[i] = element;
        i++;

    }
});

console.log(b);
