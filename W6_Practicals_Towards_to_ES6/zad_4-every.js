var array1 = [3, 44, 5, 73, 5, 27, 4267, 984, 4,];
var b = [];
var ind = 0;
var ind2;

array1.forEach(function (element) {
    if (element > 40) {
        ind++;
    }
});

if (ind == 0) {
    ind2 = true;
}
else {
    ind2 = false;
}

console.log(ind2);
