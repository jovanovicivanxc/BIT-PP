(function (a) {
    var tmp = a[0];
    a[0] = a[a.length - 1];
    a[a.length - 1] = tmp;
    console.log(a);
})([4, 5, 11, 9]);