var array1 = [3, 44, 5, 73, 5, 27, 4267, 984, 4,];
var b = [];
var ind = false;

for (var key in array1) {
    if (array1[key] % 2 == 0) {
        ind = true;
        break;
    }
}

console.log(ind);
