var array1 = [3, 44, 5, 73, 5, 27, 4267, 984, 4,];
var b = [];
var i = 0;

// array1.forEach(function (element) {
//     b[i] = 2 * element;
//     i++;
// });

// console.log(b);

//________________________________________

for (var key in array1) {
    b[i] = 2 * array1[key];
    i++;
}
console.log(b);
