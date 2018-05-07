// var num = function (s) {
//     var ind = 0;
//     for (var i = 0; i < s.length; i++) {
//         if (s[i] == "a" || s[i] == "e" || s[i] == "i" || s[i] == "o" || s[i] == "u") {
//             ind++;
//         }
//     }
//     return ind;
// }
// var s = "My random string";
// var p = num(s);
// console.log(p);


(function (s) {
    var ind = 0;
    for (var i = 0; i < s.length; i++) {
        if (s[i] == "a" || s[i] == "e" || s[i] == "i" || s[i] == "o" || s[i] == "u") {
            ind++;
        }
    }
    console.log(ind);
}
)("My random string");

