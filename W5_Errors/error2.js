var a = [1, 8, 11, 4, 9];

try {
    var n = 23;

    if (n > a.length - 1) {
        throw new RangeError("RangeError - The number must be less than 5!");
    }
    else if ((typeof n) != "number") {
        throw new TypeError("TypeError - The input is not a number!");
    }
    else {
        console.log(a[n]);
    }
} catch (e) {

    if (e instanceof RangeError) {
        console.log(e.message);
    }
    else if (e instanceof TypeError) {
        console.log(e.message);
    }
    //b = 1;
    // if (e instanceof ReferenceError) { }
    // if (e instanceof TypeError) {}
}
finally {
    console.log(a);
}
