var e;

try {
    a = 3;
    b = 0;

    if (b == 0) {
        throw new Error("Deljenje nulom!");
    }
    console.log(a / b);

} catch (e) {

    console.log(e.message);
    //b = 1;
    // if (e instanceof ReferenceError) { }
    // if (e instanceof TypeError) {}
}
finally {
    var c = a / b;
    console.log(c);
}

