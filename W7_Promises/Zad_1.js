
for (var i = 0; i < 100; i++) {
    new Promise(function (resolve, reject) {
        var id = i;
        setTimeout(function () { resolve(id); }, Math.random() * 500);

    }).then(function (i) {
        console.log(i);
    });
}