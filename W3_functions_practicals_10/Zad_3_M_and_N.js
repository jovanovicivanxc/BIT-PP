(function (a) {
    var j = 0;
    var b = "";
    for (var i = 0; i < a.length; i++) {
        if (a[i] == "M" || a[i] == "m") {
            b = b + "*";
            j++;
        }
        else {
            b = b + a[i];
        }
    }
    console.log(b, j);
})("prograMming");
