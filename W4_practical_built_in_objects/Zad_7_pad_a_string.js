// function pad(a, b, c) {

// }

// result = pad(0000, 123, "l");
// console.log(result);

var a = "0000";
var b = "123";
var c = "dr";
var d;

a1 = a.slice(0, (a.length - b.length));
console.log(a1);

if (c == "l") {

    d = a1.concat(b);
}
else if (c == "r") {
    d = b.concat(a1);
}
else {
    console.log("Wrong input!");


}
console.log(d);





// }



