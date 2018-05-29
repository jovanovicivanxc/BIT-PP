var promises = []


for (var i = 0; i < 100; i++) {
    var promise1 = new Promise(function (resolve, reject) {
        var id = i;
        setTimeout(function () { resolve(id); }, Math.random() * 500);
    })
    promises.push(promise1);
}

Promise.all(promises).then(function (value) {
    console.log(value);
});