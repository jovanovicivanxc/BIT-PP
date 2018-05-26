(() => {
    let a = [23, 11.5, 9, 'abc', 45, 28, 553];
    let j;
    let b = [];
    let c = [];
    let d = [];
    let e = [];
    for (let i = 0, j = 0; i < a.length; i++) {
        if (parseInt(a[i]) === a[i]) {
            b[j] = a[i];
            j++;
        }
    }
    console.log(b);

    for (let i = 0; i < b.length; i++) {
        c[i] = b[i] + "";
    }
    console.log(c);

    for (let i = 0, j = 0; i < c.length; i++) {
        if (c[i].includes("5") == true) {
            d[j] = c[i];
            j++;
        }
    }
    console.log(d);

    for (let i = 0; i < d.length; i++) {
        e[i] = parseFloat(d[i]);
    }
    console.log(e);


})();

