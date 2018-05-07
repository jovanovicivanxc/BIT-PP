// function createMail(a, b) {
//     return a + "." + b + "@gmail.com";
// };

var mail = function () {
    return function (a, b) {
        return a + "." + b + "@gmail.com";
    };
}

console.log(mail()("pera", "peric"));
