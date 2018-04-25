var e = 78;
var p = 1;
var a = [2, -2, 3, 12, 5, 8];
var b = [];

if (p <= a.length) {

    for (i = 0; i < p; i++) {
        b[i] = a[i];
    }


    b[p] = e;

    for (; p < a.length; p++) {
        b[p + 1] = a[p];
    }

    console.log(b);

}

else {
    console.log("Wrong input!")
}